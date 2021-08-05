import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanomensalPage } from './planomensal.page';

const routes: Routes = [
  {
    path: '',
    component: PlanomensalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanomensalPageRoutingModule {}
