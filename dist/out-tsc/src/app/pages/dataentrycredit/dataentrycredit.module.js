import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { DataentrycreditPageRoutingModule } from './dataentrycredit-routing.module';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { DataentrycreditPage } from './dataentrycredit.page';
let DataentrycreditPageModule = class DataentrycreditPageModule {
};
DataentrycreditPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FlexLayoutModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatAutocompleteModule,
            MatButtonModule,
            DataentrycreditPageRoutingModule
        ],
        declarations: [DataentrycreditPage]
    })
], DataentrycreditPageModule);
export { DataentrycreditPageModule };
//# sourceMappingURL=dataentrycredit.module.js.map