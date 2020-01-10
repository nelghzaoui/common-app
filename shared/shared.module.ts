import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import * as COMPONENTS from './components';

@NgModule({
  declarations: [COMPONENTS.FormComponent, COMPONENTS.ListComponent],
  imports: [CommonModule, IonicModule],
  exports: [CommonModule, IonicModule, COMPONENTS.FormComponent, COMPONENTS.ListComponent]
})
export class SharedModule {}
