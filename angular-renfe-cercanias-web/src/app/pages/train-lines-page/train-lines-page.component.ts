import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private railNetworkService: RailNetworkService, private titleService: Title) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.railNetworkId = params['rail-network-id']);

    setTimeout(() => {
      this.isLoading = false;
    }, 500);

    this.getTrainLines();
  }

  getTrainLines() {
    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(railNetwork => {
      this.railNetworkName = railNetwork.name;
      this.trainLines = railNetwork.trainLines;
      this.trainLineSelected = this.trainLines[0];

      this.titleService.setTitle(`Cercanías ${this.railNetworkName} - Estaciones y líneas`);
    });
  }

  selectTrainLine(trainLineId: string) {
    this.trainLineSelected = this.trainLines.find(trainLine => trainLine.trainLineId == trainLineId)!;
  }
}
