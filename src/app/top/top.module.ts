import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TopComponent} from './top.component';
import {topRouting} from './top.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      topRouting
    ],
    declarations: [
      TopComponent
    ],
    providers: []
})
export class TopModule { }