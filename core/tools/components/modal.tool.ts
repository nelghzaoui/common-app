import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';

@Injectable()
export class ModalTool {
  constructor(private modalCtrl: ModalController) {}

  async present(component: ComponentRef): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: component,
      cssClass: 'modal'
    });

    return await modal.present();
  }

  dismiss(): void {
    this.modalCtrl.getTop().then((element: HTMLIonModalElement) => {
      if (element) this.modalCtrl.dismiss();
    });
  }
}
