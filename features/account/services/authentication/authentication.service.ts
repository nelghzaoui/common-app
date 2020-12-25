import { Injectable } from '@angular/core';
import { AuthenticationServiceFacade } from './authentication.api';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements AuthenticationServiceFacade {
  constructor() {}

  login(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  // TODO: Switch case for login type
}
