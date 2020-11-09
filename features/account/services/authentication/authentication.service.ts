// import { Injectable } from '@angular/core';
// import {
//   AuthenticationServiceFacade,
//   UserForm,
//   InitConnection,
//   AUTHENTICATION_API,
//   ConnectionResponse
// } from './authentication.api';
// import { HttpPlugin } from '@core/plugins/http/http.plugin';
// import { UserDevice } from '@core/models/dto/user-device.interface';
// import { EncryptionTool } from '@core/tools/security/encryption.tool';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService implements AuthenticationServiceFacade {
//   constructor(private encryptionTool: EncryptionTool, private httpPlugin: HttpPlugin) {}

//   initLogin(request: UserDevice, inputs: LoginForm): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//       this.httpPlugin.request<InitConnection>(AUTHENTICATION_API.INIT_LOGIN, request, true).subscribe(
//         async r => {
//           const response = await this.login(request, r.seedOperation);

//           resolve(response);
//         },
//         e => reject(e)
//       );
//     });
//   }

//   private login(params: UserDevice, seedOperation: string): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//       const hashPin: string = this.encryptionTool.encrypt(form.password);
//       const totp: string = SecurityUtils.generateTOTP(form.profile.seedDevice, seedOperation);
//       const request = {
//         appVersion: params.appVersion,
//         deviceId: params.deviceId,
//         // totp,
//         userId: params.userId
//       };

//       this.httpPlugin.request<ConnectionResponse>(AUTHENTICATION_API.LOGIN, request).subscribe(
//         response => resolve(response.subscription.activated),
//         error => reject(error)
//       );
//     });
//   }
// }
