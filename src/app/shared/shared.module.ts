import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, TranslateModule],
  exports: [MatButtonModule, TranslateModule],
  providers: []
})
export class SharedModule {}
