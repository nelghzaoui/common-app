import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Server } from '@server/models/server.class';
import { ServerService } from '@server/services/server.service';

@Component({
  selector: 'server-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss']
})
export class AddPage implements OnInit {
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private navCtrl: NavController,
    private serverService: ServerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      port: ['', Validators.required]
    });
  }

  onAdd(): void {
    this.serverService.add(this.form.value as Server).then(() => {
      this.navCtrl.navigateForward(['../list'], { relativeTo: this.route });
    });
  }
}
