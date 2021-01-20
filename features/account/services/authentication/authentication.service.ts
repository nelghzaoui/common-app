import { AuthenticationType } from '@account/models/authentication-type.enum';
import { Injectable } from '@angular/core';
import { AuthenticationServiceFacade } from './authentication.api';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements AuthenticationServiceFacade {
  constructor() {}

  login(type: AuthenticationType): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.switchLogin(type);
      resolve(true);
    });
  }

  private switchLogin(type: AuthenticationType) {
    switch (type) {
      case AuthenticationType.EMAIL:
        console.log('EMAIL');
        break;
      case AuthenticationType.FACEBOOK:
        console.log('FACEBOOK');
        break;
      case AuthenticationType.GOOGLE:
        console.log('GOOGLE');
        break;
      case AuthenticationType.APPLE:
        console.log('APPLE');
        break;
      default:
        console.log('unhandled login type');
        break;
    }
  }
}
