import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { AddcustomerPageRoutingModule } from './addcustomer-routing.module';

import { AddcustomerPage } from './addcustomer.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcustomerPageRoutingModule
  ],
  declarations: [AddcustomerPage]
})
export class AddcustomerPageModule {}
