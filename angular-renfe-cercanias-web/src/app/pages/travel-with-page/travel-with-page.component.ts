import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-with-page',
  templateUrl: './travel-with-page.component.html',
  styleUrls: ['./travel-with-page.component.scss']
})
export class TravelWithPageComponent implements OnInit {
  railNetworkId: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.railNetworkId = params['rail-network-id']);
  }

}
