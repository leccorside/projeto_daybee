import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deletarqueridinho1Page } from './deletarqueridinho1.page';

const routes: Routes = [
  {
    path: '',
    component: Deletarqueridinho1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deletarqueridinho1PageRoutingModule {}
