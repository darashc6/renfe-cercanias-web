import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  editProfileForm: FormGroup = new FormGroup({
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

  stations: string[] = [
    'Bilbao',
    'Cádiz',
    'Málaga',
    'Santander',
    'San Sebastián',
    'Zaragoza',
  ]
  selectedStation: string = 'Málaga'

  constructor() { }

  ngOnInit(): void {
  }

  selectDefaultStation(stationSelected: string) {
    this.selectedStation = stationSelected;
  }
}
