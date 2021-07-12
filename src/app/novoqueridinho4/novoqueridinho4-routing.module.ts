import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Novoqueridinho4Page } from './novoqueridinho4.page';

const routes: Routes = [
  {
    path: '',
    component: Novoqueridinho4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Novoqueridinho4PageRoutingModule {}
