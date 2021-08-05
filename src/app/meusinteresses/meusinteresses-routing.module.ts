import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusinteressesPage } from './meusinteresses.page';

const routes: Routes = [
  {
    path: '',
    component: MeusinteressesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusinteressesPageRoutingModule {}
