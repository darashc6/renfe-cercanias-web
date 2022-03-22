import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccordionModule } from "primeng/accordion";

import { TravelWithPageComponent } from './travel-with-page.component';



@NgModule({
  declarations: [
    TravelWithPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule
  ]
})
export class TravelWithPageModule { }
