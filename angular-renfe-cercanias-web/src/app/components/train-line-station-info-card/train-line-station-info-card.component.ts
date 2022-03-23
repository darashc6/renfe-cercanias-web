import { Component, Input, OnInit } from '@angular/core';
import { Station } from 'src/app/models/Station';

@Component({
  selector: 'app-train-line-station-info-card',
  templateUrl: './train-line-station-info-card.component.html',
  styleUrls: ['./train-line-station-info-card.component.scss']
})
export class TrainLineStationInfoCardComponent implements OnInit {
  @Input() station?: Station

  constructor() { }

  ngOnInit(): void {
  }

}
