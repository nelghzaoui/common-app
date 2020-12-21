import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

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
  providers: [
    HELPERS,
    TOOLS,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache({ addTypename: false }),
          link: httpLink.create({ uri: environment.server.url })
        };
      },
      deps: [HttpLink]
    }
  ]
})
export class CoreModule {
  private static MODULES = [
    CommonModule,
    HttpClientModule,
    HttpLinkModule,
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
