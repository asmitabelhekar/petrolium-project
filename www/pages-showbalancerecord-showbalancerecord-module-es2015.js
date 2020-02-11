(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showbalancerecord-showbalancerecord-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/showbalancerecord/showbalancerecord.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"BackButton\" (click)=\"goBackword()\" style=\"margin:5px\" style=\"color:white\"></button>\n      </ion-col>\n      <ion-col size=\"10\"  class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">Payment Details</ion-label>\n      </ion-col>\n    </ion-row>\n   \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <table class=\"tableback\" align=\"center\">\n    <tr class=\"tablebackground\">\n      <th class=\"tablebackground\">Date</th>\n      <th class=\"tablebackground\">Credited</th>\n      <th class=\"tablebackground\">Debited</th>\n      \n    </tr>\n    <tr *ngFor=\"let lg of getBalanceDetail\">\n      <td class=\"tablebackground\" align=\"center\">{{lg.date}}</td>\n      <td tooltip=\"lg.credited\" class=\"tablebackground\" align=\"center\">{{lg.credited}}</td>\n      <td class=\"tablebackground\" align=\"center\">\n          <span  style=\"color: black;\" >{{lg.debited}}</span> \n      </td>\n     \n    </tr>\n    </table>\n  <button mat-raised-button class=\"FixedButton\" (click)=\"updateBalance()\"> Print </button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/showbalancerecord/showbalancerecord-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/showbalancerecord/showbalancerecord-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ShowbalancerecordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowbalancerecordPageRoutingModule", function() { return ShowbalancerecordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _showbalancerecord_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showbalancerecord.page */ "./src/app/pages/showbalancerecord/showbalancerecord.page.ts");




const routes = [
    {
        path: '',
        component: _showbalancerecord_page__WEBPACK_IMPORTED_MODULE_3__["ShowbalancerecordPage"]
    }
];
let ShowbalancerecordPageRoutingModule = class ShowbalancerecordPageRoutingModule {
};
ShowbalancerecordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowbalancerecordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/showbalancerecord/showbalancerecord.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/showbalancerecord/showbalancerecord.module.ts ***!
  \*********************************************************************/
/*! exports provided: ShowbalancerecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowbalancerecordPageModule", function() { return ShowbalancerecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showbalancerecord_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showbalancerecord-routing.module */ "./src/app/pages/showbalancerecord/showbalancerecord-routing.module.ts");
/* harmony import */ var _showbalancerecord_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showbalancerecord.page */ "./src/app/pages/showbalancerecord/showbalancerecord.page.ts");







let ShowbalancerecordPageModule = class ShowbalancerecordPageModule {
};
ShowbalancerecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _showbalancerecord_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowbalancerecordPageRoutingModule"]
        ],
        declarations: [_showbalancerecord_page__WEBPACK_IMPORTED_MODULE_6__["ShowbalancerecordPage"]]
    })
], ShowbalancerecordPageModule);



/***/ }),

/***/ "./src/app/pages/showbalancerecord/showbalancerecord.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/showbalancerecord/showbalancerecord.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablebackground {\n  margin-top: 20%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.tableback {\n  margin-top: 5%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.FixedButton {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #d2691e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9zaG93YmFsYW5jZXJlY29yZC9zaG93YmFsYW5jZXJlY29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nob3diYWxhbmNlcmVjb3JkL3Nob3diYWxhbmNlcmVjb3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0RKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDRCxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNGSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3diYWxhbmNlcmVjb3JkL3Nob3diYWxhbmNlcmVjb3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4udGFibGViYWNrZ3JvdW5ke1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwOyBcbiAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICB3aWR0aDogOTAlO1xufVxuXG4udGFibGViYWNre1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7IFxuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIHdpZHRoOiA5MCU7XG59XG5cblxuLkZpeGVkQnV0dG9ue1xuICAgIHdpZHRoOjY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgYm90dG9tOiAyMHB4O1xuICAgcmlnaHQ6IDIwcHg7XG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgIGNvbG9yOndoaXRlO1xuICAgei1pbmRleDogMTA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI2OTFlO1xufVxuIiwiLnRhYmxlYmFja2dyb3VuZCB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnRhYmxlYmFjayB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uRml4ZWRCdXR0b24ge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyNjkxZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/showbalancerecord/showbalancerecord.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/showbalancerecord/showbalancerecord.page.ts ***!
  \*******************************************************************/
/*! exports provided: ShowbalancerecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowbalancerecordPage", function() { return ShowbalancerecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ShowbalancerecordPage = class ShowbalancerecordPage {
    constructor(router) {
        this.router = router;
        this.getBalanceDetail = [
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            }, {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            }
        ];
    }
    ngOnInit() {
    }
    goBackword() {
        this.router.navigate(['sites']);
    }
};
ShowbalancerecordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ShowbalancerecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showbalancerecord',
        template: __webpack_require__(/*! raw-loader!./showbalancerecord.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html"),
        styles: [__webpack_require__(/*! ./showbalancerecord.page.scss */ "./src/app/pages/showbalancerecord/showbalancerecord.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ShowbalancerecordPage);



/***/ })

}]);
//# sourceMappingURL=pages-showbalancerecord-showbalancerecord-module-es2015.js.map