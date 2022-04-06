import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RailNetwork } from 'src/app/models/RailNetwork';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';

@Component({
  selector: 'app-customer-service-form-page',
  templateUrl: './customer-service-form-page.component.html',
  styleUrls: ['./customer-service-form-page.component.scss']
})
export class CustomerServiceFormPageComponent implements OnInit {
  railNetworkId: string = '';
  railNetwork?: RailNetwork;
  isLoading: boolean = true;

  petitionTypes: string[] = [
    'INFORMACIÓN',
    'SUGERENCIA',
    'QUEJA',
  ]

  customerServiceForm: FormGroup = new FormGroup({
    firstNameControl: new FormControl('', [Validators.required]),
    firstSurnameControl: new FormControl('', [Validators.required]),
    secondSurnameControl: new FormControl(''),
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    phoneNumberControl: new FormControl(''),
    commentControl: new FormControl('', [Validators.required])
  })

  constructor(private railNetworkService: RailNetworkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.railNetworkId = params['rail-network-id']);

    setTimeout(() => {
      this.isLoading = false;
    }, 500);

    this.getRailNetwork();
  }

  getRailNetwork() {
    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(railNetwork => this.railNetwork = railNetwork);
  }

}
