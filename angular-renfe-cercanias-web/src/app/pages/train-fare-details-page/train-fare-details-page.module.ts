import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';

import { TrainFareDetailsPageComponent } from './train-fare-details-page.component';



@NgModule({
  declarations: [
    TrainFareDetailsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule
  ]
})
export class TrainFareDetailsPageModule { }
