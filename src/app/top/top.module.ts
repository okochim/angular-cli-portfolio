import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { topRouting } from './top.routing';
import { CareerComponent } from '../career/career.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';
import { ViewPortfolioComponent } from '../view-portfolio/view-portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    topRouting,
    MaterialModule.forRoot()
  ],
  declarations: [
    CareerComponent,
    ProfileComponent,
    SettingsComponent,
    ViewPortfolioComponent,
  ],
  providers: []
})
export class TopModule { }