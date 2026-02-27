import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "app-welcoming",
    standalone: true,
    templateUrl: './welcoming.component.html',
    imports: [],
    providers: []
})

export default class WelcomingComponent {
    constructor(
        private router: Router
    ){}

    username:string = "";
    password:string = "";

    cacthUserName(event: any){
        this.username = event.target.value;
    }

    cacthPassword(event: any){
        this.password = event.target.value;
    }

    handleSubmit(username: string, password: string){
        const mockData = {
            username: "admin",
            password: "123456"
        }
        if (username == null || password == null) {
            console.log("Kontrol ediniz! Boş değerler var!");
        }

        if (username != mockData.username || password != mockData.password) {
            console.log("Username veya passowrd hatalı");
        }

        if (username === mockData.username && password === mockData.password) {
            localStorage.setItem("access-token","access-token");
            this.router.navigate(["/app/home"]);
            console.log("Giriş Başarılı");
        };

        return false;
    }
}