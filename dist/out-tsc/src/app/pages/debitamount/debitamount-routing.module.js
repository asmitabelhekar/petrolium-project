import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DebitamountPage } from './debitamount.page';
const routes = [
    {
        path: '',
        component: DebitamountPage
    }
];
let DebitamountPageRoutingModule = class DebitamountPageRoutingModule {
};
DebitamountPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DebitamountPageRoutingModule);
export { DebitamountPageRoutingModule };
//# sourceMappingURL=debitamount-routing.module.js.map