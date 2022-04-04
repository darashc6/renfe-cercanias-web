import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from 'src/app/models/Station';
import { TrainLine } from 'src/app/models/TrainLine';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';

@Component({
  selector: 'app-train-lines-page',
  templateUrl: './train-lines-page.component.html',
  styleUrls: ['./train-lines-page.component.scss']
})
export class TrainLinesPageComponent implements OnInit {
  railNetworkId: string = '';
  railNetworkName: string = '';
  trainLines: TrainLine[] = [];
  trainLineSelected?: TrainLine;

  constructor(private route: ActivatedRoute, private railNetworkService: RailNetworkService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.railNetworkId = params['rail-network-id']);

    this.getTrainLines();
  }

  getTrainLines() {
    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(railNetwork => {
      this.railNetworkName = railNetwork.name;
      this.trainLines = railNetwork.trainLines;
      this.trainLineSelected = this.trainLines[0];
    });
  }

  selectTrainLine(trainLineId: string) {
    this.trainLineSelected = this.trainLines.find(trainLine => trainLine.trainLineId == trainLineId)!;
  }
}
