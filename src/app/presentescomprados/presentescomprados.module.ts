import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentescompradosPageRoutingModule } from './presentescomprados-routing.module';

import { PresentescompradosPage } from './presentescomprados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentescompradosPageRoutingModule
  ],
  declarations: [PresentescompradosPage]
})
export class PresentescompradosPageModule {}
