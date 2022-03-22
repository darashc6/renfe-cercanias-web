import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

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
    RippleModule
  ]
})
export class CustomerServicePageModule { }
