import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PurchasehistoryPageRoutingModule } from './purchasehistory-routing.module';
import { PurchasehistoryPage } from './purchasehistory.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material';
let PurchasehistoryPageModule = class PurchasehistoryPageModule {
};
PurchasehistoryPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FlexLayoutModule,
            MatFormFieldModule,
            PurchasehistoryPageRoutingModule
        ],
        declarations: [PurchasehistoryPage]
    })
], PurchasehistoryPageModule);
export { PurchasehistoryPageModule };
//# sourceMappingURL=purchasehistory.module.js.map