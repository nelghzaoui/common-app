import { Injectable, isDevMode } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network/ngx';
import { SecureStorage } from '@ionic-native/secure-storage/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as MOCKS from '@core/mocks';

@Injectable()
export class NativeUtils {
  public static getMocks(): any[] {
    let plugins = null;

    if (isDevMode()) {
      plugins = [
        { provide: Device, useClass: MOCKS.DeviceMock },
        { provide: HTTP, useClass: MOCKS.HTTPMock },
        { provide: Network, useClass: MOCKS.NetworkMock },
        // { provide: SecureStorage, useClass: SecureStorage },
        { provide: SplashScreen, useClass: MOCKS.SplashScreenMock },
        { provide: StatusBar, useClass: MOCKS.StatusBarMock }
      ];
    } else {
      plugins = [Device, HTTP, Network, SecureStorage, SplashScreen, StatusBar];
    }

    return plugins;
  }
}
