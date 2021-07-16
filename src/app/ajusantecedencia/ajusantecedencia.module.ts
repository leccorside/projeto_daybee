import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjusantecedenciaPageRoutingModule } from './ajusantecedencia-routing.module';

import { AjusantecedenciaPage } from './ajusantecedencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjusantecedenciaPageRoutingModule
  ],
  declarations: [AjusantecedenciaPage]
})
export class AjusantecedenciaPageModule {}
