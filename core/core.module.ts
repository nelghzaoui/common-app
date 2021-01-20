import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HELPERS } from './helpers';
import { TOOLS } from './tools';
import { environment } from '@environments/environment';
import { LanguageCode } from './models/environments/language.interface';

export function HttpLoaderFactory(http: HttpClient): MultiTranslateHttpLoader {
  const prefix = './assets/languages';
  const suffix = '.json';

  return new MultiTranslateHttpLoader(http, [
    { prefix: `${prefix}/core/`, suffix: suffix },
    { prefix: `${prefix}/account/`, suffix: suffix },
    { prefix: `${prefix}/alert/`, suffix: suffix },
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: LanguageCode.EN,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ];
}
