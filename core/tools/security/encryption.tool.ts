import CryptoJS from 'crypto-js';
import { Device } from '@ionic-native/device/ngx';
import { Injectable, Inject, forwardRef } from '@angular/core';

@Injectable()
export class EncryptionTool {
  private static PASSPHRASE: string;

  constructor(@Inject(forwardRef(() => Device)) private readonly device: Device) {
    EncryptionTool.PASSPHRASE = this.device.uuid;
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
