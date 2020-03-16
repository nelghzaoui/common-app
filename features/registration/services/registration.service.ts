import { Injectable } from '@angular/core';
import {
  ActivateProfile,
  ActivateProfileResponse,
  InitProfile,
  REGISTRATION_API,
  UserForm,
  RegistrationServiceFacade
} from './registration.api';
import { UserDevice } from '@core/models/dto/user-device.interface';
import { ResponseApi } from '@core/models/api/response.interface';
import { HttpPlugin } from '@core/plugins/http/http.plugin';
import { Profile, ProfilePlugin } from '@core/plugins/profile';

@Injectable()
export class RegistrationService implements RegistrationServiceFacade {
  constructor(private httpPlugin: HttpPlugin, private profilePlugin: ProfilePlugin) {}

  activateProfile(request: ActivateProfile): Promise<Profile> {
    return new Promise((resolve, reject) => {
      this.httpPlugin.request<ActivateProfileResponse>(REGISTRATION_API.PROFILE_ACTIVATE, request).subscribe(
        response => {
          const profile = new Profile(request.deviceName, request.userId, response.name);
          this.profilePlugin.create(profile);

          resolve(profile);
        },
        error => reject(error)
      );
    });
  }

  acceptTermsAndConditions(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpPlugin.request<ResponseApi>(REGISTRATION_API.TERMS).subscribe(
        response => resolve(response.success),
        error => reject(error)
      );
    });
  }

  initValidation(request: UserDevice, inputs: UserForm): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpPlugin.request<InitProfile>(REGISTRATION_API.PROFILE_INIT, request).subscribe(
        async response => {
          const isValidated = await this.validateProfile(response.seedOperation, request.deviceId, inputs);

          resolve(isValidated);
        },
        error => reject(error)
      );
    });
  }

  private validateProfile(seedOperation: string, deviceId: string, inputs: UserForm): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // const hashPin: string = this.securityUtils.sha256(form.password);
      // const totp: string = this.securityUtils.generateTOTP(form.seedDevice, seedOperation, hashPin);
      const request = {
        deviceId: deviceId,
        // totp,
        userId: inputs.profile.id
      };
      this.httpPlugin.request(REGISTRATION_API.PROFILE_VALIDATE, request, false).subscribe(
        () => {
          inputs.profile.seedDevice = inputs.seedDevice;
          this.profilePlugin.sync();
          resolve(true);
        },
        e => reject(e)
      );
    });
  }
}
