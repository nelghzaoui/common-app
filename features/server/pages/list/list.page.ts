import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Item } from '@core/models/item.interface';
import { Server } from '@server/models/server.class';

@Component({
  selector: 'server-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  items: Server[] = [];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const items: Server[] = [
      new Server('1', 'Angular'),
      new Server('2', 'Ionic'),
      new Server('3', 'React'),
      new Server('4', 'Vue')
    ];

    for (const item of items) {
      this.items.push(item);
    }
  }

  onAdd(): void {
    this.navCtrl.navigateForward('server/add');
    console.log('redirect to add-form page');
  }

  onRedirect(item: Item): void {
    console.log(item);
  }
}
