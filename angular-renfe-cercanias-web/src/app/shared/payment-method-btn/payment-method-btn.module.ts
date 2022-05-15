import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@visurel/iconify-angular';

import { PaymentMethodBtnComponent } from 'src/app/components/payment-method-btn/payment-method-btn.component';



@NgModule({
  declarations: [
    PaymentMethodBtnComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    PaymentMethodBtnComponent
  ]
})
export class PaymentMethodBtnModule { }
