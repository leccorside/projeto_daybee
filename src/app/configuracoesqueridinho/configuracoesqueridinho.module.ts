import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracoesqueridinhoPageRoutingModule } from './configuracoesqueridinho-routing.module';

import { ConfiguracoesqueridinhoPage } from './configuracoesqueridinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracoesqueridinhoPageRoutingModule
  ],
  declarations: [ConfiguracoesqueridinhoPage]
})
export class ConfiguracoesqueridinhoPageModule {}
