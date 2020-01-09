import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPage, ListPage } from './pages';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: ListPage },
  { path: 'add', component: AddPage }
];
@NgModule({
  declarations: [AddPage, ListPage],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ServerModule {}
