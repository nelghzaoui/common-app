import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { HomePage, LoginPage, RegistrationPage } from './pages';
import { RegistrationService } from './services/registration/registration.service';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'register',
    component: RegistrationPage
  },
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  declarations: [LoginPage, RegistrationPage, HomePage],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
  providers: [RegistrationService]
})
export class AccountModule {}
