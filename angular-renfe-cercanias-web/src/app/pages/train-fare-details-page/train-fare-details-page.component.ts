import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fare } from 'src/app/models/Fare';
import { FareService } from 'src/app/services/fare/fare.service';

@Component({
  selector: 'app-train-fare-details-page',
  templateUrl: './train-fare-details-page.component.html',
  styleUrls: ['./train-fare-details-page.component.scss']
})
export class TrainFareDetailsPageComponent implements OnInit {
  fareId: string = '';
  fare?: Fare;

  constructor(private route: ActivatedRoute, private fareService: FareService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.fareId = params['id']);
    this.getFare();
  }

  getFare() {
    this.fareService.getFare(this.fareId).subscribe(fare => this.fare = fare);
  }

}
