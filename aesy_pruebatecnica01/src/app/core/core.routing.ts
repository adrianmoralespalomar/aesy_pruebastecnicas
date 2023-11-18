import { Routes } from '@angular/router';
export const CoreRoutes: Routes = [
  {  
    path:'',
    loadComponent:()=>import('./core.component').then(u=>u.CoreComponent)
  },
  {  
    path:'user-details',
    loadComponent:()=>import('../users/components/user-details/user-details.component').then(u=>u.UserDetailsComponent)
  }
]
