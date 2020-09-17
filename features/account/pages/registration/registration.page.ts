import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '@account/services/registration/registration.service';
import { Account } from '@account/models/account.class';

@Component({
  selector: 'account-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss']
})
export class RegistrationPage implements OnInit {
  form: FormGroup;

  constructor(private builder: FormBuilder, private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onRegister(): void {
    this.registrationService.register(this.form.value as Account).then(() => console.log('success'));
  }
}
