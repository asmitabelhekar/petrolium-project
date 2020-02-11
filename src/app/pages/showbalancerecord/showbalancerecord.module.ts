import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowbalancerecordPageRoutingModule } from './showbalancerecord-routing.module';

import { ShowbalancerecordPage } from './showbalancerecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowbalancerecordPageRoutingModule
  ],
  declarations: [ShowbalancerecordPage]
})
export class ShowbalancerecordPageModule {}
