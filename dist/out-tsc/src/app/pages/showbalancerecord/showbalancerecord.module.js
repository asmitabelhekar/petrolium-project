import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShowbalancerecordPageRoutingModule } from './showbalancerecord-routing.module';
import { ShowbalancerecordPage } from './showbalancerecord.page';
import { MatCardModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { NegativenumberPipe } from 'src/app/pipes/negativenumber.pipe';
let ShowbalancerecordPageModule = class ShowbalancerecordPageModule {
};
ShowbalancerecordPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MatCardModule,
            FlexLayoutModule,
            MatMenuModule,
            ShowbalancerecordPageRoutingModule
        ],
        exports: [NegativenumberPipe],
        providers: [SMS, CallNumber,],
        declarations: [ShowbalancerecordPage, NegativenumberPipe]
    })
], ShowbalancerecordPageModule);
export { ShowbalancerecordPageModule };
//# sourceMappingURL=showbalancerecord.module.js.map