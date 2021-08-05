import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacompraPage } from './confirmacompra.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacompraPageRoutingModule {}
