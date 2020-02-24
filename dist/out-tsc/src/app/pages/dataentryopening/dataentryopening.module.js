import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataentryopeningPageRoutingModule } from './dataentryopening-routing.module';
import { DataentryopeningPage } from './dataentryopening.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
let DataentryopeningPageModule = class DataentryopeningPageModule {
};
DataentryopeningPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FlexLayoutModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            DataentryopeningPageRoutingModule
        ],
        declarations: [DataentryopeningPage]
    })
], DataentryopeningPageModule);
export { DataentryopeningPageModule };
//# sourceMappingURL=dataentryopening.module.js.map