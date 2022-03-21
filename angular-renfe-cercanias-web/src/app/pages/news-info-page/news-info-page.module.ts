import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NewsInfoPageComponent } from './news-info-page.component';



@NgModule({
  declarations: [
    NewsInfoPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NewsInfoPageModule { }
