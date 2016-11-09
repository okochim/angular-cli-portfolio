import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareerComponent } from '../career/career.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';
import { ViewPortfolioComponent } from '../view-portfolio/view-portfolio.component';

import { AuthGuard } from '../stores/authGuardStore';

const topRoutes: Routes = [
  {
    path: 'career',
    component: CareerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewPortfolio',
    component: ViewPortfolioComponent,
    canActivate: [AuthGuard]
  }
];
export const topRouting: ModuleWithProviders = RouterModule.forChild(topRoutes);
