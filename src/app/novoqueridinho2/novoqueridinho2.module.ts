import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Novoqueridinho2PageRoutingModule } from './novoqueridinho2-routing.module';

import { Novoqueridinho2Page } from './novoqueridinho2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Novoqueridinho2PageRoutingModule
  ],
  declarations: [Novoqueridinho2Page]
})
export class Novoqueridinho2PageModule {}
