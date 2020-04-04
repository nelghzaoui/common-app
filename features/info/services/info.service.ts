import { Injectable } from '@angular/core';
import { HttpHelper } from '@core/helpers/http/http.helper';
import { Profile, ProfileHelper } from '@core/helpers/profile';
import { GetLegalResponse, INFO_API, InfoServiceFacade, ProfileRequest } from './info.api';

@Injectable()
export class InfoService implements InfoServiceFacade {
  constructor(private httpHelper: HttpHelper, private profileHelper: ProfileHelper) {}

  // Document
  getLegalNoticeDocument(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.httpHelper.request<GetLegalResponse>(INFO_API.LEGAL).subscribe(
        (response) => resolve(response.legalNoticeDocument),
        (error) => reject(error)
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

      this.httpHelper.request(INFO_API.PROFILE_DELETE, request).subscribe(
        () => {
          this.profileHelper.remove(profile.id);
          resolve(true);
        },
        (error) => reject(error)
      );
    });
  }

  updateProfile(profile: Profile): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const request: ProfileRequest = {
        deviceName: profile.device,
        profileName: profile.name
      };

      this.httpHelper.request(INFO_API.PROFILE_UPDATE, request).subscribe(
        () => {
          const currentProfile = this.profileHelper.findById(profile.id);
          currentProfile.device = profile.device;
          currentProfile.name = profile.name;
          this.profileHelper.sync();

          resolve(true);
        },
        (error) => reject(error)
      );
    });
  }
}
