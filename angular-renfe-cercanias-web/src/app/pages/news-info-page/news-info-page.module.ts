import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';
import { ErrorSectionModule } from 'src/app/shared/error-section/error-section.module';

import { NewsInfoPageComponent } from './news-info-page.component';



@NgModule({
  declarations: [
    NewsInfoPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingSpinnerModule,
    ErrorSectionModule
  ]
})
export class NewsInfoPageModule { }
