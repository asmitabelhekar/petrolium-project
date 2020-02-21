(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reportlist-reportlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reportlist/reportlist.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reportlist/reportlist.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"margin:10px\"></button>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label class=\"TitleHeader TitleText\" style=\"font-size: 17px;\">\n          List\n        </ion-label>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top: 5px;\">\n\n    <ion-card *ngFor=\"let item of recordList\"\n      style=\"padding:10px; border-radius: 10px;margin-top:5px;width:90%\">\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n        <label style=\"margin-top:5px;font-size: 14px;color:black;\">{{item.name}}</label>\n        <label style=\"margin-top:2px;font-size: 14px;color:black;\">{{item.amount}}</label>\n      </div>\n\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/reportlist/reportlist-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/reportlist/reportlist-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ReportlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportlistPageRoutingModule", function() { return ReportlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reportlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportlist.page */ "./src/app/pages/reportlist/reportlist.page.ts");




var routes = [
    {
        path: '',
        component: _reportlist_page__WEBPACK_IMPORTED_MODULE_3__["ReportlistPage"]
    }
];
var ReportlistPageRoutingModule = /** @class */ (function () {
    function ReportlistPageRoutingModule() {
    }
    ReportlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReportlistPageRoutingModule);
    return ReportlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/reportlist/reportlist.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/reportlist/reportlist.module.ts ***!
  \*******************************************************/
/*! exports provided: ReportlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportlistPageModule", function() { return ReportlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reportlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportlist-routing.module */ "./src/app/pages/reportlist/reportlist-routing.module.ts");
/* harmony import */ var _reportlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportlist.page */ "./src/app/pages/reportlist/reportlist.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var ReportlistPageModule = /** @class */ (function () {
    function ReportlistPageModule() {
    }
    ReportlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _reportlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportlistPageRoutingModule"]
            ],
            declarations: [_reportlist_page__WEBPACK_IMPORTED_MODULE_6__["ReportlistPage"]]
        })
    ], ReportlistPageModule);
    return ReportlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reportlist/reportlist.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/reportlist/reportlist.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9yZXBvcnRsaXN0L3JlcG9ydGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXBvcnRsaXN0L3JlcG9ydGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnRsaXN0L3JlcG9ydGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsLWJhY2stYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4iLCIuVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/reportlist/reportlist.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/reportlist/reportlist.page.ts ***!
  \*****************************************************/
/*! exports provided: ReportlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportlistPage", function() { return ReportlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ReportlistPage = /** @class */ (function () {
    function ReportlistPage(router) {
        this.router = router;
        this.recordList = [
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            }
        ];
    }
    ReportlistPage.prototype.ngOnInit = function () {
    };
    ReportlistPage.prototype.goBackword = function () {
        this.router.navigate(['/reports']);
    };
    ReportlistPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ReportlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportlist',
            template: __webpack_require__(/*! raw-loader!./reportlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reportlist/reportlist.page.html"),
            styles: [__webpack_require__(/*! ./reportlist.page.scss */ "./src/app/pages/reportlist/reportlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReportlistPage);
    return ReportlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reportlist-reportlist-module-es5.js.map