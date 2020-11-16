import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { COMPONENTS } from './components';

export const MODULES = [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, TranslateModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [MODULES, COMPONENTS]
})
export class SharedModule {}
