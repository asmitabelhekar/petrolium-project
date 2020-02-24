import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TankerPage } from './tanker.page';
const routes = [
    {
        path: '',
        component: TankerPage
    }
];
let TankerPageRoutingModule = class TankerPageRoutingModule {
};
TankerPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TankerPageRoutingModule);
export { TankerPageRoutingModule };
//# sourceMappingURL=tanker-routing.module.js.map