(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dataentrycredit-dataentrycredit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dataentrycredit/dataentrycredit.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dataentrycredit/dataentrycredit.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Credit\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center\" style=\"margin-top:10%\">\n\n    <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%\">\n        <input type=\"text\" placeholder=\"Customer Name\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [(ngModel)]=\"userModel.customername\"\n          [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div> -->\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%\">\n        <input type=\"text\"\n               placeholder=\"Customer Name\"\n               aria-label=\"Number\"\n               matInput\n               [(ngModel)]=\"userModel.customername\"\n               [formControl]=\"myControl\"\n               [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Choose a date</mat-label>\n        <input matInput #input=\"ngModel\" [(ngModel)]=\"userModel.date\" [min]=\"minDate\" [max]=\"today\"\n          [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n        <!-- <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"userModel.date\" [max]=\"maxDate\"> -->\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker (selectedChanged)=\"onDate($event)\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"width:96%;margin-left:2%; margin-right:2%\">\n      <div *ngFor=\"let item of buttonsArray;let i = index \" style=\"width:44%\">\n        <button mat-button style=\"width:100%\" [ngClass]=\"(checkFuelType  == i) ? 'oddBackground' : 'evenBackground' \"\n          (click)=\"fuelType(item.indexFuel)\">{{item.fuelType}}</button>\n      </div>\n    </div>\n\n    <div style=\"width: 100%;\">\n\n      <!-- <ion-row style=\"width:80%\" fxLayout=\"row\" fxLayoutAlign=\"center center\" align=\"center\">\n        <ion-col  *ngFor=\"let item of buttonsArray;let i = index \">\n          <button mat-button style=\"width:100%\" [ngClass]=\"(checkFuelType  == i) ? 'oddBackground' : 'evenBackground' \"\n            (click)=\"fuelType(item.indexFuel)\">{{item.fuelType}}</button>\n        </ion-col>\n      </ion-row> -->\n\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%; margin-top:10px\">\n          <mat-label>In Litures</mat-label>\n          <input matInput type=\"number\" name=\"inlitures\" (input)=\"OnInput($event)\" [(ngModel)]=\"userModel.inlitures\"\n            #inlitures=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%\">\n          <mat-label>Per Liture</mat-label>\n          <input matInput type=\"number\" name=\"perliture\" (input)=\"OnInput($event)\" [(ngModel)]=\"userModel.perliture\"\n            #perliture=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%\">\n          <mat-label>Total Amount</mat-label>\n          <input matInput type=\"number\" name=\"totalamount\" [(ngModel)]=\"userModel.totalamount\" #totalamount=\"ngModel\"\n            class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Add Credit</mat-label>\n            <input matInput type=\"number\" name=\"payment\" (input)=\"OnInput($event)\" [(ngModel)]=\"userModel.payment\"\n              #payment=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"displayBalnace == '1' \">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Balance</mat-label>\n        <input matInput type=\"number\" name=\"balance\" [(ngModel)]=\"userModel.balance\" #balance=\"ngModel\"\n          class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%;\">\n        <mat-label>Note</mat-label>\n        <textarea matInput class=\"form-control \" name=\"note\" [(ngModel)]=\"userModel.note\" #note=\"ngModel\"\n          pattern=\"[a-zA-z]+$\" placeholder=\"Note\"></textarea>\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:5%;margin-bottom:20px\">\n      <button mat-raised-button [disabled]=\"payment.invalid \" class=\"submitButton\"\n        (click)=\"creditsubmit()\">Credit</button>\n    </div>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/dataentrycredit/dataentrycredit-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dataentrycredit/dataentrycredit-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DataentrycreditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataentrycreditPageRoutingModule", function() { return DataentrycreditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataentrycredit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataentrycredit.page */ "./src/app/pages/dataentrycredit/dataentrycredit.page.ts");




var routes = [
    {
        path: '',
        component: _dataentrycredit_page__WEBPACK_IMPORTED_MODULE_3__["DataentrycreditPage"]
    }
];
var DataentrycreditPageRoutingModule = /** @class */ (function () {
    function DataentrycreditPageRoutingModule() {
    }
    DataentrycreditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DataentrycreditPageRoutingModule);
    return DataentrycreditPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dataentrycredit/dataentrycredit.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dataentrycredit/dataentrycredit.module.ts ***!
  \*****************************************************************/
/*! exports provided: DataentrycreditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataentrycreditPageModule", function() { return DataentrycreditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dataentrycredit_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataentrycredit-routing.module */ "./src/app/pages/dataentrycredit/dataentrycredit-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dataentrycredit_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dataentrycredit.page */ "./src/app/pages/dataentrycredit/dataentrycredit.page.ts");









var DataentrycreditPageModule = /** @class */ (function () {
    function DataentrycreditPageModule() {
    }
    DataentrycreditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _dataentrycredit_routing_module__WEBPACK_IMPORTED_MODULE_6__["DataentrycreditPageRoutingModule"]
            ],
            declarations: [_dataentrycredit_page__WEBPACK_IMPORTED_MODULE_8__["DataentrycreditPage"]]
        })
    ], DataentrycreditPageModule);
    return DataentrycreditPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dataentrycredit/dataentrycredit.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dataentrycredit/dataentrycredit.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-fixed-bottom-position-note {\n  position: fixed;\n  bottom: 20px;\n}\n\n.odd {\n  color: red;\n}\n\n.even {\n  color: green;\n}\n\n.oddBackground {\n  border: 1px solid #3f3e3e;\n}\n\n.evenBackground {\n  border: 1px solid #d5dbd5;\n}\n\n.submitButton {\n  height: 48px;\n  width: 30%;\n  margin-left: 15%;\n  margin-right: 15%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRG93bmxvYWRzL3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvZGF0YWVudHJ5Y3JlZGl0L2RhdGFlbnRyeWNyZWRpdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RhdGFlbnRyeWNyZWRpdC9kYXRhZW50cnljcmVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREtBO0VBQ0csVUFBQTtBQ0ZIOztBRElFO0VBQ0MsWUFBQTtBQ0RIOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURLRTtFQUNFLHlCQUFBO0FDRko7O0FESUU7RUFFRSxZQUFBO0VBQ0EsVUFBQTtFQUNDLGdCQUFBO0VBQ0QsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGF0YWVudHJ5Y3JlZGl0L2RhdGFlbnRyeWNyZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsLWZpeGVkLWJvdHRvbS1wb3NpdGlvbi1ub3Rle1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7XG59XG5cblxuLm9kZHtcbiAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgLmV2ZW57XG4gICBjb2xvciA6IGdyZWVuO1xuICB9XG5cblxuXG4ub2RkQmFja2dyb3VuZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjMsIDYyLCA2Mik7XG4gIH1cbiAgLmV2ZW5CYWNrZ3JvdW5ke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTMsIDIxOSwgMjEzKTtcbiAgfVxuICAuc3VibWl0QnV0dG9ue1xuICAgXG4gICAgaGVpZ2h0OiA0OHB4O1x0XG4gICAgd2lkdGg6IDMwJTsgXG4gICAgIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICAgIGNvbG9yOiAjRkZGRkZGO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICBcbn0iLCIuY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsLWZpeGVkLWJvdHRvbS1wb3NpdGlvbi1ub3RlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG59XG5cbi5vZGQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZXZlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9kZEJhY2tncm91bmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2YzZTNlO1xufVxuXG4uZXZlbkJhY2tncm91bmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkYmQ1O1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dataentrycredit/dataentrycredit.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/dataentrycredit/dataentrycredit.page.ts ***!
  \***************************************************************/
/*! exports provided: DataentrycreditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataentrycreditPage", function() { return DataentrycreditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");











var DataentrycreditPage = /** @class */ (function () {
    function DataentrycreditPage(activatedRoute, router, location, toast, apiCall, dateAdapter, menu) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.toast = toast;
        this.apiCall = apiCall;
        this.dateAdapter = dateAdapter;
        this.menu = menu;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.userModel = {};
        this.displayBalnace = 0;
        this.autoCompleteArray = [];
        this.customerList = [];
        // customerList: string[] = ['asmita', 'smita', 'asmi', 'sejal', 'pranil', 'dddd', 'ffff', 'ggggggg', 'hhhhh', 'jjjjjj'];
        this.buttonsArray = [
            {
                "fuelType": "Petrol",
                "indexFuel": "0",
                "type": "0"
            },
            {
                "fuelType": "Diesel",
                "indexFuel": "1",
                "type": "1"
            }
        ];
        this.menu.enable(true);
        this.dateAdapter.setLocale("en-GB");
    }
    DataentrycreditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getCustomerList();
        this.userModel['perliture'] = 70;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return _this._filter(value); }));
        this.userModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
        var loginStatus = localStorage.getItem("loginStatus");
    };
    DataentrycreditPage.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.customerList.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    DataentrycreditPage.prototype.getCustomerList = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].base_url + "customers";
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.getCusstomers = MyResponse['result']['list'];
            for (var i = 0; i < _this.getCusstomers.length; i++) {
                var fullName = _this.getCusstomers[i]['firstName'] + " " + _this.getCusstomers[i]['lastName'];
                var id = _this.getCusstomers[i]['id'];
                _this.customerList.push(fullName);
                var getObject = {
                    "name": fullName,
                    "id": id
                };
                _this.autoCompleteArray.push(getObject);
            }
            console.log("success:" + _this.getCusstomers);
        }, function (error) {
            alert("failed:" + error);
        });
    };
    DataentrycreditPage.prototype.OnInput = function (event) {
        this.userModel['totalamount'] = this.userModel['perliture'] * this.userModel['inlitures'];
        this.userModel['balance'] = this.userModel['totalamount'] - this.userModel['payment'];
        if (this.userModel['balance'] == 0 || this.userModel['balance'] == "" || this.userModel['balance'] == undefined || this.userModel['balance'] == rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"]) {
            this.displayBalnace = 0;
        }
        else {
            this.displayBalnace = 1;
        }
    };
    DataentrycreditPage.prototype.goBackword = function () {
        this.location.back();
        // this.router.navigate(['showbalancerecord']);
    };
    DataentrycreditPage.prototype.convert = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    };
    DataentrycreditPage.prototype.fuelType = function (fuelType) {
        this.checkFuelType = fuelType;
        if (fuelType == 0) {
            this.userModel['type'] = 0;
            this.userModel['perliture'] = 70;
        }
        else {
            this.userModel['type'] = 1;
            this.userModel['perliture'] = 80;
        }
    };
    DataentrycreditPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
                            duration: 4000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataentrycreditPage.prototype.creditsubmit = function () {
        var _this = this;
        for (var j = 0; j < this.autoCompleteArray.length; j++) {
            if (this.userModel['customername'] == this.autoCompleteArray[j]['name']) {
                this.userModel['id'] = this.autoCompleteArray[j]['id'];
            }
        }
        var send_date = {};
        send_date['type'] = this.userModel['type'];
        send_date['amountInLitre'] = this.userModel['inlitures'];
        send_date['pricePerLitre'] = this.userModel['perliture'];
        send_date['finalAmount'] = this.userModel['totalamount'];
        send_date['amountPaid'] = this.userModel['payment'];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].base_url + "customers/" + this.userModel['id'] + "/purchase";
        this.apiCall.postWAu(this.url, send_date).subscribe(function (MyResponse) {
            // this.router.navigate(['/home']);
            var msg = MyResponse['message'];
            _this.presentToast(msg);
        }, function (error) {
            console.log(error.error.message);
        });
    };
    DataentrycreditPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_10__["ApicallService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] }
    ]; };
    DataentrycreditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataentrycredit',
            template: __webpack_require__(/*! raw-loader!./dataentrycredit.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dataentrycredit/dataentrycredit.page.html"),
            styles: [__webpack_require__(/*! ./dataentrycredit.page.scss */ "./src/app/pages/dataentrycredit/dataentrycredit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_10__["ApicallService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]])
    ], DataentrycreditPage);
    return DataentrycreditPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dataentrycredit-dataentrycredit-module-es5.js.map