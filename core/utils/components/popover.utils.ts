import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';

@Injectable()
export class PopoverUtils {
  popover: HTMLIonPopoverElement;

  constructor(private readonly popoverCtrl: PopoverController) {}

  async present(component: ComponentRef, params?: any, event?: Event): Promise<void> {
    this.popover = await this.popoverCtrl.create({
      component: component,
      componentProps: params,
      event: event,
      showBackdrop: false,
      translucent: true,
      cssClass: 'popover'
    });

    return await this.popover.present();
  }

  close(): void {
    this.popoverCtrl.getTop().then((element: HTMLIonPopoverElement) => {
      if (element) this.popoverCtrl.dismiss();
    });
  }
}
