import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActionSheetButton } from '@ionic/core';

@Injectable()
export class ActionSheetUtils {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async present(headers: string, buttons: ActionSheetButton[]): Promise<void> {
    const actionSheet: HTMLIonActionSheetElement = await this.actionSheetCtrl.create({
      header: headers,
      buttons: buttons,
      cssClass: 'action-sheet'
    });

    buttons.push({
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => actionSheet.dismiss()
    });

    await actionSheet.present();
  }
}
