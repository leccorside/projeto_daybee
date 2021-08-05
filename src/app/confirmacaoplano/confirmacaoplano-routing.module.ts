import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacaoplanoPage } from './confirmacaoplano.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacaoplanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacaoplanoPageRoutingModule {}
