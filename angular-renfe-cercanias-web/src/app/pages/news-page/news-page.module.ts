import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "primeng/card";
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';

import { NewsPageComponent } from './news-page.component';

@NgModule({
  declarations: [
    NewsPageComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
    LoadingSpinnerModule
  ]
})
export class NewsPageModule { }
