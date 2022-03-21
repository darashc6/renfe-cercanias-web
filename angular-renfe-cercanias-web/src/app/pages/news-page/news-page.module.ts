import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "primeng/card";
import { RouterModule } from '@angular/router';

import { NewsPageComponent } from './news-page.component';


@NgModule({
  declarations: [
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule
  ]
})
export class NewsPageModule { }
