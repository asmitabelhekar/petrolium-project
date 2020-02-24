import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PurchasehistoryPage } from './purchasehistory.page';
const routes = [
    {
        path: '',
        component: PurchasehistoryPage
    }
];
let PurchasehistoryPageRoutingModule = class PurchasehistoryPageRoutingModule {
};
PurchasehistoryPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PurchasehistoryPageRoutingModule);
export { PurchasehistoryPageRoutingModule };
//# sourceMappingURL=purchasehistory-routing.module.js.map