import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-registration-page',
  templateUrl: './account-registration-page.component.html',
  styleUrls: ['./account-registration-page.component.scss']
})
export class AccountRegistrationPageComponent implements OnInit {
  accountRegistrationForm: FormGroup = new FormGroup({
    firstNameControl: new FormControl('', [Validators.required]),
    firstSurnameControl: new FormControl('', [Validators.required]),
    secondSurnameControl: new FormControl(''),
    phoneNumberControl: new FormControl('', [Validators.required]),
    nationalityControl: new FormControl('', [Validators.required]),
    idNumberControl: new FormControl('', [Validators.required]),
    birthDateControl: new FormControl('', [Validators.required]),
    emailControl: new FormControl('', [Validators.required]),
    passwordControl: new FormControl('', [Validators.required]),
    addressNameControl: new FormControl('', [Validators.required]),
    addressNumberControl: new FormControl('', [Validators.required]),
    addressExtrasControl: new FormControl(''),
    provinceControl: new FormControl('', [Validators.required]),
    municipalityControl: new FormControl('', [Validators.required]),
    postalCodeControl: new FormControl('', [Validators.required]),
    cardHolderNameControl: new FormControl(''),
    cardNumberControl: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
