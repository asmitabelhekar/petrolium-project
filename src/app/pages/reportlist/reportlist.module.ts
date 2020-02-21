import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportlistPageRoutingModule } from './reportlist-routing.module';

import { ReportlistPage } from './reportlist.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    ReportlistPageRoutingModule
  ],
  declarations: [ReportlistPage]
})
export class ReportlistPageModule {}
