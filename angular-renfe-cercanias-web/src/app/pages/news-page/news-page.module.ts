import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "primeng/card";

import { NewsPageComponent } from './news-page.component';


@NgModule({
  declarations: [
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class NewsPageModule { }
