import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Item } from '@core/models/item.interface';
import { ServerService } from '@server/services/server.service';
import { ServerType } from 'src/generated/graphql';

@Component({
  selector: 'server-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  server$: Observable<ServerType[]>;

  constructor(
    private readonly navCtrl: NavController,
    private readonly route: ActivatedRoute,
    private readonly serverService: ServerService
  ) {}

  ngOnInit(): void {
    this.server$ = this.serverService.getAll();
  }

  onAdd(): void {
    this.navCtrl.navigateForward(['../add'], { relativeTo: this.route });
  }

  onRedirect(item: Item): void {
    console.log(item);
  }
}
