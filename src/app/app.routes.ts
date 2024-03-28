import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "", 'title' : 'Home',
        loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent)
    },
    {
        path : "profile", 'title' : 'Profile',
        loadComponent: () => import('./profile/profile.component').then((c) => c.ProfileComponent)
    }
];