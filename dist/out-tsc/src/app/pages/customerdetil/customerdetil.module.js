import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomerdetilPageRoutingModule } from './customerdetil-routing.module';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { CustomerdetilPage } from './customerdetil.page';
import { FlexLayoutModule } from '@angular/flex-layout';
let CustomerdetilPageModule = class CustomerdetilPageModule {
};
CustomerdetilPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FlexLayoutModule,
            CustomerdetilPageRoutingModule
        ],
        providers: [SMS, CallNumber],
        declarations: [CustomerdetilPage]
    })
], CustomerdetilPageModule);
export { CustomerdetilPageModule };
//# sourceMappingURL=customerdetil.module.js.map