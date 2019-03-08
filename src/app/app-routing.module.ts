import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [{ path: '', pathMatch: 'full', component: StandingsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
