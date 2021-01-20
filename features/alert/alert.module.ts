import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ListPage } from './pages';
import { AlertService } from './services/alert/alert.service';

export const ROUTES: Routes = [
  {
    path: '',
    component: ListPage
  }
];
@NgModule({
  declarations: [ListPage],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
  providers: [AlertService]
})
export class AlertModule {}
