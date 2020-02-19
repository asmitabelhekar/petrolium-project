(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dataentrycredit-dataentrycredit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dataentrycredit/dataentrycredit.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dataentrycredit/dataentrycredit.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Credit\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center\" style=\"margin-top:5%\">\n\n    \n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%\">\n        <input type=\"text\"\n               placeholder=\"Customer Name\"\n               aria-label=\"Number\"\n               matInput\n               [(ngModel)]=\"userModel.customername\"\n               [formControl]=\"myControl\"\n               [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Choose a date</mat-label>\n        <input matInput #input=\"ngModel\" [(ngModel)]=\"userModel.date\" [min]=\"minDate\" [max]=\"today\"\n          [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [disabled]=\"true\">\n        <!-- <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"userModel.date\" [max]=\"maxDate\"> -->\n        <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"true\"></mat-datepicker-toggle>\n        <mat-datepicker #picker (selectedChanged)=\"onDate($event)\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"width:96%;margin-left:2%; margin-right:2%\">\n      <div *ngFor=\"let item of buttonsArray;let i = index \" style=\"width:44%\">\n        <button mat-button style=\"width:100%\" [ngClass]=\"(checkFuelType  == i) ? 'oddBackground' : 'evenBackground' \"\n          (click)=\"fuelType(item.indexFuel)\">{{item.fuelType}}</button>\n      </div>\n    </div>\n\n    <div style=\"width: 100%;\">\n\n      <!-- <ion-row style=\"width:80%\" fxLayout=\"row\" fxLayoutAlign=\"center center\" align=\"center\">\n        <ion-col  *ngFor=\"let item of buttonsArray;let i = index \">\n          <button mat-button style=\"width:100%\" [ngClass]=\"(checkFuelType  == i) ? 'oddBackground' : 'evenBackground' \"\n            (click)=\"fuelType(item.indexFuel)\">{{item.fuelType}}</button>\n        </ion-col>\n      </ion-row> -->\n\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%; margin-top:10px\">\n          <mat-label>In Litures</mat-label>\n          <input matInput type=\"number\" name=\"inlitures\" (input)=\"OnInput($event)\" [(ngModel)]=\"userModel.inlitures\"\n            #inlitures=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%\">\n          <mat-label>Per Liture</mat-label>\n          <input matInput type=\"number\" name=\"perliture\" (input)=\"OnInput($event)\" [(ngModel)]=\"userModel.perliture\"\n            #perliture=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%\">\n          <mat-label>Total Amount</mat-label>\n          <input matInput type=\"number\" name=\"totalamount\" [(ngModel)]=\"userModel.totalamount\" #totalamount=\"ngModel\"\n            class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Add Credit</mat-label>\n            <input matInput type=\"number\" name=\"payment\" (input)=\"OnInput($event)\" [(ngModel)]=\"userModel.payment\"\n              #payment=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"displayBalnace == '1' \">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Balance</mat-label>\n        <input matInput type=\"number\" name=\"balance\" [(ngModel)]=\"userModel.balance\" #balance=\"ngModel\"\n          class=\"form-control\" align=\"center\" pattern=\"[0-9.-]+$\">\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%;\">\n        <mat-label>Note</mat-label>\n        <textarea matInput class=\"form-control \" name=\"note\" [(ngModel)]=\"userModel.note\" #note=\"ngModel\"\n          pattern=\"[a-zA-z.  ]+$\" placeholder=\"Note\"></textarea>\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:5%;margin-bottom:20px\">\n      <button mat-raised-button [disabled]=\"payment.invalid \" class=\"submitButton\"\n        (click)=\"creditsubmit()\">Credit</button>\n    </div>\n  </div>\n\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dataentrycredit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataentrycredit.page */ "./src/app/pages/dataentrycredit/dataentrycredit.page.ts");




const routes = [
    {
        path: '',
        component: _dataentrycredit_page__WEBPACK_IMPORTED_MODULE_3__["DataentrycreditPage"]
    }
];
let DataentrycreditPageRoutingModule = class DataentrycreditPageRoutingModule {
};
DataentrycreditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DataentrycreditPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dataentrycredit_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataentrycredit-routing.module */ "./src/app/pages/dataentrycredit/dataentrycredit-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dataentrycredit_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dataentrycredit.page */ "./src/app/pages/dataentrycredit/dataentrycredit.page.ts");









let DataentrycreditPageModule = class DataentrycreditPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/dataentrycredit/dataentrycredit.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dataentrycredit/dataentrycredit.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-fixed-bottom-position-note {\n  position: fixed;\n  bottom: 20px;\n}\n\n.odd {\n  color: red;\n}\n\n.even {\n  color: green;\n}\n\n.oddBackground {\n  border: 1px solid #3f3e3e;\n}\n\n.evenBackground {\n  border: 1px solid #d5dbd5;\n}\n\n.submitButton {\n  height: 48px;\n  width: 30%;\n  margin-left: 15%;\n  margin-right: 15%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9kYXRhZW50cnljcmVkaXQvZGF0YWVudHJ5Y3JlZGl0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGF0YWVudHJ5Y3JlZGl0L2RhdGFlbnRyeWNyZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDREo7O0FES0E7RUFDRyxVQUFBO0FDRkg7O0FESUU7RUFDQyxZQUFBO0FDREg7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBREtFO0VBQ0UseUJBQUE7QUNGSjs7QURJRTtFQUVFLFlBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDRCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXRhZW50cnljcmVkaXQvZGF0YWVudHJ5Y3JlZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2wtZml4ZWQtYm90dG9tLXBvc2l0aW9uLW5vdGV7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjBweDtcbn1cblxuXG4ub2Rke1xuICAgY29sb3I6IHJlZDtcbiAgfVxuICAuZXZlbntcbiAgIGNvbG9yIDogZ3JlZW47XG4gIH1cblxuXG5cbi5vZGRCYWNrZ3JvdW5ke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MywgNjIsIDYyKTtcbiAgfVxuICAuZXZlbkJhY2tncm91bmR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMywgMjE5LCAyMTMpO1xuICB9XG4gIC5zdWJtaXRCdXR0b257XG4gICBcbiAgICBoZWlnaHQ6IDQ4cHg7XHRcbiAgICB3aWR0aDogMzAlOyBcbiAgICAgbWFyZ2luLWxlZnQ6IDE1JTsgXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcdFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMTVweDtcdFxuICAgIFxufSIsIi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2wtZml4ZWQtYm90dG9tLXBvc2l0aW9uLW5vdGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLm9kZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ldmVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub2RkQmFja2dyb3VuZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZjNlM2U7XG59XG5cbi5ldmVuQmFja2dyb3VuZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWRiZDU7XG59XG5cbi5zdWJtaXRCdXR0b24ge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");












let DataentrycreditPage = class DataentrycreditPage {
    constructor(activatedRoute, router, location, toast, apiCall, loader, dateAdapter, menu) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.toast = toast;
        this.apiCall = apiCall;
        this.loader = loader;
        this.dateAdapter = dateAdapter;
        this.menu = menu;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.userModel = {};
        this.displayBalnace = 0;
        this.autoCompleteArray = [];
        this.customerList = [];
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
    ngOnInit() {
        this.getCustomerList();
        this.userModel['type'] = 0;
        this.userModel['perliture'] = 70;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(value => this._filter(value)));
        this.userModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
        let loginStatus = localStorage.getItem("loginStatus");
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.customerList.filter(option => option.toLowerCase().includes(filterValue));
    }
    getCustomerList() {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].base_url + "customers";
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(MyResponse => {
            this.getCusstomers = MyResponse['result']['list'];
            for (let i = 0; i < this.getCusstomers.length; i++) {
                let fullName = this.getCusstomers[i]['firstName'] + " " + this.getCusstomers[i]['lastName'];
                let id = this.getCusstomers[i]['id'];
                this.customerList.push(fullName);
                let getObject = {
                    "name": fullName,
                    "id": id
                };
                this.autoCompleteArray.push(getObject);
            }
            console.log("success:" + this.getCusstomers);
        }, error => {
            alert("failed:" + error);
        });
    }
    OnInput(event) {
        this.userModel['totalamount'] = this.userModel['perliture'] * this.userModel['inlitures'];
        this.userModel['balance'] = this.userModel['totalamount'] - this.userModel['payment'];
        if (this.userModel['balance'] == 0 || this.userModel['balance'] == "" || this.userModel['balance'] == undefined || this.userModel['balance'] == rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"]) {
            this.displayBalnace = 0;
        }
        else {
            this.displayBalnace = 1;
        }
    }
    goBackword() {
        this.location.back();
    }
    convert(str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    fuelType(fuelType) {
        this.checkFuelType = fuelType;
        if (fuelType == 0) {
            this.userModel['type'] = 0;
            this.userModel['perliture'] = 70;
        }
        else {
            this.userModel['type'] = 1;
            this.userModel['perliture'] = 80;
        }
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 4000
            });
            toast.present();
        });
    }
    creditsubmit() {
        this.loader.presentLoading();
        for (let j = 0; j < this.autoCompleteArray.length; j++) {
            if (this.userModel['customername'] == this.autoCompleteArray[j]['name']) {
                this.userModel['id'] = this.autoCompleteArray[j]['id'];
            }
        }
        let send_date = {};
        send_date['type'] = this.userModel['type'];
        send_date['amountInLitre'] = this.userModel['inlitures'];
        send_date['pricePerLitre'] = this.userModel['perliture'];
        send_date['finalAmount'] = this.userModel['totalamount'];
        send_date['amountPaid'] = this.userModel['payment'];
        send_date['date'] = this.userModel['date'];
        if (this.userModel['note'] != "") {
            send_date['message'] = this.userModel['note'];
        }
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].base_url + "customers/" + this.userModel['id'] + "/purchase";
        this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
            let msg = MyResponse['message'];
            this.presentToast(msg);
            let userRole = localStorage.getItem('userRole');
            if (userRole == '0') {
            }
            else if (userRole == '1') {
                this.router.navigate(['/home']);
            }
            else {
                this.router.navigate(['/home']);
            }
            this.loader.stopLoading();
        }, error => {
            this.loader.stopLoading();
            this.presentToast("Something went wrong");
            console.log(error.error.message);
        });
    }
};
DataentrycreditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_10__["ApicallService"] },
    { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_11__["LoaderserviceService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] }
];
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
        src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_11__["LoaderserviceService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]])
], DataentrycreditPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApicallService = class ApicallService {
    constructor(http) {
        this.http = http;
    }
    postWAu(url, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.post(url, data, httpOptions);
    }
    get(url) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.get(url, httpOptions);
    }
    put(url, data) {
        console.log(url);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put(url, data, httpOptions);
    }
};
ApicallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApicallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApicallService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let LoaderserviceService = class LoaderserviceService {
    //   loadingStatus = new Subject<boolean>();
    //   loaderTop = new Subject<boolean>();
    //   blockingLoader = new Subject<boolean>();
    //   blockingLoaderAuth = new Subject<boolean>();
    //   bgGrey = new Subject<boolean>();
    //   blockingLoaderFlag = false;
    //   loaderTopFlag = false;
    //   private subject = new Subject<any>();
    //   showBlockingLoader(){
    //     console.log("load");
    //     this.blockingLoader.next(true);
    //     this.blockingLoaderFlag = true;
    //   }
    //   hideBlockingLoader(){
    //     this.blockingLoader.next(false);
    //     this.blockingLoaderFlag = false;
    //   }
    //   showBlockingLoaderAuth(){
    //     this.blockingLoaderAuth.next(true);
    //   }
    //   hideBlockingLoaderAuth(){
    //     this.blockingLoaderAuth.next(false);
    //   }
    //   sendMessage(message) {
    //     // console.log("name",message);
    //     let set_data = {};
    //     set_data['message'] = message;
    //     this.subject.next(set_data);
    // }
    // getMessage(): Observable<any> {
    //   return this.subject.asObservable();
    // }
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            yield loading.present();
            setTimeout(() => {
                loading.dismiss();
            });
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!' + role + ' Data: ' + data);
        });
    }
    stopLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingController.dismiss();
        });
    }
};
LoaderserviceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoaderserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], LoaderserviceService);



/***/ })

}]);
//# sourceMappingURL=pages-dataentrycredit-dataentrycredit-module-es2015.js.map