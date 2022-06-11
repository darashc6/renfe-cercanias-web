import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-registration-page',
  templateUrl: './account-registration-page.component.html',
  styleUrls: ['./account-registration-page.component.scss']
})
export class AccountRegistrationPageComponent implements OnInit {
  accountRegistrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    firstSurname: new FormControl('', [Validators.required]),
    secondSurname: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    idNumber: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    addressName: new FormControl('', [Validators.required]),
    addressNumber: new FormControl('', [Validators.required]),
    addressExtras: new FormControl(''),
    province: new FormControl('', [Validators.required]),
    municipality: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    cardHolderName: new FormControl(''),
    cardNumber: new FormControl('')
  });
  maxBirthDate: Date = new Date();
  isLoadingRegistrationSubmission: boolean = false;

  constructor(private authService: AuthService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Registro');
  }

  onSubmit(formData: FormGroup) {
    this.isLoadingRegistrationSubmission = true;

    const { firstName, firstSurname, secondSurname, phoneNumber, nationality, idNumber, birthDate, email, password, addressName, addressNumber, addressExtras, province, municipality, postalCode } = formData.value;

    let userData: User = {
      firstName,
      firstSurname,
      phoneNumber,
      nationality,
      idNumber,
      birthDate: birthDate.toLocaleDateString('en-GB'),
      email,
      password,
      address: {
        addressName, addressNumber, province, municipality, postalCode
      },
      tickets: []
    }

    if (secondSurname.length > 0) {
      userData['secondSurname'] = secondSurname
    }

    if (addressExtras.length > 0) {
      userData['address']['addressExtras'] = addressExtras;
    }

    this.authService.signUp(userData);

    this.isLoadingRegistrationSubmission = false;
  }

}
