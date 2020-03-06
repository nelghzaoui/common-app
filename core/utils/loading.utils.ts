import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoadingUtils {
  constructor(public loadingCtrl: LoadingController) {}

  async present(message = ''): Promise<void> {
    const loading: HTMLIonLoadingElement = await this.loadingCtrl.create({
      message: message,
      showBackdrop: true
    });

    await loading.present();
  }

  dismiss(): void {
    this.loadingCtrl.dismiss();
  }
}
