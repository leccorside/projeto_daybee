import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticasdaybeePage } from './politicasdaybee.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticasdaybeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticasdaybeePageRoutingModule {}
