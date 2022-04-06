import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { IconModule } from '@visurel/iconify-angular';
import { TimelineModule } from "primeng/timeline";
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';

import { TrainLinesPageComponent } from './train-lines-page.component';
import { TrainLineInfoCardComponent } from 'src/app/components/train-line-info-card/train-line-info-card.component';
import { TrainLineStationInfoCardComponent } from 'src/app/components/train-line-station-info-card/train-line-station-info-card.component';
import { TrainLineNameCardComponent } from 'src/app/components/train-line-name-card/train-line-name-card.component';


@NgModule({
  declarations: [
    TrainLinesPageComponent,
    TrainLineInfoCardComponent,
    TrainLineStationInfoCardComponent,
    TrainLineNameCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    IconModule,
    TimelineModule,
    LoadingSpinnerModule
  ]
})
export class TrainLinesPageModule { }
