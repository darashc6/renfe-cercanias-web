import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { IconModule } from '@visurel/iconify-angular';
import { TimelineModule } from "primeng/timeline";

import { TrainLinesPageComponent } from './train-lines-page.component';
import { TrainLineInfoCardComponent } from 'src/app/components/train-line-info-card/train-line-info-card.component';
import { TrainLineStationInfoCardComponent } from 'src/app/components/train-line-station-info-card/train-line-station-info-card.component';


@NgModule({
  declarations: [
    TrainLinesPageComponent,
    TrainLineInfoCardComponent,
    TrainLineStationInfoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    IconModule,
    TimelineModule
  ]
})
export class TrainLinesPageModule { }
