import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportlistPage } from './reportlist.page';
const routes = [
    {
        path: '',
        component: ReportlistPage
    }
];
let ReportlistPageRoutingModule = class ReportlistPageRoutingModule {
};
ReportlistPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ReportlistPageRoutingModule);
export { ReportlistPageRoutingModule };
//# sourceMappingURL=reportlist-routing.module.js.map