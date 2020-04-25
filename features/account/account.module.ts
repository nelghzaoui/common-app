import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { RegistrationPage } from '@account/pages';

export const ROUTES: Routes = [
  {
    path: '',
    component: RegistrationPage
  }
];

@NgModule({
  declarations: [RegistrationPage],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class AccountModule {}
