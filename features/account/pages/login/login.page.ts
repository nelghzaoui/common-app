import { AuthenticationService } from '@account/services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'account-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(
    private readonly builder: FormBuilder,
    private readonly loginService: AuthenticationService,
    private readonly navCtrl: NavController
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    this.loginService.login().then((response) => {
      if (response) {
        this.navCtrl.navigateForward(['../alert']);
      }
    });
  }
}
