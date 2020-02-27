import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankersellsubmitPageRoutingModule } from './tankersellsubmit-routing.module';

import { TankersellsubmitPage } from './tankersellsubmit.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    IonicModule,
    TankersellsubmitPageRoutingModule
  ],
  declarations: [TankersellsubmitPage]
})
export class TankersellsubmitPageModule {}
