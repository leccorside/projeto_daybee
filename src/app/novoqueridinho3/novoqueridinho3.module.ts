import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Novoqueridinho3PageRoutingModule } from './novoqueridinho3-routing.module';

import { Novoqueridinho3Page } from './novoqueridinho3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Novoqueridinho3PageRoutingModule
  ],
  declarations: [Novoqueridinho3Page]
})
export class Novoqueridinho3PageModule {}
