import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterOutlet],
    selector: 'app-single-layout',
    templateUrl: './singleLayout.component.html'
})

export default class AppSingleLayout {
    constructor(private router: Router) {}
    clickLoginButton(){
        let user = localStorage.getItem("access-token");
        if (!user) {
            return;
        }
        localStorage.removeItem("access-token");
        this.router.navigateByUrl("/");
    }
    loginButtonType(): string {
        let user = localStorage.getItem("access-token");
        if (!user) {
            return "Giriş Yap";
        }
        return "Çıkış Yap";
    }

}