import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebitamountPageRoutingModule } from './debitamount-routing.module';

import { DebitamountPage } from './debitamount.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocomplete, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    DebitamountPageRoutingModule
  ],
  declarations: [DebitamountPage]
})
export class DebitamountPageModule {}
