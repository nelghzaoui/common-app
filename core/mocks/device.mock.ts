import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Injectable()
export class DeviceMock extends Device {
  get cordova(): string {
    return '9';
  }

  get model(): string {
    return 'nel';
  }
  get platform(): string {
    return 'ios';
  }
  get uuid(): string {
    return 'fdb47c3a-dd89-452e-8491-d527bac533ad';
  }

  get version(): string {
    return '8.0.0';
  }

  get manufacturer(): string {
    return 'MacBook Pro';
  }

  get isVirtual(): boolean {
    return false;
  }

  get serial(): string {
    return '00000001';
  }
}
