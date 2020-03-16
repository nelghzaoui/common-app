import { Injectable } from '@angular/core';

import {
  AUTHENTICATION_API,
  AuthenticationServiceFacade,
  ConnectionResponse,
  InitConnection,
  UserForm
} from './authentication.api';
import { HttpPlugin } from '@core/plugins/http/http.plugin';
import { UserDevice } from '@core/models/dto/user-device.interface';

@Injectable()
export class AuthenticationService implements AuthenticationServiceFacade {
  constructor(private httpPlugin: HttpPlugin) {}

  initConnection(request: UserDevice, form: UserForm): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpPlugin.request<InitConnection>(AUTHENTICATION_API.INIT_LOGIN, request, true).subscribe(
        async r => {
          const response = await this.connection(request, r.seedOperation, form);

          resolve(response);
        },
        error => reject(error)
      );
    });
  }

  private connection(device: UserDevice, seedOperation: string, inputs: UserForm): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // const hashPin: string = SecurityUtils.sha256(form.password);
      // const totp: string = SecurityUtils.generateTOTP(form.profile.seedDevice, seedOperation, hashPin);
      const request = {
        appVersion: device.appVersion,
        deviceId: device.deviceId,
        // totp,
        userId: inputs.profile.id
      };

      this.httpPlugin.request<ConnectionResponse>(AUTHENTICATION_API.LOGIN, request).subscribe(
        response => resolve(response.subscription.activated),
        error => reject(error)
      );
    });
  }
}
