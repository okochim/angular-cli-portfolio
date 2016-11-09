import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }      from './stores/authGuardStore';
import { AuthService }    from './stores/authStore';
import { LoginComponent } from './login/login.component';
import { TopComponent } from './top/top.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'top',
    loadChildren: './top/top.module#TopModule',
  }
];
export const authProviders = [
  AuthGuard,
  AuthService
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
