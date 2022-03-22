import { Component, OnInit } from '@angular/core';
import { Fare } from 'src/app/models/Fare';
import { FareService } from 'src/app/services/fare/fare.service';

@Component({
  selector: 'app-train-fares-page',
  templateUrl: './train-fares-page.component.html',
  styleUrls: ['./train-fares-page.component.scss']
})
export class TrainFaresPageComponent implements OnInit {
  regularFares: Fare[] = [];
  discountFares: Fare[] = [];

  constructor(private fareService: FareService) { }

  ngOnInit(): void {
    this.getFares();
  }

  getFares() {
    this.fareService.getFares().subscribe(fares => {
      fares.forEach(fare => {
        if (fare.type === 'regular') {
          this.regularFares.push(fare);
        } else {
          this.discountFares.push(fare);
        }
      })
    })
  }

}
