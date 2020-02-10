import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material'
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,MatIconModule,
    BrowserAnimationsModule,FlexLayoutModule,MatButtonModule,
    MatFormFieldModule,MatButtonModule,
    BrowserAnimationsModule,MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
     provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
