import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoconfirmadoPageRoutingModule } from './pedidoconfirmado-routing.module';

import { PedidoconfirmadoPage } from './pedidoconfirmado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoconfirmadoPageRoutingModule
  ],
  declarations: [PedidoconfirmadoPage]
})
export class PedidoconfirmadoPageModule {}
