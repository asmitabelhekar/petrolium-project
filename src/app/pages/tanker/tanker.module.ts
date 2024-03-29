import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankerPageRoutingModule } from './tanker-routing.module';

import { TankerPage } from './tanker.page';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    TankerPageRoutingModule
  ],
  declarations: [TankerPage]
})
export class TankerPageModule {}
