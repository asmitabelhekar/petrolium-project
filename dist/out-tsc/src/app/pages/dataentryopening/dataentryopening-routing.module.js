import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataentryopeningPage } from './dataentryopening.page';
const routes = [
    {
        path: '',
        component: DataentryopeningPage
    }
];
let DataentryopeningPageRoutingModule = class DataentryopeningPageRoutingModule {
};
DataentryopeningPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DataentryopeningPageRoutingModule);
export { DataentryopeningPageRoutingModule };
//# sourceMappingURL=dataentryopening-routing.module.js.map