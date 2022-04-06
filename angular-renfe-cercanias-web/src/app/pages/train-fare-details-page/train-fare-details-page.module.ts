import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';

import { TrainFareDetailsPageComponent } from './train-fare-details-page.component';



@NgModule({
  declarations: [
    TrainFareDetailsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule,
    LoadingSpinnerModule
  ]
})
export class TrainFareDetailsPageModule { }
