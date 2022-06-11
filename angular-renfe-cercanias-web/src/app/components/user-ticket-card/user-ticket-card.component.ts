import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-user-ticket-card',
  templateUrl: './user-ticket-card.component.html',
  styleUrls: ['./user-ticket-card.component.scss']
})
export class UserTicketCardComponent implements OnInit {
  @Input() ticket?: Ticket;
  dateExpiry?: Date;

  constructor() { }

  ngOnInit(): void {
    this.dateExpiry = new Date(this.ticket!.dateBought);
    this.dateExpiry.setHours(23, 59, 59, 0);
    console.log(this.dateExpiry);
  }

}
