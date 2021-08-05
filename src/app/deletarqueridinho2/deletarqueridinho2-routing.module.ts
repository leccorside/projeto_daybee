import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deletarqueridinho2Page } from './deletarqueridinho2.page';

const routes: Routes = [
  {
    path: '',
    component: Deletarqueridinho2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deletarqueridinho2PageRoutingModule {}
