import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusinteressesPageRoutingModule } from './meusinteresses-routing.module';

import { MeusinteressesPage } from './meusinteresses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusinteressesPageRoutingModule
  ],
  declarations: [MeusinteressesPage]
})
export class MeusinteressesPageModule {}
