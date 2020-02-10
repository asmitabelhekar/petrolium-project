import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { AddcustomerPageRoutingModule } from './addcustomer-routing.module';

import { AddcustomerPage } from './addcustomer.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,MatFormFieldModule,MatButtonModule,MatIconModule,MatInputModule,FlexLayoutModule,
    AddcustomerPageRoutingModule
  ],
  declarations: [AddcustomerPage]
})
export class AddcustomerPageModule {}
