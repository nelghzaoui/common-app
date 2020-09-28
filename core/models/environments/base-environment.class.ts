import { Language } from './language.interface';

export class BaseEnvironment {
  constructor(
    public dateFormat?: string,
    public errorCode?: string,
    public languages?: Language[],
    public version?: string
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
