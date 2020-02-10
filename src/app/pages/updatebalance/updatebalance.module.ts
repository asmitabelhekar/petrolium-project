import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { UpdatebalancePageRoutingModule } from './updatebalance-routing.module';

import { UpdatebalancePage } from './updatebalance.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatebalancePageRoutingModule
  ],
  declarations: [UpdatebalancePage]
})
export class UpdatebalancePageModule {}
