import { Profile } from '@core/plugins/profile/profile.class';
import { Subscription } from '../models/subscription.class';
import { UserDevice } from '@core/models/dto/user-device.interface';

export const AUTHENTICATION_API = {
  INIT_LOGIN: 'login/initlogin',
  LOGIN: 'login/login',
  LOGOUT: 'login/logout'
};

export interface ActivateLogin {
  userId: string;
  cellPhone: string;
  deviceName: string;
  deviceId: string;
  platform: string;
  osVersion: string;
  appVersion: string;
}

export interface ActivateLoginResponse {
  profileName: string;
}

export interface InitConnection {
  seedOperation: string;
}

export interface UserForm {
  profile: Profile;
  password: string;
  seedDevice?: string;
}

export interface ConnectionResponse {
  subscription: Subscription;
}

export interface AuthenticationServiceFacade {
  initConnection(request: UserDevice, form: UserForm): Promise<boolean>;
}
