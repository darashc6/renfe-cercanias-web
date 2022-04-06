import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';

@Component({
  selector: 'app-travel-with-page',
  templateUrl: './travel-with-page.component.html',
  styleUrls: ['./travel-with-page.component.scss']
})
export class TravelWithPageComponent implements OnInit {
  railNetworkId: string = '';
  railNetworkName: string = '';

  constructor(private route: ActivatedRoute, private railNetworkService: RailNetworkService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.railNetworkId = params['rail-network-id']);

    this.getRailNetwork();
  }

  getRailNetwork() {
    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(railNetwork => this.railNetworkName = railNetwork.name)
  }

}
