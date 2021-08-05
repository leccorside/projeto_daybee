import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConhecaadaybeePage } from './conhecaadaybee.page';

const routes: Routes = [
  {
    path: '',
    component: ConhecaadaybeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConhecaadaybeePageRoutingModule {}
