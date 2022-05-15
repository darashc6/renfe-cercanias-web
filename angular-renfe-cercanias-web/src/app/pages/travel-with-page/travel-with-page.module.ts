import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccordionModule } from "primeng/accordion";
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';
import { ErrorSectionModule } from 'src/app/shared/error-section/error-section.module';

import { TravelWithPageComponent } from './travel-with-page.component';



@NgModule({
  declarations: [
    TravelWithPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule,
    LoadingSpinnerModule,
    ErrorSectionModule
  ]
})
export class TravelWithPageModule { }
