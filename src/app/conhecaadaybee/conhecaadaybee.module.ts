import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConhecaadaybeePageRoutingModule } from './conhecaadaybee-routing.module';

import { ConhecaadaybeePage } from './conhecaadaybee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConhecaadaybeePageRoutingModule
  ],
  declarations: [ConhecaadaybeePage]
})
export class ConhecaadaybeePageModule {}
