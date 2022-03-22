import { Component, Input, OnInit } from '@angular/core';
import { Fare } from 'src/app/models/Fare';

@Component({
  selector: 'app-train-fare-info-card',
  templateUrl: './train-fare-info-card.component.html',
  styleUrls: ['./train-fare-info-card.component.scss']
})
export class TrainFareInfoCardComponent implements OnInit {
  @Input() fare?: Fare;

  constructor() { }

  ngOnInit(): void {
  }

}
