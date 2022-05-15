import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page.component';

import { ErrorSectionModule } from 'src/app/shared/error-section/error-section.module';


@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ErrorSectionModule
  ]
})
export class ErrorPageModule { }
