import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabViewModule } from "primeng/tabview";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { TrainFaresPageComponent } from './train-fares-page.component';
import { TrainFareInfoCardComponent } from 'src/app/components/train-fare-info-card/train-fare-info-card.component';



@NgModule({
  declarations: [
    TrainFaresPageComponent,
    TrainFareInfoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TabViewModule,
    CardModule,
    ButtonModule
  ]
})
export class TrainFaresPageModule { }
