(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dataentryopening-dataentryopening-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dataentryopening/dataentryopening.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dataentryopening/dataentryopening.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  \n  <ion-toolbar class=\"new-background-color\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-buttons slot=\"start\" style=\"color:white\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n      </ion-col>\n      <ion-col size=\"10\">\n\n        <div class=\"TitleHeader TitleText\">\n          Opening\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Opening\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:15%; width:100%\">\n      <mat-form-field style=\"width:80%\">\n        <mat-label>Choose a date</mat-label>\n        <input matInput #input=\"ngModel\" [(ngModel)]=\"openingModel.date\" [min]=\"minDate\" [max]=\"today\" [matDatepicker]=\"picker\"\n          placeholder=\"Choose a date\">\n        <!-- <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"userModel.date\" [max]=\"maxDate\"> -->\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker (selectedChanged)=\"onDate($event)\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n      <mat-form-field style=\"width:80%\">\n        <mat-label>Fuel Type</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let type of fuelType\" [value]=\"type.type\">\n            {{type.type}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n        <mat-form-field style=\"width:80%; margin-top:10px\">\n          <mat-label>Opening Balance</mat-label>\n          <input matInput type=\"number\" name=\"openingbalance\" [(ngModel)]=\"openingModel.openingbalance\"\n            #openingbalance=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:10%;width:100%\">\n\n        <button mat-raised-button [disabled]=\"openingbalance.invalid \" class=\"submitButton\">Submit</button>\n      </div>\n  </div>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/dataentryopening/dataentryopening-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/dataentryopening/dataentryopening-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DataentryopeningPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataentryopeningPageRoutingModule", function() { return DataentryopeningPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataentryopening_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataentryopening.page */ "./src/app/pages/dataentryopening/dataentryopening.page.ts");




var routes = [
    {
        path: '',
        component: _dataentryopening_page__WEBPACK_IMPORTED_MODULE_3__["DataentryopeningPage"]
    }
];
var DataentryopeningPageRoutingModule = /** @class */ (function () {
    function DataentryopeningPageRoutingModule() {
    }
    DataentryopeningPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DataentryopeningPageRoutingModule);
    return DataentryopeningPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dataentryopening/dataentryopening.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dataentryopening/dataentryopening.module.ts ***!
  \*******************************************************************/
/*! exports provided: DataentryopeningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataentryopeningPageModule", function() { return DataentryopeningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dataentryopening_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataentryopening-routing.module */ "./src/app/pages/dataentryopening/dataentryopening-routing.module.ts");
/* harmony import */ var _dataentryopening_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataentryopening.page */ "./src/app/pages/dataentryopening/dataentryopening.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var DataentryopeningPageModule = /** @class */ (function () {
    function DataentryopeningPageModule() {
    }
    DataentryopeningPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _dataentryopening_routing_module__WEBPACK_IMPORTED_MODULE_5__["DataentryopeningPageRoutingModule"]
            ],
            declarations: [_dataentryopening_page__WEBPACK_IMPORTED_MODULE_6__["DataentryopeningPage"]]
        })
    ], DataentryopeningPageModule);
    return DataentryopeningPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dataentryopening/dataentryopening.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dataentryopening/dataentryopening.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.submitButton {\n  height: 48px;\n  width: 35%;\n  border-radius: 20px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9kYXRhZW50cnlvcGVuaW5nL2RhdGFlbnRyeW9wZW5pbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXRhZW50cnlvcGVuaW5nL2RhdGFlbnRyeW9wZW5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUE7RUFFSSxZQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXRhZW50cnlvcGVuaW5nL2RhdGFlbnRyeW9wZW5pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uQmFja0J1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnN1Ym1pdEJ1dHRvbntcbiAgIFxuICAgIGhlaWdodDogNDhweDtcdFxuICAgIHdpZHRoOiAzNSU7IFxuICBcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1x0XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxNXB4O1x0XG4gICAgXG59IiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLkJhY2tCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnN1Ym1pdEJ1dHRvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDM1JTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dataentryopening/dataentryopening.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dataentryopening/dataentryopening.page.ts ***!
  \*****************************************************************/
/*! exports provided: DataentryopeningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataentryopeningPage", function() { return DataentryopeningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var DataentryopeningPage = /** @class */ (function () {
    function DataentryopeningPage(dataAdapter, location) {
        this.dataAdapter = dataAdapter;
        this.location = location;
        this.openingModel = {};
        this.fuelType = [
            { "type": "Petrol" },
            { "type": "Diesel" }
        ];
        this.dataAdapter.setLocale("en-GB");
    }
    DataentryopeningPage.prototype.ngOnInit = function () {
    };
    DataentryopeningPage.prototype.goBackword = function () {
        this.location.back();
    };
    DataentryopeningPage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    DataentryopeningPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataentryopening',
            template: __webpack_require__(/*! raw-loader!./dataentryopening.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dataentryopening/dataentryopening.page.html"),
            styles: [__webpack_require__(/*! ./dataentryopening.page.scss */ "./src/app/pages/dataentryopening/dataentryopening.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], DataentryopeningPage);
    return DataentryopeningPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dataentryopening-dataentryopening-module-es5.js.map