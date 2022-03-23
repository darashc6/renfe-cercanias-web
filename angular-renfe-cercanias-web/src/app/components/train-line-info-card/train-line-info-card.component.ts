import { Component, Input, OnInit } from '@angular/core';
import { TrainLine } from 'src/app/models/TrainLine';

@Component({
  selector: 'app-train-line-info-card',
  templateUrl: './train-line-info-card.component.html',
  styleUrls: ['./train-line-info-card.component.scss']
})
export class TrainLineInfoCardComponent implements OnInit {
  @Input() trainLine?: TrainLine;

  constructor() { }

  ngOnInit(): void {
  }

}
