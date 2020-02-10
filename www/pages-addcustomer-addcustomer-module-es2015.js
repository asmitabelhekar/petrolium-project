(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addcustomer-addcustomer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addcustomer/addcustomer.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addcustomer/addcustomer.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"new-background-color\">\n\n  <ion-toolbar >\n  <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"margin:10px\"></button>\n    <ion-title>addcustomer</ion-title>\n  </ion-toolbar>\n</ion-header>  -->\n\n<!-- <ion-content>\n</ion-content> -->\n\n<div class=\"ac-container\">\n  <div class=\"ac-conatiner-title\" fxLayoutAlign=\"center\">\n    <h1>Add Customer</h1>\n  </div>\n  <div class=\"ac-l-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\">\n\n    <mat-form-field appearance=\"outline\">\n      \n\n      <mat-label>\n        <mat-icon>person</mat-icon>\n        \n        Name</mat-label>\n        <input matInput required class=\"form-control\" name=\"fname\" [(ngModel)]=\"userModel.fname\"  #fname=\"ngModel\" pattern=\"[a-zA-z]+$\" >\n       <mat-error>\n         <div *ngIf=\"fname.invalid && (fname.dirty  || fname.touched)\">\n          Name is Required\n         </div>\n       </mat-error>\n      \n    </mat-form-field>\n \n  \n    <mat-form-field appearance=\"outline\">\n      \n   \n       <mat-label>\n        <mat-icon>call</mat-icon>  Phone Number      \n\n       </mat-label>\n\n      <input matInput required class=\"form-control\" name=\"phone\" [(ngModel)]=\"userModel.phone\" #phone=\"ngModel\" minlength=\"10\" maxlength=10 pattern=\"[0-9]+\" placeholder=\"949\">\n      <mat-error>\n        <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n          Phone Number Required\n        </div>\n      </mat-error>  \n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n\n      <mat-label>\n        <mat-icon>home</mat-icon>\n        Address\n      </mat-label>\n      <textarea matInput required class=\"form-control\" name=\"address\" [(ngModel)]=\"userModel.address\" #address=\"ngModel\"></textarea>\n      <mat-error>\n        <div *ngIf=\"address.invalid && (address.dirty || address.touched)\">Enter Address\n        </div>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\">\n\n      <mat-label>\n        <mat-icon>email</mat-icon>\n\n        Email\n      </mat-label>\n      <input matInput>\n    </mat-form-field>\n   <div class=\"ac-l-button\" fxLayoutAlign=\"space-between center\">\n        <button mat-raised-button (click)=\"addCustomer()\">Submit</button>\n     </div>\n\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddcustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPageRoutingModule", function() { return AddcustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcustomer.page */ "./src/app/pages/addcustomer/addcustomer.page.ts");




const routes = [
    {
        path: '',
        component: _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__["AddcustomerPage"]
    }
];
let AddcustomerPageRoutingModule = class AddcustomerPageRoutingModule {
};
AddcustomerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddcustomerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer.module.ts ***!
  \*********************************************************/
/*! exports provided: AddcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPageModule", function() { return AddcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcustomer-routing.module */ "./src/app/pages/addcustomer/addcustomer-routing.module.ts");
/* harmony import */ var _addcustomer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addcustomer.page */ "./src/app/pages/addcustomer/addcustomer.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let AddcustomerPageModule = class AddcustomerPageModule {
};
AddcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddcustomerPageRoutingModule"]
        ],
        declarations: [_addcustomer_page__WEBPACK_IMPORTED_MODULE_4__["AddcustomerPage"]]
    })
], AddcustomerPageModule);



/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.new-background-color {\n  --background: #494747;\n}\n\n.ac-name {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9hZGRjdXN0b21lci9hZGRjdXN0b21lci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZGN1c3RvbWVyL2FkZGN1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRElBO0VBQ0kscUJBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGN1c3RvbWVyL2FkZGN1c3RvbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NDc0NztcbiAgfVxuICBcbi5hYy1uYW1le1xuICAgIHdpZHRoOjIwJTtcbi8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xufSIsIi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICM0OTQ3NDc7XG59XG5cbi5hYy1uYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer.page.ts ***!
  \*******************************************************/
/*! exports provided: AddcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPage", function() { return AddcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AddcustomerPage = class AddcustomerPage {
    constructor(router) {
        this.router = router;
        this.userModel = {};
    }
    ngOnInit() {
    }
    addCustomer() {
        this.router.navigate(["home"]);
    }
    goBackword() {
        this.router.navigate(['home']);
    }
};
AddcustomerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcustomer',
        template: __webpack_require__(/*! raw-loader!./addcustomer.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addcustomer/addcustomer.page.html"),
        styles: [__webpack_require__(/*! ./addcustomer.page.scss */ "./src/app/pages/addcustomer/addcustomer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AddcustomerPage);



/***/ })

}]);
//# sourceMappingURL=pages-addcustomer-addcustomer-module-es2015.js.map