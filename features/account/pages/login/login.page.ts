import { AuthenticationType } from '@account/models/authentication-type.enum';
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
  AuthenticationType = AuthenticationType;
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

  onLogin(type: AuthenticationType): void {
    this.loginService.login(type).then((response) => {
      if (response) {
        this.navCtrl.navigateForward(['alert']);
      }
    });
  }

  get title(): string {
    return `core.forms.title.server-add`;
  }
}
