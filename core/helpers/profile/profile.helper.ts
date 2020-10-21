import { Injectable } from '@angular/core';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';
import { Profile } from './profile.class';

@Injectable()
export class ProfileHelper {
  profiles: Profile[] = [];

  constructor(private readonly secureStorage: SecureStorage) {}

  create(profile: Profile, replace = true): void {
    if (this.exist(profile.id)) {
      if (!replace) {
        return;
      }
      this.remove(profile.id);
    }

    this.profiles.push(profile);

    this.sync();
  }

  remove(id: string): void {
    const index = this.profiles.findIndex((p: Profile) => p.id === id);
    if (index >= 0) {
      this.profiles.splice(index, 1);
      this.sync();
    }
  }

  load(): Promise<Profile[]> {
    return new Promise(async (resolve) => {
      const storage = await this.storage();

      const ids = await storage.keys();

      if (ids && ids.length > 0) {
        for (const id of ids) {
          const profileStr = await storage.get(id);
          console.log(profileStr);

          const profile = JSON.parse(profileStr) as Profile;
          console.log(profile);

          this.profiles.push(profile);
          this.sort();
        }

        resolve(this.profiles);
      } else {
        console.log('error');
      }
    });
  }

  sync(): void {
    this.save();
  }

  findById(id: string): Profile {
    return this.profiles.find((profile: Profile) => profile.id === id);
  }

  protected exist(id: string): boolean {
    return this.findById(id) !== undefined;
  }

  protected sort(): void {
    if (this.profiles) {
      this.profiles = this.profiles.sort((a: Profile, b: Profile) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return +1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }

        return 0;
      });
    }
  }

  get lastConnected(): string {
    if (this.profiles.length == 1) {
      return this.profiles[0].id;
    }
    let last: Date = null;
    let lastProfile: Profile = null;
    this.profiles.forEach((profile) => {
      if (!last) {
        last = profile.lastConnection;
        lastProfile = profile;
      } else {
        if (profile.lastConnection > last) {
          lastProfile = profile;
        }
      }
    });

    return lastProfile.id;
  }

  set lastConnected(id: string) {
    if (this.profiles.length == 1) {
      this.profiles[0].lastConnection = new Date();
      return;
    }

    this.profiles.forEach((p: Profile) => {
      if (p.id === id) {
        p.lastConnection = new Date();
      }
    });
  }

  private async save(): Promise<void> {
    this.sort();

    const profiles: string[] = [];
    let id: string;

    for (const profile of this.profiles) {
      id = profile.id;
      profiles.push(profile.toString());
    }

    const storage = await this.storage();
    storage.set(id, JSON.stringify(profiles)).then(() => console.log('added', profiles));
  }

  private async storage(): Promise<SecureStorageObject> {
    return await this.secureStorage.create('profiles');
  }
}
