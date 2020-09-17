import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoadingUtils {
  constructor(public loadingCtrl: LoadingController) {}

  public async present(message = ''): Promise<void> {
    const loading: HTMLIonLoadingElement = await this.loadingCtrl.create({
      message: message,
      showBackdrop: true
    });

    await loading.present();
  }

  public dismiss(): void {
    this.loadingCtrl.dismiss();
  }
}
