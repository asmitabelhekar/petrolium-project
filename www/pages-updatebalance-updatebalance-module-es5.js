(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-updatebalance-updatebalance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/updatebalance/updatebalance.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/updatebalance/updatebalance.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">{{customerName | titlecase}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:5%\">\n    <h5>{{paymentNames}}</h5>\n  </div>\n\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center\" style=\"margin-top:5%\">\n\n    <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:80%\">\n        <input type=\"text\"\n               placeholder=\"Pick one\"\n               aria-label=\"Number\"\n               matInput\n               [formControl]=\"myControl\"\n               [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n\n    </div> -->\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Choose a date</mat-label>\n        <input matInput #input=\"ngModel\" [(ngModel)]=\"userModel.date\" [min]=\"minDate\" [max]=\"today\"\n          [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n        <!-- <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"userModel.date\" [max]=\"maxDate\"> -->\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker (selectedChanged)=\"onDate($event)\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n\n\n    <div *ngIf=\"paymentMethod == 'Credit' \" style=\"width: 100%;\">\n\n      <!-- <ion-row style=\"width:100%\">\n        <ion-col fxLayout=\"row\" fxLayoutAlign=\"space-around center\" *ngFor=\"let item of buttonsArray;let i = index \"\n          style=\"width:50%\">\n          <button mat-button style=\"width:50%\" [ngClass]=\"(checkFuelType  == i) ? 'oddBackground' : 'evenBackground' \"\n            (click)=\"fuelType(item.indexFuel)\">{{item.fuelType}}</button>\n        </ion-col>\n      </ion-row> -->\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"width:96%;margin-left:2%; margin-right:2%\">\n        <div *ngFor=\"let item of buttonsArray;let i = index \" style=\"width:44%\">\n          <button mat-button style=\"width:100%\" [ngClass]=\"(checkFuelType  == i) ? 'oddBackground' : 'evenBackground' \"\n            (click)=\"fuelType(item.indexFuel)\">{{item.fuelType}}</button>\n        </div>\n      </div>\n\n      <!-- <div *ngFor=\"let item of buttonsArray;let i = index \">\n  <div style=\"margin-top:10px\"  >\n    <button style=\"width:30%\" mat-button [ngClass]=\"(checkFuelType  == i) ? 'odd' : 'even' \" (click)=\"fuelType(item.indexFuel)\">{{item.fuelType}}</button>\n</div>\n</div> -->\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%; margin-top:10px\">\n          <mat-label>In Litures</mat-label>\n          <input matInput type=\"number\" name=\"inlitures\" (input)=\"OnInput($event)\" [(ngModel)]=\"userModel.inlitures\"\n            #inlitures=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%\">\n          <mat-label>Per Liture</mat-label>\n          <input matInput type=\"number\" name=\"perliture\" (input)=\"OnInput($event)\" [(ngModel)]=\"userModel.perliture\"\n            #perliture=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%\">\n          <mat-label>Total Amount</mat-label>\n          <input matInput type=\"number\" name=\"totalamount\" [(ngModel)]=\"userModel.totalamount\" #totalamount=\"ngModel\"\n            class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Add {{paymentMethod}}</mat-label>\n        <input matInput type=\"number\" name=\"payment\" (input)=\"OnInput($event)\" [(ngModel)]=\"userModel.payment\"\n          #payment=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"displayBalnace == '1' \">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Balance</mat-label>\n        <input matInput type=\"number\" name=\"balance\" [(ngModel)]=\"userModel.balance\" #balance=\"ngModel\"\n          class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%;\">\n        <mat-label>Note</mat-label>\n        <textarea matInput class=\"form-control \" name=\"note\" [(ngModel)]=\"userModel.note\" #note=\"ngModel\"\n          pattern=\"[a-zA-z]+$\" placeholder=\"Note\"></textarea>\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"paymentMethod == 'Credit' \"\n      style=\"margin-top:3%;margin-bottom:20px\">\n      <!-- <button mat-raised-button\n        [disabled]=\"payment.invalid  || inlitures.invalid || perliture.invalid || totalamount.invalid\"\n        class=\"submitButton\">Submit</button> -->\n      <button mat-raised-button [disabled]=\"payment.invalid \" class=\"submitButton\" (click)=\"creditAmount()\">Credit</button>\n    </div>\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:5%\" *ngIf=\"paymentMethod == 'Payment' \">\n      <button mat-raised-button [disabled]=\"payment.invalid \" class=\"submitButton\" (click)=\"debitAmount()\">Debit</button>\n    </div>\n\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/updatebalance/updatebalance-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/updatebalance/updatebalance-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdatebalancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatebalancePageRoutingModule", function() { return UpdatebalancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _updatebalance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatebalance.page */ "./src/app/pages/updatebalance/updatebalance.page.ts");




var routes = [
    {
        path: '',
        component: _updatebalance_page__WEBPACK_IMPORTED_MODULE_3__["UpdatebalancePage"]
    }
];
var UpdatebalancePageRoutingModule = /** @class */ (function () {
    function UpdatebalancePageRoutingModule() {
    }
    UpdatebalancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UpdatebalancePageRoutingModule);
    return UpdatebalancePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/updatebalance/updatebalance.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/updatebalance/updatebalance.module.ts ***!
  \*************************************************************/
/*! exports provided: UpdatebalancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatebalancePageModule", function() { return UpdatebalancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updatebalance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatebalance-routing.module */ "./src/app/pages/updatebalance/updatebalance-routing.module.ts");
/* harmony import */ var _updatebalance_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updatebalance.page */ "./src/app/pages/updatebalance/updatebalance.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var UpdatebalancePageModule = /** @class */ (function () {
    function UpdatebalancePageModule() {
    }
    UpdatebalancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _updatebalance_routing_module__WEBPACK_IMPORTED_MODULE_3__["UpdatebalancePageRoutingModule"]
            ],
            declarations: [_updatebalance_page__WEBPACK_IMPORTED_MODULE_4__["UpdatebalancePage"]]
        })
    ], UpdatebalancePageModule);
    return UpdatebalancePageModule;
}());



/***/ }),

/***/ "./src/app/pages/updatebalance/updatebalance.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/updatebalance/updatebalance.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-fixed-bottom-position-note {\n  position: fixed;\n  bottom: 20px;\n}\n\n.odd {\n  color: red;\n}\n\n.even {\n  color: green;\n}\n\n.oddBackground {\n  border: 1px solid #3f3e3e;\n}\n\n.evenBackground {\n  border: 1px solid #d5dbd5;\n}\n\n.submitButton {\n  height: 48px;\n  width: 30%;\n  margin-left: 15%;\n  margin-right: 15%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRG93bmxvYWRzL3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvdXBkYXRlYmFsYW5jZS91cGRhdGViYWxhbmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXBkYXRlYmFsYW5jZS91cGRhdGViYWxhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNESjs7QURLQTtFQUNHLFVBQUE7QUNGSDs7QURJRTtFQUNDLFlBQUE7QUNESDs7QURNQTtFQUNJLHlCQUFBO0FDSEo7O0FES0U7RUFDRSx5QkFBQTtBQ0ZKOztBRElFO0VBRUUsWUFBQTtFQUNBLFVBQUE7RUFDQyxnQkFBQTtFQUNELGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZWJhbGFuY2UvdXBkYXRlYmFsYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsLWZpeGVkLWJvdHRvbS1wb3NpdGlvbi1ub3Rle1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7XG59XG5cblxuLm9kZHtcbiAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgLmV2ZW57XG4gICBjb2xvciA6IGdyZWVuO1xuICB9XG5cblxuXG4ub2RkQmFja2dyb3VuZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjMsIDYyLCA2Mik7XG4gIH1cbiAgLmV2ZW5CYWNrZ3JvdW5ke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTMsIDIxOSwgMjEzKTtcbiAgfVxuICAuc3VibWl0QnV0dG9ue1xuICAgXG4gICAgaGVpZ2h0OiA0OHB4O1x0XG4gICAgd2lkdGg6IDMwJTsgXG4gICAgIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICAgIGNvbG9yOiAjRkZGRkZGO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICBcbn0iLCIuY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsLWZpeGVkLWJvdHRvbS1wb3NpdGlvbi1ub3RlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG59XG5cbi5vZGQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZXZlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9kZEJhY2tncm91bmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2YzZTNlO1xufVxuXG4uZXZlbkJhY2tncm91bmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkYmQ1O1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/updatebalance/updatebalance.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/updatebalance/updatebalance.page.ts ***!
  \***********************************************************/
/*! exports provided: UpdatebalancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatebalancePage", function() { return UpdatebalancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");












var UpdatebalancePage = /** @class */ (function () {
    function UpdatebalancePage(activatedRoute, router, location, loader, apiCall, toastcontroller, dateAdapter) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.loader = loader;
        this.apiCall = apiCall;
        this.toastcontroller = toastcontroller;
        this.dateAdapter = dateAdapter;
        this.customerList = ['asmita', 'smita', 'asmi', 'sejal', 'pranil', 'dddd', 'ffff', 'ggggggg', 'hhhhh', 'jjjjjj'];
        this.showDateNoteDiv = 1;
        this.userModel = {};
        this.displayBalnace = 0;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
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
        this.dateAdapter.setLocale("en-GB");
    }
    UpdatebalancePage.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return _this._filter(value); }));
        this.userModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
        this.getPaymentDetail = JSON.parse(this.activatedRoute.snapshot.params['balanceObject']);
        this.userModel['perliture'] = 70;
        this.customerMobile = this.getPaymentDetail.customerMobile;
        this.customerName = this.getPaymentDetail.customerName;
        if (this.customerName != "") {
            var names = this.customerName.split(" ");
            this.fname = names[0];
            this.lname = names[(names.length - 1)];
        }
        this.customerId = this.getPaymentDetail.customerId;
        this.paymentType = this.getPaymentDetail.amountState;
        if (this.paymentType == "1") {
            this.paymentMethod = "Payment";
            this.paymentNames = "Debit Payment";
        }
        else if (this.paymentType == "2") {
            this.paymentMethod = "Credit";
            this.paymentNames = "Credit Payment";
        }
        else {
        }
        // }else{
        // }
    };
    UpdatebalancePage.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.customerList.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    UpdatebalancePage.prototype.OnInput = function (event) {
        if (this.paymentMethod == "Credit") {
            this.userModel['totalamount'] = this.userModel['perliture'] * this.userModel['inlitures'];
            this.userModel['balance'] = this.userModel['totalamount'] - this.userModel['payment'];
            if (this.userModel['balance'] == 0 || this.userModel['balance'] == "" || this.userModel['balance'] == undefined || this.userModel['balance'] == rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"]) {
                this.displayBalnace = 0;
            }
            else {
                this.displayBalnace = 1;
            }
        }
        else {
        }
    };
    UpdatebalancePage.prototype.goBackword = function () {
        this.location.back();
        // this.router.navigate(['/showbalancerecord']);
    };
    UpdatebalancePage.prototype.getPaymentDetailInfo = function (detail) {
        var getDate = this.convert(detail.date);
        this.router.navigate(['/showbalancerecord']);
    };
    UpdatebalancePage.prototype.convert = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    };
    UpdatebalancePage.prototype.fuelType = function (fuelType) {
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
    UpdatebalancePage.prototype.creditAmount = function () {
        var _this = this;
        this.loader.presentLoading();
        var send_date = {};
        send_date['type'] = this.userModel['type'];
        send_date['amountInLitre'] = this.userModel['inlitures'];
        send_date['pricePerLitre'] = this.userModel['perliture'];
        send_date['finalAmount'] = this.userModel['totalamount'];
        send_date['amountPaid'] = this.userModel['payment'];
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url + "customers/" + this.customerId + "/purchase";
        this.apiCall.postWAu(url, send_date).subscribe(function (MyResponse) {
            var msg = MyResponse['message'];
            _this.presentToast(msg);
            var detailData = {
                "id": _this.customerId,
                "name": _this.fname,
                "lname": _this.lname,
                "mobile": _this.customerMobile
            };
            _this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }]);
            _this.loader.stopLoading();
        }, function (error) {
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
            console.log(error.error.message);
        });
    };
    UpdatebalancePage.prototype.debitAmount = function () {
        var _this = this;
        this.loader.presentLoading();
        var send_date = {};
        send_date['date'] = this.userModel['date'];
        send_date['amount'] = this.userModel['payment'];
        send_date['message'] = this.userModel['note'];
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url + "customers/" + this.customerId + "/passbook";
        this.apiCall.postWAu(url, send_date).subscribe(function (MyResponse) {
            var msg = MyResponse['message'];
            _this.presentToast(msg);
            var detailData = {
                "id": _this.customerId,
                "name": _this.fname,
                "lname": _this.lname,
                "mobile": _this.customerMobile
            };
            _this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }]);
            _this.loader.stopLoading();
        }, function (error) {
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
            console.log(error.error.message);
        });
    };
    UpdatebalancePage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastcontroller.create({
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
    UpdatebalancePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_11__["LoaderserviceService"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_9__["ApicallService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] }
    ]; };
    UpdatebalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updatebalance',
            template: __webpack_require__(/*! raw-loader!./updatebalance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/updatebalance/updatebalance.page.html"),
            styles: [__webpack_require__(/*! ./updatebalance.page.scss */ "./src/app/pages/updatebalance/updatebalance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_11__["LoaderserviceService"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_9__["ApicallService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"]])
    ], UpdatebalancePage);
    return UpdatebalancePage;
}());



/***/ }),

/***/ "./src/app/service/apicall/apicall.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/apicall/apicall.service.ts ***!
  \****************************************************/
/*! exports provided: ApicallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicallService", function() { return ApicallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApicallService = /** @class */ (function () {
    function ApicallService(http) {
        this.http = http;
    }
    ApicallService.prototype.postWAu = function (url, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.post(url, data, httpOptions);
    };
    ApicallService.prototype.get = function (url) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.get(url, httpOptions);
    };
    ApicallService.prototype.put = function (url, data) {
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put(url, data, httpOptions);
    };
    ApicallService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApicallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApicallService);
    return ApicallService;
}());



/***/ }),

/***/ "./src/app/service/loader/loaderservice.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/loader/loaderservice.service.ts ***!
  \*********************************************************/
/*! exports provided: LoaderserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderserviceService", function() { return LoaderserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var LoaderserviceService = /** @class */ (function () {
    function LoaderserviceService(loadingController) {
        this.loadingController = loadingController;
        this.loadingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderTop = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.blockingLoader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.blockingLoaderAuth = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.bgGrey = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.blockingLoaderFlag = false;
        this.loaderTopFlag = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoaderserviceService.prototype.showBlockingLoader = function () {
        console.log("load");
        this.blockingLoader.next(true);
        this.blockingLoaderFlag = true;
    };
    LoaderserviceService.prototype.hideBlockingLoader = function () {
        this.blockingLoader.next(false);
        this.blockingLoaderFlag = false;
    };
    LoaderserviceService.prototype.showBlockingLoaderAuth = function () {
        this.blockingLoaderAuth.next(true);
    };
    LoaderserviceService.prototype.hideBlockingLoaderAuth = function () {
        this.blockingLoaderAuth.next(false);
    };
    LoaderserviceService.prototype.sendMessage = function (message) {
        // console.log("name",message);
        var set_data = {};
        set_data['message'] = message;
        this.subject.next(set_data);
    };
    LoaderserviceService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    LoaderserviceService.prototype.loadingPresent = function (message, duration) {
        if (message === void 0) { message = null; }
        if (duration === void 0) { duration = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({ message: message, duration: duration })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoaderserviceService.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        setTimeout(function () {
                            loading.dismiss();
                        });
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoaderserviceService.prototype.stopLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadingController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    LoaderserviceService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    LoaderserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], LoaderserviceService);
    return LoaderserviceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-updatebalance-updatebalance-module-es5.js.map