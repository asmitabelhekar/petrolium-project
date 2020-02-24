import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowbalancerecordPage } from './showbalancerecord.page';
const routes = [
    {
        path: '',
        component: ShowbalancerecordPage
    }
];
let ShowbalancerecordPageRoutingModule = class ShowbalancerecordPageRoutingModule {
};
ShowbalancerecordPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ShowbalancerecordPageRoutingModule);
export { ShowbalancerecordPageRoutingModule };
//# sourceMappingURL=showbalancerecord-routing.module.js.map