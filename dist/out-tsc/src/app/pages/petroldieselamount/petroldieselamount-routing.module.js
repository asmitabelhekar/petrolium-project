import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PetroldieselamountPage } from './petroldieselamount.page';
const routes = [
    {
        path: '',
        component: PetroldieselamountPage
    }
];
let PetroldieselamountPageRoutingModule = class PetroldieselamountPageRoutingModule {
};
PetroldieselamountPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PetroldieselamountPageRoutingModule);
export { PetroldieselamountPageRoutingModule };
//# sourceMappingURL=petroldieselamount-routing.module.js.map