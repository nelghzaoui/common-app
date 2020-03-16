import { Injectable } from '@angular/core';
import { HttpPlugin } from '@core/plugins/http/http.plugin';
import { GetLegalResponse, INFO_API, InfoServiceFacade, ProfileRequest } from './info.api';
import { Profile, ProfilePlugin } from '@core/plugins/profile';

@Injectable()
export class InfoService implements InfoServiceFacade {
  constructor(private httpPlugin: HttpPlugin, private profilePlugin: ProfilePlugin) {}

  // Document
  getLegalNoticeDocument(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.httpPlugin.request<GetLegalResponse>(INFO_API.LEGAL).subscribe(
        response => resolve(response.legalNoticeDocument),
        error => reject(error)
      );
    });
  }

  // Profile
  deleteProfile(profile: Profile): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const request: ProfileRequest = {
        deviceName: profile.device,
        profileName: profile.name
      };

      this.httpPlugin.request(INFO_API.PROFILE_DELETE, request).subscribe(
        () => {
          this.profilePlugin.remove(profile.id);
          resolve(true);
        },
        error => reject(error)
      );
    });
  }

  updateProfile(profile: Profile): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const request: ProfileRequest = {
        deviceName: profile.device,
        profileName: profile.name
      };

      this.httpPlugin.request(INFO_API.PROFILE_UPDATE, request).subscribe(
        () => {
          const currentProfile = this.profilePlugin.findById(profile.id);
          currentProfile.device = profile.device;
          currentProfile.name = profile.name;
          this.profilePlugin.sync();

          resolve(true);
        },
        error => reject(error)
      );
    });
  }
}
