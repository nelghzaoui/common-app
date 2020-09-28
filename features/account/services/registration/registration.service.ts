import { Injectable } from '@angular/core';
import {
  ActivateProfile,
  ActivateProfileResponse,
  InitProfile,
  REGISTRATION_API,
  UserForm,
  RegistrationServiceFacade,
  AccountRequest,
  AccountResponse
} from './registration.api';
import { UserDevice } from '@core/models/dto/user-device.interface';
import { ResponseApi } from '@core/models/api/response.interface';
import { HttpHelper } from '@core/helpers/http/http.helper';
import { Profile, ProfileHelper } from '@core/helpers/profile';
import { Account } from '@account/models/account.class';

@Injectable()
export class RegistrationService implements RegistrationServiceFacade {
  constructor(
    private httpHelper: HttpHelper // private profileHelper: ProfileHelper
  ) {}

  register(account: Account): Promise<AccountResponse> {
    const request: AccountRequest = {
      account: account
    };

    return this.httpHelper.post<AccountResponse>(REGISTRATION_API.REGISTER, request);

    // return new Promise((resolve, reject) => {
    //   this.httpHelper.post<AccountResponse>(REGISTRATION_API.REGISTER, request).subscribe(
    //     (response) => resolve(response),
    //     (error) => reject(error)
    //   );
    // });
  }

  // activateProfile(request: ActivateProfile): Promise<Profile> {
  //   return new Promise((resolve, reject) => {
  //     this.httpHelper.request<ActivateProfileResponse>(REGISTRATION_API.PROFILE_ACTIVATE, request).subscribe(
  //       (response) => {
  //         const profile = new Profile(request.deviceName, request.userId, response.name);
  //         this.profileHelper.create(profile);

  //         resolve(profile);
  //       },
  //       (error) => reject(error)
  //     );
  //   });
  // }

  // acceptTermsAndConditions(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     this.httpHelper.request<ResponseApi>(REGISTRATION_API.TERMS).subscribe(
  //       (response) => resolve(response.success),
  //       (error) => reject(error)
  //     );
  //   });
  // }

  // initValidation(request: UserDevice, inputs: UserForm): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     this.httpHelper.request<InitProfile>(REGISTRATION_API.PROFILE_INIT, request).subscribe(
  //       async (response) => {
  //         const isValidated = await this.validateProfile(response.seedOperation, request.deviceId, inputs);

  //         resolve(isValidated);
  //       },
  //       (error) => reject(error)
  //     );
  //   });
  // }

  // private validateProfile(seedOperation: string, deviceId: string, inputs: UserForm): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     // const hashPin: string = this.securityUtils.sha256(form.password);
  //     // const totp: string = this.securityUtils.generateTOTP(form.seedDevice, seedOperation, hashPin);
  //     const request = {
  //       deviceId: deviceId,
  //       // totp,
  //       userId: inputs.profile.id
  //     };
  //     this.httpHelper.request(REGISTRATION_API.PROFILE_VALIDATE, request, false).subscribe(
  //       () => {
  //         inputs.profile.seedDevice = inputs.seedDevice;
  //         this.profileHelper.sync();
  //         resolve(true);
  //       },
  //       (e) => reject(e)
  //     );
  //   });
  // }
}
