import { ChangeDetectorRef, Component, HostListener, inject, OnInit } from '@angular/core';
import { Transaction } from '../../models/transactionModel';
import { TransactionPipe } from './transaction.pipe';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { CurrenciesPipe } from './currenct.pipe';

@Component({
    selector: "home-dashboard",
    standalone: true,
    templateUrl: './dashboard.component.html',
    imports: [TransactionPipe, CurrenciesPipe]
})

export default class DashboardComponent implements OnInit {
    transactions: Transaction[] = [];
    limit = 25;
    page = 1;
    loading = false;
    hasMore = true;

    ngOnInit(): void {
      this.fetch();
    }
    readonly #http = inject(HttpService);
    readonly #cdr = inject(ChangeDetectorRef);


    fetch(): void {
        if (this.loading || !this.hasMore) {
            return;
        }

        this.loading = true;
        const pagedUrl = `http://localhost:3000/transactions?_page=${this.page}&_per_page=${this.limit}`;

        this.#http.get<{ data?: Transaction[] | null }>(
            (response) => {
                const transactions = response?.data ?? [];
                this.hasMore = transactions.length === this.limit;
                this.transactions = [...this.transactions, ...transactions];

                if (transactions.length > 0) {
                    this.page += 1;
                }

                this.loading = false;
                this.#cdr.detectChanges();
            },
            (error: HttpErrorResponse) => {
                console.error('Transactions fetch failed:', error);
                this.transactions = [];
                this.loading = false;
                this.#cdr.detectChanges();
            },
            pagedUrl
        );
    }

    @HostListener('window:scroll', [])
    onScroll(): void {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200;

      if (scrollPosition >= threshold) {
        this.fetch();
      }
    }
}
