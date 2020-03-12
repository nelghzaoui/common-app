import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';

@Injectable()
export class PopoverUtils {
  constructor(private popoverCtrl: PopoverController) {}

  async present(component: ComponentRef, event: Event): Promise<void> {
    const popover: HTMLIonPopoverElement = await this.popoverCtrl.create({
      component: component,
      event: event,
      translucent: true,
      cssClass: 'popover'
    });

    return await popover.present();
  }

  dismiss(): void {
    this.popoverCtrl.getTop().then(element => {
      if (element) this.popoverCtrl.dismiss();
    });
  }
}
