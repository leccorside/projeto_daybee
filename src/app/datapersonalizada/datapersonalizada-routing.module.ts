import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatapersonalizadaPage } from './datapersonalizada.page';

const routes: Routes = [
  {
    path: '',
    component: DatapersonalizadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatapersonalizadaPageRoutingModule {}
