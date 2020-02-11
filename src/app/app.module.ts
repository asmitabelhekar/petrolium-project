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
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule } from '@angular/material'
import {MatButtonModule} from '@angular/material/button';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

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
    MatFormFieldModule,MatButtonModule,MatCardModule,
    BrowserAnimationsModule,MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
     provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
