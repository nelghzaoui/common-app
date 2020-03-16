import { HTTP } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network';
import { HTTPMock, NetworkMock } from '@core/mocks';
import { Platform } from '@ionic/angular';

export class NativeUtils {
  // private static platform: Platform;

  constructor(public platform: Platform) {
    console.log(this.platform.platforms());
  }

  static getNative(): any[] {
    let plugins: any[];

    // if (this.platform.is('mobile')) {
    //   plugins = [HTTP, Network];
    // } else {
    //   plugins = [
    //     { provide: HTTP, useClass: HTTPMock },
    //     { provide: Network, useClass: NetworkMock }
    //   ];
    // }

    return plugins;
  }
}
