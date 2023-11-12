import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path:'',
        loadChildren:()=>import ('./core/core.routing').then(m=>m.CoreRoutes)
    },
    {
        path:'login',
        loadComponent:()=>import ('./login/login.component').then(m=>m.LoginComponent)
    },
];
