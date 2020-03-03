import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserslistPageRoutingModule } from './userslist-routing.module';

import { UserslistPage } from './userslist.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    IonicModule,
    UserslistPageRoutingModule
  ],
  declarations: [UserslistPage]
})
export class UserslistPageModule {}
