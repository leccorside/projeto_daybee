import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Meuscartoes2PageRoutingModule } from './meuscartoes2-routing.module';

import { Meuscartoes2Page } from './meuscartoes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Meuscartoes2PageRoutingModule
  ],
  declarations: [Meuscartoes2Page]
})
export class Meuscartoes2PageModule {}
