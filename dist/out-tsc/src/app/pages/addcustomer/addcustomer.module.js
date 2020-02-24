import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AddcustomerPageRoutingModule } from './addcustomer-routing.module';
import { AddcustomerPage } from './addcustomer.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
let AddcustomerPageModule = class AddcustomerPageModule {
};
AddcustomerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MatFormFieldModule,
            MatButtonModule, MatIconModule,
            MatInputModule,
            FlexLayoutModule,
            MatCardModule,
            AddcustomerPageRoutingModule
        ],
        declarations: [AddcustomerPage]
    })
], AddcustomerPageModule);
export { AddcustomerPageModule };
//# sourceMappingURL=addcustomer.module.js.map