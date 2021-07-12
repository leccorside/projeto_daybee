import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesqueridinhosPageRoutingModule } from './detalhesqueridinhos-routing.module';

import { DetalhesqueridinhosPage } from './detalhesqueridinhos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesqueridinhosPageRoutingModule
  ],
  declarations: [DetalhesqueridinhosPage]
})
export class DetalhesqueridinhosPageModule {}
