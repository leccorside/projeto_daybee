import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContacriadaPage } from './contacriada.page';

const routes: Routes = [
  {
    path: '',
    component: ContacriadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContacriadaPageRoutingModule {}
