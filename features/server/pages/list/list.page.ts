import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { Item } from '@core/models/item.interface';
import { Server } from '@server/models/server.class';
import { ServerService } from '@server/services/server.service';

@Component({
  selector: 'server-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  data: Observable<any>;
  server$: Observable<Server[]>;

  constructor(
    private apollo: Apollo,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private serverService: ServerService
  ) {}

  ngOnInit(): void {
    this.server$ = this.serverService.getAll();
    // TODO: Implement GraphQL HTTP CALL
    // this.data = this.apollo
    //   .watchQuery({
    //     query: gql`
    //       {
    //         getServers {
    //           id
    //           name
    //           url
    //           port
    //         }
    //       }
    //     `
    //   })
    //   .valueChanges.pipe(map(({ data }: any) => data.getServers));
  }

  onAdd(): void {
    this.navCtrl.navigateForward(['../add'], { relativeTo: this.route });
  }

  onRedirect(item: Item): void {
    console.log(item);
  }
}
