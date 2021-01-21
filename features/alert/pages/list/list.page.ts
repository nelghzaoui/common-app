import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PopoverTool } from '@core/tools/components/popover.tool';
import { ListActionPopover } from '@shared/components/list-action/list-action.popover';
import { Item, ListAction } from '@shared/models';
import { AlertService } from '@alert/services/alert.service';

@Component({
  selector: 'alert-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  alerts$: Observable<any[]>;

  constructor(
    private readonly alertService: AlertService,
    private readonly navCtrl: NavController,
    private readonly popoverTool: PopoverTool,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.alerts$ = this.alertService.alerts$;
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
        this.navCtrl.navigateForward(['./add'], { relativeTo: this.route });
        break;
      case ListAction.READ:
        this.navCtrl.navigateForward(['alert/detail'], { state: item });
        break;
      case ListAction.UPDATE:
        this.navCtrl.navigateForward(['./edit'], { state: { alert: item }, relativeTo: this.route });
        break;
      case ListAction.DELETE:
        break;
      default:
        break;
    }
  }
}
