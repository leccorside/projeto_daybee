import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovointeressePage } from './novointeresse.page';

const routes: Routes = [
  {
    path: '',
    component: NovointeressePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovointeressePageRoutingModule {}
