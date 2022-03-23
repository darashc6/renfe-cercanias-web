import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

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
    RippleModule
  ]
})
export class AccountRegistrationPageModule { }
