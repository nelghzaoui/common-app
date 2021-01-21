import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import * as PAGES from './pages';
import { AlertService } from './services/alert.service';

export const ROUTES: Routes = [
  { path: '', component: PAGES.ListPage },
  { path: 'detail', component: PAGES.DetailPage },
  { path: 'add', component: PAGES.FormPage },
  { path: 'edit', component: PAGES.FormPage }
];

@NgModule({
  declarations: [PAGES.DetailPage, PAGES.FormPage, PAGES.ListPage],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
  providers: [AlertService]
})
export class AlertModule {}
