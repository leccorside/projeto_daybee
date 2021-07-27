import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuscartoesPageRoutingModule } from './meuscartoes-routing.module';

import { MeuscartoesPage } from './meuscartoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuscartoesPageRoutingModule
  ],
  declarations: [MeuscartoesPage]
})
export class MeuscartoesPageModule {}
