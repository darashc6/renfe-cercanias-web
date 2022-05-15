import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationInfoPageComponent } from './station-info-page.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';
import { ErrorSectionModule } from 'src/app/shared/error-section/error-section.module';


@NgModule({
  declarations: [
    StationInfoPageComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterModule,
    LoadingSpinnerModule,
    ErrorSectionModule
  ]
})
export class StationInfoPageModule { }
