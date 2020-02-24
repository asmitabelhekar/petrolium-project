import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SliderimagesPageRoutingModule } from './sliderimages-routing.module';
import { SliderimagesPage } from './sliderimages.page';
let SliderimagesPageModule = class SliderimagesPageModule {
};
SliderimagesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SliderimagesPageRoutingModule
        ],
        declarations: [SliderimagesPage]
    })
], SliderimagesPageModule);
export { SliderimagesPageModule };
//# sourceMappingURL=sliderimages.module.js.map