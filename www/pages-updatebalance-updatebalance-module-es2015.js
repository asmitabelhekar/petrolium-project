(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-updatebalance-updatebalance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/updatebalance/updatebalance.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/updatebalance/updatebalance.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <ion-toolbar>\n    <ion-title>updatebalance</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _updatebalance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatebalance.page */ "./src/app/pages/updatebalance/updatebalance.page.ts");




const routes = [
    {
        path: '',
        component: _updatebalance_page__WEBPACK_IMPORTED_MODULE_3__["UpdatebalancePage"]
    }
];
let UpdatebalancePageRoutingModule = class UpdatebalancePageRoutingModule {
};
UpdatebalancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdatebalancePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updatebalance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatebalance-routing.module */ "./src/app/pages/updatebalance/updatebalance-routing.module.ts");
/* harmony import */ var _updatebalance_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updatebalance.page */ "./src/app/pages/updatebalance/updatebalance.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let UpdatebalancePageModule = class UpdatebalancePageModule {
};
UpdatebalancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _updatebalance_routing_module__WEBPACK_IMPORTED_MODULE_3__["UpdatebalancePageRoutingModule"]
        ],
        declarations: [_updatebalance_page__WEBPACK_IMPORTED_MODULE_4__["UpdatebalancePage"]]
    })
], UpdatebalancePageModule);



/***/ }),

/***/ "./src/app/pages/updatebalance/updatebalance.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/updatebalance/updatebalance.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZWJhbGFuY2UvdXBkYXRlYmFsYW5jZS5wYWdlLnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UpdatebalancePage = class UpdatebalancePage {
    constructor() { }
    ngOnInit() {
    }
};
UpdatebalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-updatebalance',
        template: __webpack_require__(/*! raw-loader!./updatebalance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/updatebalance/updatebalance.page.html"),
        styles: [__webpack_require__(/*! ./updatebalance.page.scss */ "./src/app/pages/updatebalance/updatebalance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UpdatebalancePage);



/***/ })

}]);
//# sourceMappingURL=pages-updatebalance-updatebalance-module-es2015.js.map