import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanomensalPageRoutingModule } from './planomensal-routing.module';

import { PlanomensalPage } from './planomensal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanomensalPageRoutingModule
  ],
  declarations: [PlanomensalPage]
})
export class PlanomensalPageModule {}
