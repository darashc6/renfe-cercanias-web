import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Fare } from 'src/app/models/Fare';
import { RailNetwork } from 'src/app/models/RailNetwork';
import { DiscountFaresService } from 'src/app/services/discount-fares/discount-fares.service';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';

@Component({
  selector: 'app-train-fares-page',
  templateUrl: './train-fares-page.component.html',
  styleUrls: ['./train-fares-page.component.scss']
})
export class TrainFaresPageComponent implements OnInit {
  railNetworkId: string = '';
  railNetwork?: RailNetwork;
  discountFares?: Fare[];
  isLoading: boolean = true;
  activeIndex: number = 0;

  constructor(private route: ActivatedRoute, private railNetworkService: RailNetworkService, private discountFaresService: DiscountFaresService, private titleService: Title) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);

    this.route.params.subscribe(params => this.railNetworkId = params["rail-network-id"]);

    this.getFares();
  }

  getFares() {
    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(railNetwork => {
      this.railNetwork = railNetwork;

      this.titleService.setTitle(`Cercanías ${this.railNetwork.name} - Tarifas`);
    });

    this.discountFaresService.getDiscountFares().subscribe(discountFares => this.discountFares = discountFares);
  }

  onTabChange() {
    /* (document.querySelector(".p-tabview .p-tabview-nav-content li.p-highlight") as HTMLElement).style.setProperty('left', '50%', 'important'); */
    console.log((document.querySelector(".p-tabview .p-tabview-nav-content .p-tabview-ink-bar") as HTMLElement))
  }

}
