import { FirebaseConfig } from './firebase.interface';
import { Language } from './language.interface';
export class BaseEnvironment {
  constructor(
    public dateFormat?: string,
    public errorCode?: string,
    public languages?: Language[],
    public version?: string,
    public firebase?: FirebaseConfig
  ) {
    this.dateFormat = 'YYYY-MM-DD HH:mm:ssZ';
    this.errorCode = '';
    this.languages = [
      { code: 'EN', label: 'English' },
      { code: 'FR', label: 'Français' }
    ];
    this.version = '0.0.1';
    this.firebase = {
      apiKey: 'AIzaSyB3EqAA9lzRZ-oc52BXElPsaDqvklofdKY',
      authDomain: 'smalert-712db.firebaseapp.com',
      projectId: 'smalert-712db',
      storageBucket: 'smalert-712db.appspot.com',
      messagingSenderId: '381462413918',
      appId: '1:381462413918:web:5e30fe5e3141d4bb1e6acf',
      measurementId: 'G-S6MW0KNXHM'
    };
  }
}
