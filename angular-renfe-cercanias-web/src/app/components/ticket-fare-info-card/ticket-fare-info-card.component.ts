import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Fare } from 'src/app/models/Fare';

@Component({
  selector: 'app-ticket-fare-info-card',
  templateUrl: './ticket-fare-info-card.component.html',
  styleUrls: ['./ticket-fare-info-card.component.scss']
})
export class TicketFareInfoCardComponent implements OnInit {
  @Input() groupName: string = '';
  @Input() selectedFare?: Fare;
  @Input() fare?: Fare;
  @Input() nZones: number = 1;
  @Output() onSelectedFare = new EventEmitter<Fare>();

  farePrice: number | undefined = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.farePrice = this.fare?.prices?.find((farePrice) => farePrice.n_zones === this.nZones)?.price
  }

  onRadioButtonClick() {
    this.onSelectedFare.emit(this.fare);
  }
}
