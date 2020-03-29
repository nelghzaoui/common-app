import { Profile } from '@core/helpers/profile/profile.class';
import { UserDevice } from '@core/models/dto/user-device.interface';

export const REGISTRATION_API = {
  PROFILE_ACTIVATE: 'register/activateProfile',
  PROFILE_INIT: 'register/initValidateProfile',
  PROFILE_VALIDATE: 'register/validateProfile',
  TERMS: 'register/acceptTermsAndConditions',
};

export interface ActivateProfile {
  userId: string;
  cellPhone: string;
  deviceName: string;
  deviceId: string;
  platform: string;
  osVersion: string;
  appVersion: string;
}

export interface ActivateProfileResponse {
  name: string;
}

export interface InitProfile {
  seedOperation: string;
}

export interface UserForm {
  profile: Profile;
  password: string;
  seedDevice?: string;
}

export interface RegistrationServiceFacade {
  activateProfile(request: ActivateProfile): Promise<ActivateProfileResponse>;
  acceptTermsAndConditions(): Promise<boolean>;
  initValidation(request: UserDevice, inputs: UserForm): Promise<boolean>;
}
