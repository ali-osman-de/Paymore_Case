import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencies',
    standalone: true
})

export class CurrenciesPipe implements PipeTransform {
  transform(amount: number | string | null | undefined, currencyCode: string | null | undefined): string {
    const parsedAmount = Number(amount);
    if (!Number.isFinite(parsedAmount) || !currencyCode) {
      return '-';
    }

    try {
      return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: currencyCode
      }).format(parsedAmount);
    } catch {
      return '-';
    }
  }
}
