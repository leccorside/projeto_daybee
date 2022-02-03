import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedefinirsenhaPage } from './redefinirsenha.page';

const routes: Routes = [
  {
    path: '',
    component: RedefinirsenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedefinirsenhaPageRoutingModule {}
