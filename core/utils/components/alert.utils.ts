import { Injectable, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertButton } from '@ionic/core';
import { MessageType } from '@core/models/api/message-type.class';

@Injectable()
export class AlertUtils {
  constructor(private alertCtrl: AlertController, private zone: NgZone) {}

  public async present(
    message: string,
    cancelButton: string,
    cancel: () => void,
    confirmButton: string,
    confirm: () => void,
    callback?: () => void
  ): Promise<void> {
    const buttons: AlertButton[] = [];

    if (cancelButton) {
      buttons.push({
        text: cancelButton,
        handler: () => {
          if (cancel != null) this.zone.run(async () => cancel());
        }
      });
    }

    if (confirmButton) {
      buttons.push({
        text: confirmButton,
        handler: () => {
          if (confirm != null) this.zone.run(async () => confirm());
        }
      });
    }

    this.show(message, buttons, callback);
  }

  public async presentError(errors: MessageType[], callback?: () => void): Promise<void> {
    let message: string;
    for (const error of errors) {
      message += error.description;
    }

    const button: AlertButton[] = [{ text: 'OK' }];

    this.show(message, button, callback);
  }

  public dismiss(): void {
    this.alertCtrl.dismiss();
  }

  private async show(message: string, buttons: AlertButton[], callback?: () => void): Promise<void> {
    const alert: HTMLIonAlertElement = await this.alertCtrl.create({
      message: message,
      buttons: buttons,
      cssClass: 'alert'
    });

    if (callback != null) {
      alert.onDidDismiss().then(() => setTimeout(() => callback(), 100));
    }

    await alert.present();
  }
}
