import { Language } from './language.interface';

export class BaseEnvironment {
  constructor(
    protected dateFormat?: string,
    protected errorCode?: string,
    protected languages?: Language[],
    protected version?: string
  ) {
    this.dateFormat = 'YYYY-MM-DD HH:mm:ssZ';
    this.errorCode = '';
    this.languages = [
      { code: 'EN', label: 'English' },
      { code: 'FR', label: 'Français' }
    ];
    this.version = '0.0.1';
  }
}
