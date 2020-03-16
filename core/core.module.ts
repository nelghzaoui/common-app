import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ActionSheetUtils,
  AlertUtils,
  LoadingUtils,
  ModalUtils,
  NativeUtils,
  PopoverUtils,
  SecurityUtils,
  ToastUtils
} from './utils';

const UTILS = [
  ActionSheetUtils,
  AlertUtils,
  LoadingUtils,
  ModalUtils,
  PopoverUtils,
  ToastUtils,
  NativeUtils.getNative(),
  SecurityUtils
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [UTILS]
})
export class CoreModule {}
