import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActionSheetButton } from '@ionic/core';

@Injectable()
export class ActionSheetTool {
  constructor(private readonly actionSheetCtrl: ActionSheetController) {}

  async present(headers: string, buttons: ActionSheetButton[]): Promise<void> {
    const actionSheet = await this.actionSheetCtrl.create({
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
