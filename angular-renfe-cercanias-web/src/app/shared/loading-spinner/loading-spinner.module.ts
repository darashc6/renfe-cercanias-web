import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class LoadingSpinnerModule { }
