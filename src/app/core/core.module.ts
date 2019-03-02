import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { from, Observable } from 'rxjs';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/shared/shared.module';

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../../i18n/${lang}`));
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    })
  ],
  providers: []
})
export class CoreModule {}
