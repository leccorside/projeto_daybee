import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Novoqueridinho4PageRoutingModule } from './novoqueridinho4-routing.module';

import { Novoqueridinho4Page } from './novoqueridinho4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Novoqueridinho4PageRoutingModule
  ],
  declarations: [Novoqueridinho4Page]
})
export class Novoqueridinho4PageModule {}
