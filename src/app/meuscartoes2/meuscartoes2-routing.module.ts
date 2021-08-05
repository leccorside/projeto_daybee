import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Meuscartoes2Page } from './meuscartoes2.page';

const routes: Routes = [
  {
    path: '',
    component: Meuscartoes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meuscartoes2PageRoutingModule {}
