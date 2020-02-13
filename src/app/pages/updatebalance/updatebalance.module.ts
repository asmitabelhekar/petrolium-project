import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { UpdatebalancePageRoutingModule } from './updatebalance-routing.module';

import { UpdatebalancePage } from './updatebalance.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    UpdatebalancePageRoutingModule
  ],
  declarations: [UpdatebalancePage]
})
export class UpdatebalancePageModule {}
