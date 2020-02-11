import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowbalancerecordPageRoutingModule } from './showbalancerecord-routing.module';

import { ShowbalancerecordPage } from './showbalancerecord.page';
import { MatCardMdImage, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    FlexLayoutModule,
    ShowbalancerecordPageRoutingModule
  ],
  declarations: [ShowbalancerecordPage]
})
export class ShowbalancerecordPageModule {}
