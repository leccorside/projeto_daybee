import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacompraPageRoutingModule } from './confirmacompra-routing.module';

import { ConfirmacompraPage } from './confirmacompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacompraPageRoutingModule
  ],
  declarations: [ConfirmacompraPage]
})
export class ConfirmacompraPageModule {}
