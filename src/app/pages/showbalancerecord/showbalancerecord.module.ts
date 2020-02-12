import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowbalancerecordPageRoutingModule } from './showbalancerecord-routing.module';

import { ShowbalancerecordPage } from './showbalancerecord.page';
import { MatCardMdImage, MatCardModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    FlexLayoutModule,
    MatMenuModule,
    ShowbalancerecordPageRoutingModule
  ],
  providers:[SMS,CallNumber],
  declarations: [ShowbalancerecordPage]
})
export class ShowbalancerecordPageModule {}
