import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoconfirmadoPage } from './pedidoconfirmado.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoconfirmadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoconfirmadoPageRoutingModule {}
