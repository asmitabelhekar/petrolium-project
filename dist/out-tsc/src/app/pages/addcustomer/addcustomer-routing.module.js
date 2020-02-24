import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddcustomerPage } from './addcustomer.page';
const routes = [
    {
        path: '',
        component: AddcustomerPage
    }
];
let AddcustomerPageRoutingModule = class AddcustomerPageRoutingModule {
};
AddcustomerPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AddcustomerPageRoutingModule);
export { AddcustomerPageRoutingModule };
//# sourceMappingURL=addcustomer-routing.module.js.map