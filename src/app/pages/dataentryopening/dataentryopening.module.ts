import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataentryopeningPageRoutingModule } from './dataentryopening-routing.module';

import { DataentryopeningPage } from './dataentryopening.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DataentryopeningPageRoutingModule
  ],
  declarations: [DataentryopeningPage]
})
export class DataentryopeningPageModule {}
