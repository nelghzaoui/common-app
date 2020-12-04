import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { ServerInput, ServerType } from 'src/generated/graphql';
import { ServerService } from '@server/services/server.service';

@Component({
  selector: 'server-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss']
})
export class FormPage implements OnInit {
  forms = {
    name: ['', Validators.required],
    url: ['', Validators.required],
    port: ['', Validators.required]
  };

  server: ServerType;

  constructor(
    private readonly navCtrl: NavController,
    private readonly serverService: ServerService,
    private readonly router: Router
  ) {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state) this.server = state.server;
  }

  ngOnInit(): void {
    if (this.server) {
      this.forms.name[0] = this.server.name;
      this.forms.url[0] = this.server.url;
      this.forms.port[0] = this.server.port.toString();
    }
  }

  async onSubmit(forms: ServerInput): Promise<void> {
    if (this.server) {
      //FIXME: expect ServerType params
      const server = await this.serverService.update(this.server.id, forms);
      console.log('update', server);
    } else {
      console.log('add', forms);
      //FIXME: port properties is string
      const server = await this.serverService.add(forms);
      console.log('add', server);
    }

    this.navCtrl.pop();
  }

  get title(): string {
    return `core.forms.title.server-${this.server ? 'update' : 'add'}`;
  }

  get labels(): string[] {
    return [`server-${this.server ? 'update' : 'add'}`, this.server ? 'update' : 'add'];
  }
}
