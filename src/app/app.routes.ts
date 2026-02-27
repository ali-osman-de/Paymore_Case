import { Router, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

const guestOnly = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.isAuthenticated() ? router.parseUrl('/app/home') : true;
};

const authOnly = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.isAuthenticated() ? true : router.parseUrl('/');
};

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./layouts/singleLayout.component"),
        children: [
            {
                path: "",
                pathMatch: "full",
                canActivate: [guestOnly],
                loadComponent: () => import("./pages/welcoming/welcoming.component")
            },
            {
                path: "app/home",
                canActivate: [authOnly],
                loadComponent: () => import("./pages/dashboard/dashboard.component")
            }
        ]
    },
    { path: '**', loadComponent: () => import("./pages/notFound/notFound.component")}
];
