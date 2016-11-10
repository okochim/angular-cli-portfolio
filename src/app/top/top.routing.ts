import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopComponent } from './top.component';
import { CareerComponent } from '../career/career.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';
import { ViewPortfolioComponent } from '../view-portfolio/view-portfolio.component';

import { AuthGuard } from '../stores/authGuardStore';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TopComponent,
        // canActivate: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'view',
            pathMatch: 'full'
          },
          {
            path: 'view',
            component: ViewPortfolioComponent,
            // canActivate: [AuthGuard]
          },
          {
            path: 'career',
            component: CareerComponent,
            // canActivate: [AuthGuard]
          },
          {
            path: 'profile',
            component: ProfileComponent,
            // canActivate: [AuthGuard]
          },
          {
            path: 'settings',
            component: SettingsComponent,
            // canActivate: [AuthGuard]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class TopRouting { }
