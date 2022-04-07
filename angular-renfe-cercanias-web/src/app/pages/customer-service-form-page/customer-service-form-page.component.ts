import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RailNetwork } from 'src/app/models/RailNetwork';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';
import { CustomerServiceFormData } from 'src/app/models/CustomerServiceFormData';
import { CustomerServiceFormService } from 'src/app/services/customer-service-form/customer-service-form.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer-service-form-page',
  templateUrl: './customer-service-form-page.component.html',
  styleUrls: ['./customer-service-form-page.component.scss'],
  providers: [MessageService]
})
export class CustomerServiceFormPageComponent implements OnInit {
  railNetworkId: string = '';
  railNetwork?: RailNetwork;
  isLoading: boolean = true;
  isLoadingFormSubmission: boolean = false;

  petitionTypes: string[] = [
    'INFORMACIÓN',
    'SUGERENCIA',
    'QUEJA',
  ]

  customerServiceForm: FormGroup = new FormGroup({
    petitionType: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    firstSurname: new FormControl('', [Validators.required]),
    secondSurname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(''),
    comment: new FormControl('', [Validators.required])
  })

  constructor(private railNetworkService: RailNetworkService, private route: ActivatedRoute, private customerServiceFormService: CustomerServiceFormService, private messageService: MessageService) { }

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

  onSubmit(formData: FormGroup) {
    const { petitionType, firstName, firstSurname, secondSurname, email, phoneNumber, comment } = formData.value;

    let customerServiceFormData: CustomerServiceFormData = {
      railNetworkName: this.railNetwork!.name,
      petitionType: petitionType,
      firstName: firstName,
      firstSurname: firstSurname,
      email: email,
      comment: comment
    }

    if (secondSurname.length > 0) {
      customerServiceFormData['secondSurname'] = secondSurname;
    }

    if (phoneNumber.length > 0) {
      customerServiceFormData['phoneNumber'] = phoneNumber;
    }

    this.isLoadingFormSubmission = true;

    this.customerServiceFormService.sendForm(customerServiceFormData).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Formulario enviado con exito. También, se le ha enviado una copia del formulario al email introducido.', life: 5000 });

      this.customerServiceForm.reset();
      this.isLoadingFormSubmission = false;
    });
  }
}
