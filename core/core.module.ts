import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NativeUtils } from './utils/native.utils';
import * as UTILS from './utils';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [NativeUtils.getNative(), UTILS.AlertUtils, UTILS.LoadingUtils, UTILS.ModalUtils]
})
export class CoreModule {}
