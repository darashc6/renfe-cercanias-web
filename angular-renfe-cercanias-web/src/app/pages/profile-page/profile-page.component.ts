import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Fare } from 'src/app/models/Fare';
import { Ticket } from 'src/app/models/Ticket';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  editProfileForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.authService.userLoggedIn?.firstName, [Validators.required]),
    firstSurname: new FormControl(this.authService.userLoggedIn?.firstSurname, [Validators.required]),
    secondSurname: new FormControl(this.authService.userLoggedIn?.secondSurname || ''),
    phoneNumber: new FormControl(this.authService.userLoggedIn?.phoneNumber, [Validators.required]),
    nationality: new FormControl(this.authService.userLoggedIn?.nationality, [Validators.required]),
    idNumber: new FormControl(this.authService.userLoggedIn?.idNumber, [Validators.required]),
    birthDate: new FormControl(this.authService.userLoggedIn?.birthDate, [Validators.required]),
    addressName: new FormControl(this.authService.userLoggedIn?.address.addressName, [Validators.required]),
    addressNumber: new FormControl(this.authService.userLoggedIn?.address.addressNumber, [Validators.required]),
    addressExtras: new FormControl(this.authService.userLoggedIn?.address.addressExtras || ''),
    province: new FormControl(this.authService.userLoggedIn?.address.province, [Validators.required]),
    municipality: new FormControl(this.authService.userLoggedIn?.address.municipality, [Validators.required]),
    postalCode: new FormControl(this.authService.userLoggedIn?.address.postalCode, [Validators.required]),
  });
  userTickets: Ticket[] = [];

  maxBirthDate: Date = new Date();

  selectedFare?: Fare;

  selectedOption: string = 'edit-profile';

  constructor(private authService: AuthService, private titleService: Title) { }

  ngOnInit(): void {
    this.userTickets = this.authService.userLoggedIn!.tickets.sort((ticket) => -ticket.dateBought);
    this.titleService.setTitle('Perfil');
  }

  selectOption(optionSelected: string) {
    this.selectedOption = optionSelected;
  }

  saveUserChanges(formData: FormGroup) {
    const { firstName, firstSurname, secondSurname, phoneNumber, nationality, idNumber, birthDate, addressName, addressNumber, addressExtras, province, municipality, postalCode } = formData.value;

    let userData: User = {
      firstName,
      firstSurname,
      phoneNumber,
      nationality,
      idNumber,
      birthDate: birthDate.toLocaleString('en-GB'),
      email: this.authService.userLoggedIn!.email,
      password: this.authService.userLoggedIn!.password,
      address: {
        addressName, addressNumber, province, municipality, postalCode
      },
      tickets: this.authService.userLoggedIn!.tickets
    }

    if (secondSurname.length > 0) {
      userData['secondSurname'] = secondSurname
    }

    if (addressExtras.length > 0) {
      userData['address']['addressExtras'] = addressExtras;
    }

    this.authService.updateUser(userData);
  }

  signOut() {
    this.authService.signOut();
  }
}
