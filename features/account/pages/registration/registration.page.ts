import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RegistrationService } from '@account/services/registration/registration.service';
import { Account } from '@account/models/account.class';

@Component({
  selector: 'account-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss']
})
export class RegistrationPage implements OnInit {
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private navCtrl: NavController,
    private registrationService: RegistrationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onRegister(): void {
    // this.registrationService.register(this.form.value as Account).then(() => {
    //   this.navCtrl.navigateForward(['./auth'], { relativeTo: this.route });
    // });
  }
}
