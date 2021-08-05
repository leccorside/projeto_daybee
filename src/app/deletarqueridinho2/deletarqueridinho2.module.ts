import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deletarqueridinho2PageRoutingModule } from './deletarqueridinho2-routing.module';

import { Deletarqueridinho2Page } from './deletarqueridinho2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deletarqueridinho2PageRoutingModule
  ],
  declarations: [Deletarqueridinho2Page]
})
export class Deletarqueridinho2PageModule {}
