import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedefinirsenhaPageRoutingModule } from './redefinirsenha-routing.module';

import { RedefinirsenhaPage } from './redefinirsenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedefinirsenhaPageRoutingModule
  ],
  declarations: [RedefinirsenhaPage]
})
export class RedefinirsenhaPageModule {}
