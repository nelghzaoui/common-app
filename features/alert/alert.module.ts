import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ListPage } from './list/list.page';

export const ROUTES: Routes = [
  {
    path: '',
    component: ListPage
  }
];
@NgModule({
  declarations: [ListPage],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class AlertModule {}
