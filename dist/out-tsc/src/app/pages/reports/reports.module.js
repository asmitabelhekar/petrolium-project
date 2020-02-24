import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReportsPageRoutingModule } from './reports-routing.module';
import { ReportsPage } from './reports.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            FlexLayoutModule,
            MatFormFieldModule,
            MatInputModule,
            IonicModule,
            ReportsPageRoutingModule
        ],
        declarations: [ReportsPage]
    })
], ReportsPageModule);
export { ReportsPageModule };
//# sourceMappingURL=reports.module.js.map