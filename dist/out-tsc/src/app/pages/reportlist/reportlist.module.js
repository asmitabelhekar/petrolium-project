import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReportlistPageRoutingModule } from './reportlist-routing.module';
import { ReportlistPage } from './reportlist.page';
import { FlexLayoutModule } from '@angular/flex-layout';
let ReportlistPageModule = class ReportlistPageModule {
};
ReportlistPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FlexLayoutModule,
            ReportlistPageRoutingModule
        ],
        declarations: [ReportlistPage]
    })
], ReportlistPageModule);
export { ReportlistPageModule };
//# sourceMappingURL=reportlist.module.js.map