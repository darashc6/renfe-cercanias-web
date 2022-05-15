import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BuyTicketPageComponent } from './buy-ticket-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

import { TicketFareInfoCardModule } from 'src/app/shared/ticket-fare-info-card/ticket-fare-info-card.module';
import { PaymentMethodBtnModule } from 'src/app/shared/payment-method-btn/payment-method-btn.module';

@NgModule({
  declarations: [
    BuyTicketPageComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    TicketFareInfoCardModule,
    PaymentMethodBtnModule
  ]
})
export class BuyTicketPageModule { }
