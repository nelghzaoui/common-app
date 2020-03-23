import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {
  ActionSheetUtils,
  AlertUtils,
  LoadingUtils,
  ModalUtils,
  PopoverUtils,
  ToastUtils,
  NativeUtils,
  EncryptionUtils
} from './utils';

export function HttpLoaderFactory(http: HttpClient): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/languages/core/', suffix: 'json' },
    { prefix: './assets/languages/account/', suffix: 'json' },
    { prefix: './assets/languages/shared/', suffix: 'json' }
  ]);
}

export const UTILS = [
  ActionSheetUtils,
  AlertUtils,
  LoadingUtils,
  ModalUtils,
  PopoverUtils,
  ToastUtils,
  NativeUtils.getNative(),
  EncryptionUtils
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [UTILS]
})
export class CoreModule {}
