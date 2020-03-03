(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addusers-addusers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addusers/addusers.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addusers/addusers.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>addusers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/addusers/addusers-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/addusers/addusers-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddusersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddusersPageRoutingModule", function() { return AddusersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addusers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addusers.page */ "./src/app/pages/addusers/addusers.page.ts");




const routes = [
    {
        path: '',
        component: _addusers_page__WEBPACK_IMPORTED_MODULE_3__["AddusersPage"]
    }
];
let AddusersPageRoutingModule = class AddusersPageRoutingModule {
};
AddusersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddusersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/addusers/addusers.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/addusers/addusers.module.ts ***!
  \***************************************************/
/*! exports provided: AddusersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddusersPageModule", function() { return AddusersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addusers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addusers-routing.module */ "./src/app/pages/addusers/addusers-routing.module.ts");
/* harmony import */ var _addusers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addusers.page */ "./src/app/pages/addusers/addusers.page.ts");







let AddusersPageModule = class AddusersPageModule {
};
AddusersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addusers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddusersPageRoutingModule"]
        ],
        declarations: [_addusers_page__WEBPACK_IMPORTED_MODULE_6__["AddusersPage"]]
    })
], AddusersPageModule);



/***/ }),

/***/ "./src/app/pages/addusers/addusers.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/addusers/addusers.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHVzZXJzL2FkZHVzZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/addusers/addusers.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/addusers/addusers.page.ts ***!
  \*************************************************/
/*! exports provided: AddusersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddusersPage", function() { return AddusersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddusersPage = class AddusersPage {
    constructor() { }
    ngOnInit() {
    }
};
AddusersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addusers',
        template: __webpack_require__(/*! raw-loader!./addusers.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addusers/addusers.page.html"),
        styles: [__webpack_require__(/*! ./addusers.page.scss */ "./src/app/pages/addusers/addusers.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddusersPage);



/***/ })

}]);
//# sourceMappingURL=pages-addusers-addusers-module-es2015.js.map