(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userdetail-userdetail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/userdetail/userdetail.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/userdetail/userdetail.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>userdetail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/userdetail/userdetail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/userdetail/userdetail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UserdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailPageRoutingModule", function() { return UserdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _userdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userdetail.page */ "./src/app/pages/userdetail/userdetail.page.ts");




const routes = [
    {
        path: '',
        component: _userdetail_page__WEBPACK_IMPORTED_MODULE_3__["UserdetailPage"]
    }
];
let UserdetailPageRoutingModule = class UserdetailPageRoutingModule {
};
UserdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserdetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/userdetail/userdetail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/userdetail/userdetail.module.ts ***!
  \*******************************************************/
/*! exports provided: UserdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailPageModule", function() { return UserdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userdetail-routing.module */ "./src/app/pages/userdetail/userdetail-routing.module.ts");
/* harmony import */ var _userdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userdetail.page */ "./src/app/pages/userdetail/userdetail.page.ts");







let UserdetailPageModule = class UserdetailPageModule {
};
UserdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _userdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserdetailPageRoutingModule"]
        ],
        declarations: [_userdetail_page__WEBPACK_IMPORTED_MODULE_6__["UserdetailPage"]]
    })
], UserdetailPageModule);



/***/ }),

/***/ "./src/app/pages/userdetail/userdetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/userdetail/userdetail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJkZXRhaWwvdXNlcmRldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/userdetail/userdetail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/userdetail/userdetail.page.ts ***!
  \*****************************************************/
/*! exports provided: UserdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailPage", function() { return UserdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserdetailPage = class UserdetailPage {
    constructor() { }
    ngOnInit() {
    }
};
UserdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userdetail',
        template: __webpack_require__(/*! raw-loader!./userdetail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/userdetail/userdetail.page.html"),
        styles: [__webpack_require__(/*! ./userdetail.page.scss */ "./src/app/pages/userdetail/userdetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserdetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-userdetail-userdetail-module-es2015.js.map