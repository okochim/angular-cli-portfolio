import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TopRouting } from './top.routing';
import { TopComponent } from '../top/top.component';
import { CareerComponent } from '../career/career.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';
import { ViewPortfolioComponent } from '../view-portfolio/view-portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopRouting,
    MaterialModule.forRoot()
  ],
  declarations: [
    TopComponent,
    CareerComponent,
    ProfileComponent,
    SettingsComponent,
    ViewPortfolioComponent,
  ],
  providers: []
})
export class TopModule { }