import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdatebalancePage } from './updatebalance.page';
const routes = [
    {
        path: '',
        component: UpdatebalancePage
    }
];
let UpdatebalancePageRoutingModule = class UpdatebalancePageRoutingModule {
};
UpdatebalancePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], UpdatebalancePageRoutingModule);
export { UpdatebalancePageRoutingModule };
//# sourceMappingURL=updatebalance-routing.module.js.map