import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cadastro4PageRoutingModule } from './cadastro4-routing.module';

import { Cadastro4Page } from './cadastro4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cadastro4PageRoutingModule
  ],
  declarations: [Cadastro4Page]
})
export class Cadastro4PageModule {}
