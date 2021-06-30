import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContacriadaPageRoutingModule } from './contacriada-routing.module';

import { ContacriadaPage } from './contacriada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContacriadaPageRoutingModule
  ],
  declarations: [ContacriadaPage]
})
export class ContacriadaPageModule {}
