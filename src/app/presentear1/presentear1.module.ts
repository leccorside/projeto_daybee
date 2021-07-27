import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Presentear1PageRoutingModule } from './presentear1-routing.module';

import { Presentear1Page } from './presentear1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Presentear1PageRoutingModule
  ],
  declarations: [Presentear1Page]
})
export class Presentear1PageModule {}
