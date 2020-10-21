import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastUtils {
  constructor(private readonly toastCtrl: ToastController) {}

  async present(message: string): Promise<void> {
    const toast: HTMLIonToastElement = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      cssClass: 'toast'
    });

    toast.present();
  }
}
