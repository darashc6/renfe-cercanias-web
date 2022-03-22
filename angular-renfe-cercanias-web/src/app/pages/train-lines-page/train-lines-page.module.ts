import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TrainLinesPageComponent } from './train-lines-page.component';



@NgModule({
  declarations: [
    TrainLinesPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TrainLinesPageModule { }
