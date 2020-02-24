import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerdetilPage } from './customerdetil.page';
const routes = [
    {
        path: '',
        component: CustomerdetilPage
    }
];
let CustomerdetilPageRoutingModule = class CustomerdetilPageRoutingModule {
};
CustomerdetilPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CustomerdetilPageRoutingModule);
export { CustomerdetilPageRoutingModule };
//# sourceMappingURL=customerdetil-routing.module.js.map