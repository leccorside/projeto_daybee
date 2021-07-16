import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovointeressePageRoutingModule } from './novointeresse-routing.module';

import { NovointeressePage } from './novointeresse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovointeressePageRoutingModule
  ],
  declarations: [NovointeressePage]
})
export class NovointeressePageModule {}
