import { Profile } from '@core/plugins/profile/profile.class';

export const INFO_API = {
  LEGAL: 'document/getLegalNoticeDocument',
  PROFILE_DELETE: 'profile/deleteProfile',
  PROFILE_UPDATE: 'profile/updateProfile'
};

export interface GetLegalResponse {
  legalNoticeDocument: string;
}

export interface ProfileRequest {
  deviceName: string;
  profileName: string;
}

export interface InfoServiceFacade {
  getLegalNoticeDocument(): Promise<string>;
  deleteProfile(profile: Profile): Promise<boolean>;
  updateProfile(profile: Profile): Promise<boolean>;
}
