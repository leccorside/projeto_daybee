import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Presentear2PageRoutingModule } from './presentear2-routing.module';

import { Presentear2Page } from './presentear2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Presentear2PageRoutingModule
  ],
  declarations: [Presentear2Page]
})
export class Presentear2PageModule {}
