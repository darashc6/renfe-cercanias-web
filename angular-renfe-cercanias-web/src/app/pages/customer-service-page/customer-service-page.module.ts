import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';

import { CustomerServicePageComponent } from './customer-service-page.component';



@NgModule({
  declarations: [
    CustomerServicePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    RippleModule,
    LoadingSpinnerModule
  ]
})
export class CustomerServicePageModule { }
