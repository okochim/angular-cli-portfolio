import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,appRoutingProviders } from './app.routing';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CareerComponent } from './career/career.component';
import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';

import { TopModule } from './top/top.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CareerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TopModule,
    MaterialModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }