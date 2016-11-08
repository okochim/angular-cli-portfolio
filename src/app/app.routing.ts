import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }      from './stores/authGuardStore';
import { AuthService }    from './stores/authStore';
import { loginRoutes, authProviders }  from './login/login.routing';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  ...loginRoutes
];
export const appRoutingProviders: any[] = [
  authProviders,
  AuthGuard,
  AuthService
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);