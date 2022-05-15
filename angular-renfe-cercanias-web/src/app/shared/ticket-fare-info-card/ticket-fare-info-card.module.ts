import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

import { TicketFareInfoCardComponent } from 'src/app/components/ticket-fare-info-card/ticket-fare-info-card.component';



@NgModule({
  declarations: [
    TicketFareInfoCardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RadioButtonModule,
    FormsModule
  ],
  exports: [
    TicketFareInfoCardComponent
  ]
})
export class TicketFareInfoCardModule { }
