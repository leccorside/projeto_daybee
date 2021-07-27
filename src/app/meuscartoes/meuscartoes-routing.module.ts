import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuscartoesPage } from './meuscartoes.page';

const routes: Routes = [
  {
    path: '',
    component: MeuscartoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuscartoesPageRoutingModule {}
