import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracoesqueridinhoPage } from './configuracoesqueridinho.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesqueridinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracoesqueridinhoPageRoutingModule {}
