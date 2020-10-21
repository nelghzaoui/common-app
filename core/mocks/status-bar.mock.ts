import { Injectable } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Injectable()
export class StatusBarMock extends StatusBar {
  // get isVisible(): boolean {
  //   return true;
  // }

  overlaysWebView(): void {}

  styleDefault(): void {}

  styleLightContent(): void {}

  styleBlackTranslucent(): void {}

  styleBlackOpaque(): void {}

  backgroundColorByName(colorName: string): void {}

  backgroundColorByHexString(hexString: string): void {}

  hide(): void {}

  show(): void {}
}
