import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '@core/models/item.interface';
import { Server } from '@server/models/server.class';
import { ServerService } from '@server/services/server.service';

@Component({
  selector: 'server-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  server$: Observable<Server[]>;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private serverService: ServerService) {}

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
