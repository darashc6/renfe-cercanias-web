import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RailNetwork } from 'src/app/models/RailNetwork';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';

@Component({
  selector: 'app-customer-service-page',
  templateUrl: './customer-service-page.component.html',
  styleUrls: ['./customer-service-page.component.scss']
})
export class CustomerServicePageComponent implements OnInit {
  railNetworkId: string = '';
  railNetwork?: RailNetwork
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private railNetworkService: RailNetworkService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.railNetworkId = params['rail-network-id'])

    setTimeout(() => {
      this.isLoading = false;
    }, 500);

    this.getRailNetwork();
  }

  getRailNetwork() {
    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(railNetwork => this.railNetwork = railNetwork);
  }

}
