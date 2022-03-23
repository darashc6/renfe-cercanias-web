import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/Station';
import { TrainLine } from 'src/app/models/TrainLine';
import { TrainLineService } from 'src/app/services/train-line/train-line.service';

@Component({
  selector: 'app-train-lines-page',
  templateUrl: './train-lines-page.component.html',
  styleUrls: ['./train-lines-page.component.scss']
})
export class TrainLinesPageComponent implements OnInit {
  trainLines: TrainLine[] = [];
  stationsToShow: Station[] = [];

  constructor(private trainLineService: TrainLineService) { }

  ngOnInit(): void {
    this.getTrainLines();
  }

  getTrainLines() {
    this.trainLineService.getTrainLines().subscribe(trainLines => {
      this.trainLines = trainLines;
      this.stationsToShow = this.trainLines[1].stations;
    })
  }
}
