import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from "primeng/inputtextarea";
import { KeyFilterModule } from "primeng/keyfilter";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';
import { ToastModule } from "primeng/toast";

import { CustomerServiceFormPageComponent } from './customer-service-form-page.component';



@NgModule({
  declarations: [
    CustomerServiceFormPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    KeyFilterModule,
    DropdownModule,
    LoadingSpinnerModule,
    ToastModule
  ]
})
export class CustomerServiceFormPageModule { }
