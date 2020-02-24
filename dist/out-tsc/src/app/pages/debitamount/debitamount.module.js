import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DebitamountPageRoutingModule } from './debitamount-routing.module';
import { DebitamountPage } from './debitamount.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule } from '@angular/material';
let DebitamountPageModule = class DebitamountPageModule {
};
DebitamountPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            FlexLayoutModule,
            ReactiveFormsModule,
            MatAutocompleteModule,
            MatInputModule,
            DebitamountPageRoutingModule
        ],
        declarations: [DebitamountPage]
    })
], DebitamountPageModule);
export { DebitamountPageModule };
//# sourceMappingURL=debitamount.module.js.map