import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticasprivacidadePageRoutingModule } from './politicasprivacidade-routing.module';

import { PoliticasprivacidadePage } from './politicasprivacidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticasprivacidadePageRoutingModule
  ],
  declarations: [PoliticasprivacidadePage]
})
export class PoliticasprivacidadePageModule {}
