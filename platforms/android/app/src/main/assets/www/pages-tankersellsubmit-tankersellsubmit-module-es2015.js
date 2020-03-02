(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tankersellsubmit-tankersellsubmit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tankersellsubmit/tankersellsubmit.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tankersellsubmit/tankersellsubmit.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Tanker Sell\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n      <mat-form-field style=\"width:90%; margin-top:10px\">\n        <mat-label>Opening Balance</mat-label>\n        <input matInput type=\"number\" name=\"openingbalance\"  (input)=\"OnInput($event)\"  [(ngModel)]=\"tankerSellModel.openingbalance\"\n          #openingbalance=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n      <mat-form-field style=\"width:90%; margin-top:10px\">\n        <mat-label>Closing Balance</mat-label>\n        <input matInput type=\"number\" name=\"closingbalance\"  (input)=\"OnInput($event)\"  [(ngModel)]=\"tankerSellModel.closingbalance\"\n          #closingbalance=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n      <mat-form-field style=\"width:90%; margin-top:10px\">\n        <mat-label>Nosel Rate</mat-label>\n        <input matInput type=\"number\" name=\"noselrate\" [(ngModel)]=\"tankerSellModel.noselrate\"\n          #noselrate=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n      <mat-form-field style=\"width:90%; margin-top:10px\">\n        <mat-label>Testing</mat-label>\n        <input matInput type=\"number\" name=\"testing\" (input)=\"totalAmount($event)\" [(ngModel)]=\"tankerSellModel.testing\"\n          #testing=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n      <mat-form-field style=\"width:90%; margin-top:10px\">\n        <mat-label>Total Amount</mat-label>\n        <input matInput type=\"number\" name=\"totalamount\" [(ngModel)]=\"tankerSellModel.totalamount\"\n          #totalamount=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n      <mat-form-field style=\"width:90%; margin-top:10px\">\n        <mat-label>Rate</mat-label>\n        <input matInput type=\"number\" name=\"rate\" (input)=\"finalAmount($event)\" [(ngModel)]=\"tankerSellModel.rate\"\n          #rate=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n      <mat-form-field style=\"width:90%; margin-top:10px\">\n        <mat-label>Final Amount</mat-label>\n        <input matInput type=\"number\" name=\"finalamount\" [(ngModel)]=\"tankerSellModel.finalamount\"\n          #finalamount=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n      <mat-form-field style=\"width:90%; margin-top:10px\">\n        <mat-label>Credit</mat-label>\n        <input matInput type=\"number\" name=\"credit\" (input)=\"totalSellAmount($event)\" [(ngModel)]=\"tankerSellModel.credit\"\n          #credit=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n      <mat-form-field style=\"width:90%; margin-top:10px\">\n        <mat-label>Total Sell</mat-label>\n        <input matInput type=\"number\" name=\"totalsell\" [(ngModel)]=\"tankerSellModel.totalsell\"\n          #totalsell=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:10%;width:100%\">\n      <button mat-raised-button [disabled]=\"openingbalance.invalid || closingbalance.invalid || noselrate.invalid || testing.invalid || totalamount.invalid || rate.invalid ||\n      finalamount.invalid || credit.invalid || totalsell.invalid \" class=\"submitButton\" (click)=\"openingBalanceSubmit()\">Submit</button>\n    </div>\n  </div>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tankersellsubmit/tankersellsubmit-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tankersellsubmit/tankersellsubmit-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TankersellsubmitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankersellsubmitPageRoutingModule", function() { return TankersellsubmitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tankersellsubmit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tankersellsubmit.page */ "./src/app/pages/tankersellsubmit/tankersellsubmit.page.ts");




const routes = [
    {
        path: '',
        component: _tankersellsubmit_page__WEBPACK_IMPORTED_MODULE_3__["TankersellsubmitPage"]
    }
];
let TankersellsubmitPageRoutingModule = class TankersellsubmitPageRoutingModule {
};
TankersellsubmitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TankersellsubmitPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tankersellsubmit/tankersellsubmit.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tankersellsubmit/tankersellsubmit.module.ts ***!
  \*******************************************************************/
/*! exports provided: TankersellsubmitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankersellsubmitPageModule", function() { return TankersellsubmitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tankersellsubmit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tankersellsubmit-routing.module */ "./src/app/pages/tankersellsubmit/tankersellsubmit-routing.module.ts");
/* harmony import */ var _tankersellsubmit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tankersellsubmit.page */ "./src/app/pages/tankersellsubmit/tankersellsubmit.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let TankersellsubmitPageModule = class TankersellsubmitPageModule {
};
TankersellsubmitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tankersellsubmit_routing_module__WEBPACK_IMPORTED_MODULE_5__["TankersellsubmitPageRoutingModule"]
        ],
        declarations: [_tankersellsubmit_page__WEBPACK_IMPORTED_MODULE_6__["TankersellsubmitPage"]]
    })
], TankersellsubmitPageModule);



/***/ }),

/***/ "./src/app/pages/tankersellsubmit/tankersellsubmit.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tankersellsubmit/tankersellsubmit.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitButton {\n  height: 48px;\n  width: 30%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy90YW5rZXJzZWxsc3VibWl0L3RhbmtlcnNlbGxzdWJtaXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YW5rZXJzZWxsc3VibWl0L3RhbmtlcnNlbGxzdWJtaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFua2Vyc2VsbHN1Ym1pdC90YW5rZXJzZWxsc3VibWl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXRCdXR0b257XG4gICBcbiAgICBoZWlnaHQ6IDQ4cHg7XHRcbiAgICB3aWR0aDogMzAlOyBcbiAgXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcdFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMTVweDtcdFxuICAgIFxufSIsIi5zdWJtaXRCdXR0b24ge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tankersellsubmit/tankersellsubmit.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tankersellsubmit/tankersellsubmit.page.ts ***!
  \*****************************************************************/
/*! exports provided: TankersellsubmitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankersellsubmitPage", function() { return TankersellsubmitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let TankersellsubmitPage = class TankersellsubmitPage {
    constructor(menu) {
        this.menu = menu;
        this.tankerSellModel = {};
        this.menu.enable(true);
    }
    ngOnInit() {
    }
    OnInput(event) {
        if (this.tankerSellModel['openingbalance'] == "" || this.tankerSellModel['openingbalance'] == null || this.tankerSellModel['openingbalance'] == undefined) {
        }
        else {
            this.tankerSellModel['noselrate'] = this.tankerSellModel['openingbalance'] - this.tankerSellModel['closingbalance'];
        }
    }
    totalAmount() {
        this.tankerSellModel['totalamount'] = this.tankerSellModel['noselrate'] - this.tankerSellModel['testing'];
    }
    finalAmount() {
        this.tankerSellModel['finalamount'] = this.tankerSellModel['totalamount'] * this.tankerSellModel['rate'];
    }
    totalSellAmount() {
        this.tankerSellModel['totalsell'] = this.tankerSellModel['finalamount'] - this.tankerSellModel['credit'];
    }
};
TankersellsubmitPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
TankersellsubmitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tankersellsubmit',
        template: __webpack_require__(/*! raw-loader!./tankersellsubmit.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tankersellsubmit/tankersellsubmit.page.html"),
        styles: [__webpack_require__(/*! ./tankersellsubmit.page.scss */ "./src/app/pages/tankersellsubmit/tankersellsubmit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], TankersellsubmitPage);



/***/ })

}]);
//# sourceMappingURL=pages-tankersellsubmit-tankersellsubmit-module-es2015.js.map