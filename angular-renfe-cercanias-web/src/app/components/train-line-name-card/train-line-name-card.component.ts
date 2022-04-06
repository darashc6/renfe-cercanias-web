import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-line-name-card',
  templateUrl: './train-line-name-card.component.html',
  styleUrls: ['./train-line-name-card.component.scss']
})
export class TrainLineNameCardComponent implements OnInit {
  @Input() lineName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
