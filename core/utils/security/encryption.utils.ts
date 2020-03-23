import * as CryptoJS from 'crypto-js';
import { Device } from '@ionic-native/device/ngx';
import { Injectable, Inject, forwardRef } from '@angular/core';

Injectable();
export class EncryptionUtils {
  private static PASSPHRASE: string;

  constructor(@Inject(forwardRef(() => Device)) private device: Device) {
    EncryptionUtils.PASSPHRASE = this.device.uuid;
  }

  decrypt(value: string): string {
    if (value || value.length !== 0) {
      let decryptedValue = CryptoJS.AES.decrypt(value, EncryptionUtils.PASSPHRASE);

      if (decryptedValue !== null) {
        decryptedValue = decryptedValue.toString(CryptoJS.enc.Utf8);
      } else {
        decryptedValue = '';
      }

      return decryptedValue.toString();
    }
  }

  encrypt(value: string): string {
    if (value || value.length !== 0) {
      return CryptoJS.AES.encrypt(value, EncryptionUtils.PASSPHRASE).toString();
    }
  }
}
