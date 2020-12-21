import CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

@Injectable()
export class EncryptionTool {
  private static PASSPHRASE: string;

  constructor() {
    Device.getInfo().then((device) => {
      EncryptionTool.PASSPHRASE = device.uuid;
    });
  }

  decrypt(value: string): string {
    if (value || value.length !== 0) {
      let decryptedValue = CryptoJS.AES.decrypt(value, EncryptionTool.PASSPHRASE).toString(CryptoJS.enc.Utf8);

      if (decryptedValue !== null) {
        decryptedValue = decryptedValue;
      } else {
        decryptedValue = '';
      }

      return decryptedValue.toString();
    }
  }

  encrypt(value: string): string {
    if (value || value.length !== 0) {
      return CryptoJS.AES.encrypt(value, EncryptionTool.PASSPHRASE).toString();
    }
  }
}
