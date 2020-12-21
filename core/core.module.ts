import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { environment } from '@environments/environment';
import { HELPERS } from './helpers';
import { TOOLS } from './tools';

export function HttpLoaderFactory(http: HttpClient): MultiTranslateHttpLoader {
  const prefix = './assets/languages';
  const suffix = '.json';

  return new MultiTranslateHttpLoader(http, [
    { prefix: `${prefix}/core/`, suffix: suffix },
    { prefix: `${prefix}/account/`, suffix: suffix },
    { prefix: `${prefix}/server/`, suffix: suffix },
    { prefix: `${prefix}/shared/`, suffix: suffix }
  ]);
}
@NgModule({
  imports: [CoreModule.MODULES],
  providers: [HELPERS, TOOLS]
})
export class CoreModule {
  private static MODULES = [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ];
}
