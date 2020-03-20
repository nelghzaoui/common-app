import { HTTP } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network';
import { HTTPMock, NetworkMock } from '@core/mocks';
import { Injectable, isDevMode } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { DeviceMock } from '@core/mocks/device.mock';

@Injectable()
export class NativeUtils {
  constructor() {}

  static getNative(): any[] {
    let plugins = null;

    if (isDevMode()) {
      plugins = [
        { provide: Device, useClass: DeviceMock },
        { provide: HTTP, useClass: HTTPMock },
        { provide: Network, useClass: NetworkMock }
      ];
    } else {
      plugins = [Device, HTTP, Network];
    }

    return plugins;
  }
}
