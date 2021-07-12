import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesqueridinhosPage } from './detalhesqueridinhos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesqueridinhosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesqueridinhosPageRoutingModule {}
