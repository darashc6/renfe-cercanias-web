import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomerServiceFormPageComponent } from './customer-service-form-page.component';



@NgModule({
  declarations: [
    CustomerServiceFormPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CustomerServiceFormPageModule { }
