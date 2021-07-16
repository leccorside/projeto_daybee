import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjusantecedenciaPage } from './ajusantecedencia.page';

const routes: Routes = [
  {
    path: '',
    component: AjusantecedenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjusantecedenciaPageRoutingModule {}
