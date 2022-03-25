import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-fare-info-card',
  templateUrl: './ticket-fare-info-card.component.html',
  styleUrls: ['./ticket-fare-info-card.component.scss']
})
export class TicketFareInfoCardComponent implements OnInit {
  @Input() groupName: string = '';
  @Input() selectedFare: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
