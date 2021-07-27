import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovocartaoPage } from './novocartao.page';

const routes: Routes = [
  {
    path: '',
    component: NovocartaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovocartaoPageRoutingModule {}
