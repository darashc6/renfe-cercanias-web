import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  accountLoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  isLoadingLoginSubmission: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: FormGroup) {
    const { email, password } = formData.value;

    if (email.length > 0 && password.length > 0) {
      this.isLoadingLoginSubmission = true;

      this.authService.signIn(email, password);

      this.isLoadingLoginSubmission = false;
    }
  }
}
