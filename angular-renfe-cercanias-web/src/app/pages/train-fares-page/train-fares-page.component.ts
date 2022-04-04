import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fare } from 'src/app/models/Fare';
import { DiscountFaresService } from 'src/app/services/discount-fares/discount-fares.service';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';

@Component({
  selector: 'app-train-fares-page',
  templateUrl: './train-fares-page.component.html',
  styleUrls: ['./train-fares-page.component.scss']
})
export class TrainFaresPageComponent implements OnInit {
  railNetworkId: string = '';
  regularFares: Fare[] = [];
  discountFares: Fare[] = [];

  constructor(private route: ActivatedRoute, private railNetworkService: RailNetworkService, private discountFaresService: DiscountFaresService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.railNetworkId = params["rail-network-id"])
    this.getFares();
  }

  getFares() {
    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(railNetwork => {
      this.regularFares = railNetwork.fares
    });
    this.discountFaresService.getDiscountFares().subscribe(discountFares => this.discountFares = discountFares);
  }

}
