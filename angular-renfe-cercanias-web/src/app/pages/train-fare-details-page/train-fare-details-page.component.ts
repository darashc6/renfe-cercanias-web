import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Fare } from 'src/app/models/Fare';
import { RailNetwork } from 'src/app/models/RailNetwork';
import { DiscountFaresService } from 'src/app/services/discount-fares/discount-fares.service';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';

@Component({
  selector: 'app-train-fare-details-page',
  templateUrl: './train-fare-details-page.component.html',
  styleUrls: ['./train-fare-details-page.component.scss']
})
export class TrainFareDetailsPageComponent implements OnInit {
  fareId: string = '';
  railNetworkId: string = '';
  railNetwork?: RailNetwork;
  fare?: Fare;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private railNetworkService: RailNetworkService, private discountFaresService: DiscountFaresService, private titleService: Title) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 250);


    this.route.params.subscribe(params => {
      this.railNetworkId = params['rail-network-id'];
      this.fareId = params['fare-id'];
    });

    this.getFare();
  }

  getFare() {
    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(railNetwork => {
      this.railNetwork = railNetwork;

      if (this.railNetwork) {
        this.fare = this.railNetwork.fares.find(fare => fare.fareId == this.fareId);



        if (!this.fare) {
          this.discountFaresService.getDiscountFare(this.fareId).subscribe(discountFare => {
            this.fare = discountFare;
            this.titleService.setTitle(`Cercanías ${this.railNetwork!.name} - ${this.fare!.fareDescription.title}`);
          });
        }

        this.titleService.setTitle(`Cercanías ${this.railNetwork.name} - ${this.fare!.fareDescription.title}`);
      }
    });
  }

}
