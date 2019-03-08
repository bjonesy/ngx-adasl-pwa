import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatTableModule, TranslateModule],
  exports: [MatButtonModule, MatTableModule, TranslateModule],
  providers: []
})
export class SharedModule {}
