import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoenderecoPageRoutingModule } from './novoendereco-routing.module';

import { NovoenderecoPage } from './novoendereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoenderecoPageRoutingModule
  ],
  declarations: [NovoenderecoPage]
})
export class NovoenderecoPageModule {}
