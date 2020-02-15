import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule } from '@angular/flex-layout'
import { IonicModule } from '@ionic/angular';

import { DataentrycreditPageRoutingModule } from './dataentrycredit-routing.module';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatAutocomplete, MatAutocompleteModule } from '@angular/material';

import { DataentrycreditPage } from './dataentrycredit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatButtonModule,
    DataentrycreditPageRoutingModule
  ],
  declarations: [DataentrycreditPage]
})
export class DataentrycreditPageModule {}
