import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatapersonalizadaPageRoutingModule } from './datapersonalizada-routing.module';

import { DatapersonalizadaPage } from './datapersonalizada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatapersonalizadaPageRoutingModule
  ],
  declarations: [DatapersonalizadaPage]
})
export class DatapersonalizadaPageModule {}
