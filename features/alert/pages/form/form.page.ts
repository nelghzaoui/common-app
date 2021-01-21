import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from '@alert/services/alert.service';
import { Alert } from '@alert/models/alert.class';
import { AlertType } from '@alert/models/type.enum';
import { AlertPriority } from '@alert/models/priority.enum';

@Component({
  selector: 'server-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss']
})
export class FormPage implements OnInit {
  AlertPriority = AlertPriority;
  alert: Alert;
  form: FormGroup;
  priorities = [AlertPriority.LOW, AlertPriority.MIDDLE, AlertPriority.HIGH, AlertPriority.URGENT];
  types = [AlertType.HOUSEBREAKING, AlertType.FIRE, AlertType.ASSAULT];

  constructor(
    private readonly alertService: AlertService,
    private readonly builder: FormBuilder,
    private readonly navCtrl: NavController,
    private readonly router: Router
  ) {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state) this.alert = state.alert;
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      type: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  async onSubmit(forms): Promise<void> {
    console.log(forms);

    if (this.alert) {
      const server = await this.alertService.update('this.server.id', forms);
      console.log('update', server);
    } else {
      const server = await this.alertService.create(forms);
    }

    this.navCtrl.pop();
  }

  get buttonLabel(): string {
    return this.alert ? 'alert.buttons.update' : 'alert.buttons.add';
  }
}
