import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Presentear1Page } from './presentear1.page';

const routes: Routes = [
  {
    path: '',
    component: Presentear1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Presentear1PageRoutingModule {}
