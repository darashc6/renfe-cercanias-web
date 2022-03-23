import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-service-form-page',
  templateUrl: './customer-service-form-page.component.html',
  styleUrls: ['./customer-service-form-page.component.scss']
})
export class CustomerServiceFormPageComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
