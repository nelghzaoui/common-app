import { Injectable } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Injectable()
export class SplashScreenMock extends SplashScreen {
  show(): void {}

  hide(): void {}
}
