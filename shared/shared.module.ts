import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { COMPONENTS } from './components';

export const MODULES = [CommonModule, IonicModule, TranslateModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [MODULES, COMPONENTS]
})
export class SharedModule {}
