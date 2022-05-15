import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';
import { ToastModule } from 'primeng/toast';

import { AccountRegistrationPageComponent } from './account-registration-page.component';



@NgModule({
  declarations: [
    AccountRegistrationPageComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    RippleModule,
    CalendarModule,
    LoadingSpinnerModule,
    ToastModule
  ]
})
export class AccountRegistrationPageModule { }
