import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoenderecoPage } from './novoendereco.page';

const routes: Routes = [
  {
    path: '',
    component: NovoenderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoenderecoPageRoutingModule {}
