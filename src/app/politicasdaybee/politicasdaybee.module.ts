import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticasdaybeePageRoutingModule } from './politicasdaybee-routing.module';

import { PoliticasdaybeePage } from './politicasdaybee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticasdaybeePageRoutingModule
  ],
  declarations: [PoliticasdaybeePage]
})
export class PoliticasdaybeePageModule {}
