import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard }      from './stores/authGuardStore';
import { AuthService }    from './stores/authStore';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
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
        path: 'portfolio',
        loadChildren: 'app/top/top.module#TopModule',
        data: {
          preload: true
        }
      }
    ],)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AppRoutingModule {}
