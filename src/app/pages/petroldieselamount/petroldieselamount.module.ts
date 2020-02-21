import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetroldieselamountPageRoutingModule } from './petroldieselamount-routing.module';

import { PetroldieselamountPage } from './petroldieselamount.page';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    PetroldieselamountPageRoutingModule
  ],
  declarations: [PetroldieselamountPage]
})
export class PetroldieselamountPageModule {}
