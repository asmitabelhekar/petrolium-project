import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UpdatebalancePageRoutingModule } from './updatebalance-routing.module';
import { UpdatebalancePage } from './updatebalance.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
let UpdatebalancePageModule = class UpdatebalancePageModule {
};
UpdatebalancePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            FlexLayoutModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatAutocompleteModule,
            MatButtonModule,
            UpdatebalancePageRoutingModule
        ],
        declarations: [UpdatebalancePage]
    })
], UpdatebalancePageModule);
export { UpdatebalancePageModule };
//# sourceMappingURL=updatebalance.module.js.map