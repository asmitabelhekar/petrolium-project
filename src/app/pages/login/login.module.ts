import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,MatButtonModule,
    FlexLayoutModule



  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
