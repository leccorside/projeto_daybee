import { ModalComponent } from './../components/modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deletarqueridinho1PageRoutingModule } from './deletarqueridinho1-routing.module';

import { Deletarqueridinho1Page } from './deletarqueridinho1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deletarqueridinho1PageRoutingModule
  ],
  declarations: [
    Deletarqueridinho1Page,
    ModalComponent
  ]
})
export class Deletarqueridinho1PageModule {}
