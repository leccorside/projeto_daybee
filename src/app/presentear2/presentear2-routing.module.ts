import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Presentear2Page } from './presentear2.page';

const routes: Routes = [
  {
    path: '',
    component: Presentear2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Presentear2PageRoutingModule {}
