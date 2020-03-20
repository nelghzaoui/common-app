import CryptoJS from 'crypto-js';
import { Injectable, Inject, forwardRef } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { Profile } from '@core/plugins/profile/profile.class';

Injectable();
export class SecurityUtils {
  private static readonly PASSPHRASE_PAGEID = 'pageId';

  constructor(@Inject(forwardRef(() => Device)) private device: Device) {}

  decryptPageId(pageId: string): string {
    return this.decrypt(pageId, SecurityUtils.PASSPHRASE_PAGEID);
  }

  encryptPageId(pageId: string): string {
    return this.encrypt(pageId, SecurityUtils.PASSPHRASE_PAGEID);
  }

  decryptProfile(profile: Profile): Profile {
    return new Profile(this.decrypt(profile.device), this.decrypt(profile.id), this.decrypt(profile.name));
  }

  encryptProfile(profile: Profile): Profile {
    return new Profile(this.encrypt(profile.device), this.encrypt(profile.id), this.encrypt(profile.name));
  }

  decryptProfiles(profiles: Profile[]): Profile[] {
    const decProfiles: Profile[] = [];

    if (profiles && profiles.length > 0) {
      for (let i = 0; i < profiles.length; ++i) {
        decProfiles.push(this.decryptProfile(profiles[i]));
      }
    }

    return decProfiles;
  }

  encryptProfiles(profiles: Profile[]): Profile[] {
    const encProfiles: Profile[] = [];

    if (profiles && profiles.length > 0) {
      for (let i = 0; i < profiles.length; ++i) {
        encProfiles.push(this.encryptProfile(profiles[i]));
      }
    }

    return encProfiles;
  }

  decrypt(value: string, passphrase?: string): string {
    if (!value || value.length === 0) {
      return '';
    }

    if (!passphrase || passphrase.length === 0) {
      passphrase = this.device.uuid;
    }
    let decryptedValue = CryptoJS.AES.decrypt(value, passphrase);
    if (decryptedValue !== null && decryptedValue.words !== null && decryptedValue.words.length > 0) {
      decryptedValue = decryptedValue.toString(CryptoJS.enc.Utf8);
    } else {
      decryptedValue = '';
    }
    return decryptedValue;
  }

  encrypt(value: string, passphrase?: string): string {
    if (!value || value.length === 0) {
      return '';
    }

    if (!passphrase || passphrase.length === 0) {
      passphrase = this.device.uuid;
    }

    return CryptoJS.AES.encrypt(value, passphrase).toString();
  }
}
