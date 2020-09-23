import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { LoginPage, RegistrationPage } from '@account/pages';
import { RegistrationService } from './services/registration/registration.service';

export const ROUTES: Routes = [
  {
    path: '',
    component: RegistrationPage
  },
  {
    path: 'auth',
    component: LoginPage
  }
];

@NgModule({
  declarations: [LoginPage, RegistrationPage],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
  providers: [RegistrationService]
})
export class AccountModule {}
