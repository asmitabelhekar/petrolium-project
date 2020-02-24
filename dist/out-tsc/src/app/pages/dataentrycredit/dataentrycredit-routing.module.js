import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataentrycreditPage } from './dataentrycredit.page';
const routes = [
    {
        path: '',
        component: DataentrycreditPage
    }
];
let DataentrycreditPageRoutingModule = class DataentrycreditPageRoutingModule {
};
DataentrycreditPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DataentrycreditPageRoutingModule);
export { DataentrycreditPageRoutingModule };
//# sourceMappingURL=dataentrycredit-routing.module.js.map