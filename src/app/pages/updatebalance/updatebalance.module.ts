import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { UpdatebalancePageRoutingModule } from './updatebalance-routing.module';

import { UpdatebalancePage } from './updatebalance.page';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatAutocomplete, MatAutocompleteModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatButtonModule,
    UpdatebalancePageRoutingModule
  ],
  declarations: [UpdatebalancePage]
})
export class UpdatebalancePageModule {}
