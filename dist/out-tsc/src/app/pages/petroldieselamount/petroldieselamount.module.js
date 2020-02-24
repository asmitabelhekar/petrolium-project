import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PetroldieselamountPageRoutingModule } from './petroldieselamount-routing.module';
import { PetroldieselamountPage } from './petroldieselamount.page';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
let PetroldieselamountPageModule = class PetroldieselamountPageModule {
};
PetroldieselamountPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MatFormFieldModule,
            MatInputModule,
            FlexLayoutModule,
            PetroldieselamountPageRoutingModule
        ],
        declarations: [PetroldieselamountPage]
    })
], PetroldieselamountPageModule);
export { PetroldieselamountPageModule };
//# sourceMappingURL=petroldieselamount.module.js.map