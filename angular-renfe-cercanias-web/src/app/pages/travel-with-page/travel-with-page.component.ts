import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RailNetwork } from 'src/app/models/RailNetwork';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';

@Component({
  selector: 'app-travel-with-page',
  templateUrl: './travel-with-page.component.html',
  styleUrls: ['./travel-with-page.component.scss']
})
export class TravelWithPageComponent implements OnInit {
  railNetworkId: string = '';
  railNetwork?: RailNetwork;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private railNetworkService: RailNetworkService, private titleService: Title) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);

    this.route.params.subscribe(params => this.railNetworkId = params['rail-network-id']);

    this.getRailNetwork();
  }

  getRailNetwork() {
    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(
      res => {
        this.railNetwork = res;
        this.titleService.setTitle(`Cercanias ${this.railNetwork.name} - Viajar con`);
      },
      err => this.titleService.setTitle('Error - 404')
    )
  }

}
