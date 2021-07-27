import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovocartaoPageRoutingModule } from './novocartao-routing.module';

import { NovocartaoPage } from './novocartao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovocartaoPageRoutingModule
  ],
  declarations: [NovocartaoPage]
})
export class NovocartaoPageModule {}
