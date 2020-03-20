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
  NativeUtils.getNative(),
  ActionSheetUtils,
  AlertUtils,
  LoadingUtils,
  ModalUtils,
  PopoverUtils,
  ToastUtils,
  SecurityUtils
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [UTILS]
})
export class CoreModule {}
