import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { COMPONENTS } from './components';
import { LAYOUT } from './layout';

export const MODULES = [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, TranslateModule];

@NgModule({
  declarations: [COMPONENTS, LAYOUT],
  imports: [MODULES],
  exports: [MODULES, COMPONENTS, LAYOUT]
})
export class SharedModule {}
