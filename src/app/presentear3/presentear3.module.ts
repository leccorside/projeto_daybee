import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Presentear3PageRoutingModule } from './presentear3-routing.module';

import { Presentear3Page } from './presentear3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Presentear3PageRoutingModule
  ],
  declarations: [Presentear3Page]
})
export class Presentear3PageModule {}
