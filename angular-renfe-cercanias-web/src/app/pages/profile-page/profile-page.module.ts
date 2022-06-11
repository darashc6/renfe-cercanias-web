import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from "primeng/divider";
import { RadioButtonModule } from "primeng/radiobutton";
import { IconModule } from '@visurel/iconify-angular';
import { TicketFareInfoCardModule } from 'src/app/shared/ticket-fare-info-card/ticket-fare-info-card.module';
import { PaymentMethodBtnModule } from 'src/app/shared/payment-method-btn/payment-method-btn.module';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';

import { ProfilePageComponent } from './profile-page.component';
import { UserTicketCardComponent } from 'src/app/components/user-ticket-card/user-ticket-card.component';
import { DefaultStationRadioBtnComponent } from 'src/app/components/default-station-radio-btn/default-station-radio-btn.component';
import { ProfilePageOptionBtnComponent } from 'src/app/components/profile-page-option-btn/profile-page-option-btn.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    UserTicketCardComponent,
    DefaultStationRadioBtnComponent,
    ProfilePageOptionBtnComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    DividerModule,
    IconModule,
    RadioButtonModule,
    TicketFareInfoCardModule,
    PaymentMethodBtnModule,
    ToastModule,
    CalendarModule,
    RouterModule
  ]
})
export class ProfilePageModule { }
