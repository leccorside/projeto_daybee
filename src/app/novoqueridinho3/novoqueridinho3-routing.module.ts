import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Novoqueridinho3Page } from './novoqueridinho3.page';

const routes: Routes = [
  {
    path: '',
    component: Novoqueridinho3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Novoqueridinho3PageRoutingModule {}
