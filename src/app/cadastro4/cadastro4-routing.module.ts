import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cadastro4Page } from './cadastro4.page';

const routes: Routes = [
  {
    path: '',
    component: Cadastro4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cadastro4PageRoutingModule {}
