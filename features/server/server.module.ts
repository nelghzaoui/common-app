import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import * as PAGES from './pages';
import { ServerService } from './services/server.service';

const ROUTES: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: PAGES.ListPage },
  { path: 'add', component: PAGES.FormPage },
  { path: 'edit', component: PAGES.FormPage }
];
@NgModule({
  declarations: [PAGES.FormPage, PAGES.ListPage],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  providers: [ServerService]
})
export class ServerModule {}
