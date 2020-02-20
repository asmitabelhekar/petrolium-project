import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatMenuModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatSelectModule, MatAutocompleteModule } from '@angular/material'
import {MatButtonModule} from '@angular/material/button';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { UpdatebalancePage } from './pages/updatebalance/updatebalance.page';
import { HttpClientModule } from '@angular/common/http';
// import { NegativenumberPipe } from '../../src/app/pipes/negativenumber.pipe'
import { NegativenumberPipe } from './pipes/negativenumber.pipe';
import { CustomPipe } from './custom.pipe';
@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
