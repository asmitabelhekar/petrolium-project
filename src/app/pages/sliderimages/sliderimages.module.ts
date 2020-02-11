import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderimagesPageRoutingModule } from './sliderimages-routing.module';

import { SliderimagesPage } from './sliderimages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderimagesPageRoutingModule
  ],
  declarations: [SliderimagesPage]
})
export class SliderimagesPageModule {}
