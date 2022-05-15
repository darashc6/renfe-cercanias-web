import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorSectionComponent } from 'src/app/components/error-section/error-section.component';


@NgModule({
  declarations: [
    ErrorSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ErrorSectionComponent
  ]
})
export class ErrorSectionModule { }
