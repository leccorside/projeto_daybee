import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaoplanoPageRoutingModule } from './confirmacaoplano-routing.module';

import { ConfirmacaoplanoPage } from './confirmacaoplano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoplanoPageRoutingModule
  ],
  declarations: [ConfirmacaoplanoPage]
})
export class ConfirmacaoplanoPageModule {}
