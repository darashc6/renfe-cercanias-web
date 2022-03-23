import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { IconModule } from '@visurel/iconify-angular';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { AccountPageComponent } from './account-page.component';



@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    IconModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RouterModule
  ]
})
export class AccountPageModule { }
