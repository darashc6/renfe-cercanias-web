import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationInfoPageComponent } from './station-info-page.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StationInfoPageComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterModule
  ]
})
export class StationInfoPageModule { }
