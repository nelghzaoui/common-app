import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { ServerInput } from 'src/generated/graphql';
import { ServerService } from '@server/services/server.service';

@Component({
  selector: 'server-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss']
})
export class FormPage implements OnInit {
  server: ServerInput;
  form: FormGroup;

  constructor(
    private readonly builder: FormBuilder,
    private readonly navCtrl: NavController,
    private readonly serverService: ServerService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state) this.server = state.server;
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      port: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.server) {
      const server = await this.serverService.update(this.form.value);
      console.log('update', server);
    } else {
      const server = await this.serverService.add(this.form.value);
      console.log('add', server);
    }

    this.navCtrl.navigateForward(['../list'], { relativeTo: this.route });
  }

  get title(): string {
    return `server.form.title.${this.server ? 'update' : 'add'}`;
  }

  get buttonLabel(): string {
    return `server.form.button.${this.server ? 'update' : 'add'}`;
  }
}
