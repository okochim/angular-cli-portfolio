import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent }  from './top.component';
import { AuthGuard } from '../stores/authGuardStore';

const topRoutes: Routes = [
  {
    path: 'top',
    component: TopComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Portfolio Registration Top'
    }
  }
];
export const topRouting: ModuleWithProviders = RouterModule.forChild(topRoutes);
