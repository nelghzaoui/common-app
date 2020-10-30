import { Profile } from '@core/helpers/profile/profile.class';

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
