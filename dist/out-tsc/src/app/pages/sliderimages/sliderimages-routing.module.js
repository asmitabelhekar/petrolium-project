import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SliderimagesPage } from './sliderimages.page';
const routes = [
    {
        path: '',
        component: SliderimagesPage
    }
];
let SliderimagesPageRoutingModule = class SliderimagesPageRoutingModule {
};
SliderimagesPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SliderimagesPageRoutingModule);
export { SliderimagesPageRoutingModule };
//# sourceMappingURL=sliderimages-routing.module.js.map