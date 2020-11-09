import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PopoverTool } from '@core/tools/components/popover.tool';
import { ServerService } from '@server/services/server.service';
import { ListActionPopover } from '@shared/components/list-action/list-action.popover';
import { Item, ListAction } from '@shared/models';
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
    private readonly popoverTool: PopoverTool,
    private readonly route: ActivatedRoute,
    private readonly serverService: ServerService
  ) {}

  ngOnInit(): void {
    this.server$ = this.serverService.getAll();
  }

  onAdd(): void {
    this.redirect(ListAction.CREATE);
  }

  async onAction(item: Item): Promise<void> {
    await this.popoverTool.present(ListActionPopover, { item: item });
    const action = await this.popoverTool.popover.onDidDismiss();
    this.redirect(action.data, item);
  }

  onRedirect(item: Item): void {
    this.redirect(ListAction.READ, item);
  }

  private async redirect(action: ListAction, item?: Item): Promise<void> {
    switch (action) {
      case ListAction.CREATE:
        this.navCtrl.navigateForward(['../add'], { relativeTo: this.route });
        break;
      case ListAction.READ:
        this.navCtrl.navigateForward(['../../../account'], { state: item });
        break;
      case ListAction.UPDATE:
        this.navCtrl.navigateForward(['../add'], { relativeTo: this.route });
        break;
      case ListAction.DELETE:
        const server = await this.serverService.delete(item.id);
        console.log(server, 'has been remove');
        break;
      default:
        break;
    }
  }
}
