import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import * as PAGES from './pages';
import { SharedModule } from '@shared/shared.module';

const ROUTES: Routes = [
  { path: '', component: PAGES.ListPage },
  { path: 'add', component: PAGES.AddPage }
];
@NgModule({
  declarations: [PAGES.AddPage, PAGES.ListPage],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule]
})
export class ServerModule {}
