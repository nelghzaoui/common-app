import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';

@Injectable()
export class ModalUtils {
  constructor(private modalCtrl: ModalController) {}

  public async present(component: ComponentRef): Promise<void> {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: component,
      cssClass: 'modal'
    });

    return await modal.present();
  }

  public dismiss(): void {
    this.modalCtrl.getTop().then((element: HTMLIonModalElement) => {
      if (element) this.modalCtrl.dismiss();
    });
  }
}
