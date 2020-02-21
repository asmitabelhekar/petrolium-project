(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-reports-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reports/reports.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reports/reports.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Reports\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top: 5px;\">\n    <ion-card  *ngFor=\"let item of recordList\" style=\"padding:10px; border-radius: 10px;margin-top:8px;width:90%\" (click)=\"dislayList()\"> \n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" style=\"width:95%\">\n          <label style=\"margin-top:10px;font-size: 16px;color:black;\">{{item.recordName}}</label>\n          <label style=\"margin-top:10px ;font-size: 13px;color:black;\">{{item.amount}}</label>\n\n          <ion-progress-bar color=\"medium\" style=\"margin-top:10px;width:100%\" value=\"{{item.progress}}\" ></ion-progress-bar>\n         \n         </div>\n     \n         <div fxLayoutAlign=\"center center\">\n           <img src=\"../../../assets/next.png\" style=\"width:15px;height:15px\"/>\n         </div>\n      </div>\n     \n    </ion-card>\n\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/reports/reports-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageRoutingModule", function() { return ReportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.page */ "./src/app/pages/reports/reports.page.ts");




var routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_3__["ReportsPage"]
    }
];
var ReportsPageRoutingModule = /** @class */ (function () {
    function ReportsPageRoutingModule() {
    }
    ReportsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReportsPageRoutingModule);
    return ReportsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/reports/reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/pages/reports/reports-routing.module.ts");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.page */ "./src/app/pages/reports/reports.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var ReportsPageModule = /** @class */ (function () {
    function ReportsPageModule() {
    }
    ReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportsPageRoutingModule"]
            ],
            declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]]
        })
    ], ReportsPageModule);
    return ReportsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reports/reports.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cl_progressbar {\n  color: black;\n}\n\n.quizz-progress ion-progress-bar {\n  --progress-background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9yZXBvcnRzL3JlcG9ydHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXBvcnRzL3JlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREdJO0VBR0csNEJBQUE7QUNGUCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydHMvcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xfcHJvZ3Jlc3NiYXJ7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cbi5xdWl6ei1wcm9ncmVzcyB7XG4gICAgaW9uLXByb2dyZXNzLWJhciB7XG4gICAgICAvLyAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgIC8vICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgfVxuICAgfSIsIi5jbF9wcm9ncmVzc2JhciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnF1aXp6LXByb2dyZXNzIGlvbi1wcm9ncmVzcy1iYXIge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/reports/reports.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/reports/reports.page.ts ***!
  \***********************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ReportsPage = /** @class */ (function () {
    function ReportsPage(router) {
        this.router = router;
        this.progress = 0.1;
        this.recordList = [
            {
                "recordName": "Customerwise",
                "progress": "0.5",
                "amount": "60000"
            },
            {
                "recordName": "Tankerwise",
                "progress": "0.1",
                "amount": "10000"
            },
            {
                "recordName": "Usagewise",
                "progress": "0.4",
                "amount": "40000"
            },
            {
                "recordName": "Customerwise",
                "progress": "0.9",
                "amount": "90000"
            }
        ];
    }
    ReportsPage.prototype.ngOnInit = function () {
    };
    ReportsPage.prototype.dislayList = function () {
        this.router.navigate(['/reportlist']);
    };
    ReportsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! raw-loader!./reports.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reports/reports.page.html"),
            styles: [__webpack_require__(/*! ./reports.page.scss */ "./src/app/pages/reports/reports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReportsPage);
    return ReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reports-reports-module-es5.js.map