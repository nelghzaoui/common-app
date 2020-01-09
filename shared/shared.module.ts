import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormComponent, ListComponent } from './components';

@NgModule({
  declarations: [SharedModule.COMPONENTS],
  imports: [CommonModule, IonicModule],
  exports: [CommonModule, IonicModule, SharedModule.COMPONENTS]
})
export class SharedModule {
  private static COMPONENTS = [FormComponent, ListComponent];
}
