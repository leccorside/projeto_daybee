import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentescompradosPage } from './presentescomprados.page';

const routes: Routes = [
  {
    path: '',
    component: PresentescompradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentescompradosPageRoutingModule {}
