import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Presentear3Page } from './presentear3.page';

const routes: Routes = [
  {
    path: '',
    component: Presentear3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Presentear3PageRoutingModule {}
