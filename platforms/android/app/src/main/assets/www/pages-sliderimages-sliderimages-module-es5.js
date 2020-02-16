(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sliderimages-sliderimages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sliderimages/sliderimages.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sliderimages/sliderimages.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content style=\"width:100%; height: 100%\">\n    <ion-slides [options]=\"slideOptsOne\" style=\"width:100%; height: 100%\">\n      <ion-slide *ngFor=\"let item of getCusstomers\" style=\"width:100%; height: 100%\">\n            <ion-img [src]=\"item.image\" style=\"width:100%; height: 100%; margin-left:5%\"></ion-img>\n      </ion-slide>\n     </ion-slides>\n \n\n   <button class=\"cl-fixed-bottom-position\" (click)=\"loginPage()\"><b>LOGIN</b></button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sliderimages/sliderimages-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/sliderimages/sliderimages-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SliderimagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderimagesPageRoutingModule", function() { return SliderimagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sliderimages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliderimages.page */ "./src/app/pages/sliderimages/sliderimages.page.ts");




var routes = [
    {
        path: '',
        component: _sliderimages_page__WEBPACK_IMPORTED_MODULE_3__["SliderimagesPage"]
    }
];
var SliderimagesPageRoutingModule = /** @class */ (function () {
    function SliderimagesPageRoutingModule() {
    }
    SliderimagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SliderimagesPageRoutingModule);
    return SliderimagesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/sliderimages/sliderimages.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/sliderimages/sliderimages.module.ts ***!
  \***********************************************************/
/*! exports provided: SliderimagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderimagesPageModule", function() { return SliderimagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sliderimages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliderimages-routing.module */ "./src/app/pages/sliderimages/sliderimages-routing.module.ts");
/* harmony import */ var _sliderimages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sliderimages.page */ "./src/app/pages/sliderimages/sliderimages.page.ts");







var SliderimagesPageModule = /** @class */ (function () {
    function SliderimagesPageModule() {
    }
    SliderimagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _sliderimages_routing_module__WEBPACK_IMPORTED_MODULE_5__["SliderimagesPageRoutingModule"]
            ],
            declarations: [_sliderimages_page__WEBPACK_IMPORTED_MODULE_6__["SliderimagesPage"]]
        })
    ], SliderimagesPageModule);
    return SliderimagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sliderimages/sliderimages.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/sliderimages/sliderimages.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cl-fixed-bottom-position {\n  width: 75px;\n  height: 75px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  padding: 10px;\n  background-color: #2e2d2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRG93bmxvYWRzL3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvc2xpZGVyaW1hZ2VzL3NsaWRlcmltYWdlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NsaWRlcmltYWdlcy9zbGlkZXJpbWFnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDRCxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDQ0giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zbGlkZXJpbWFnZXMvc2xpZGVyaW1hZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbC1maXhlZC1ib3R0b20tcG9zaXRpb257XG4gICAgd2lkdGg6NzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBib3R0b206IDIwcHg7XG4gICByaWdodDogMjBweDtcbiAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgY29sb3I6d2hpdGU7XG4gICB6LWluZGV4OiAxMDtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xufSIsIi5jbC1maXhlZC1ib3R0b20tcG9zaXRpb24ge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/sliderimages/sliderimages.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sliderimages/sliderimages.page.ts ***!
  \*********************************************************/
/*! exports provided: SliderimagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderimagesPage", function() { return SliderimagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var SliderimagesPage = /** @class */ (function () {
    function SliderimagesPage(router, menuCntrl) {
        this.router = router;
        this.menuCntrl = menuCntrl;
        this.getImageArray = [
            {
                "image": "../../assets/logoapp.jpg"
            },
            {
                "image": "../../../assets/logoapp.jpg"
            },
            {
                "image": "../assets/logoapp.jpg"
            }
        ];
        this.getCusstomers = [
            {
                "title": "llllllllll jjjjjjjjjjj",
                "summery": "",
                "image": "../../assets/sliseone.jpg"
            },
            {
                "title": "smitaaa belhekar",
                "summery": "1234567890",
                "image": "../../assets/slidetwo.jpg"
            },
            {
                "title": "asmita belhekar",
                "summery": "9527902622",
                "image": "../../assets/slidethree.jpg"
            },
        ];
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
    }
    SliderimagesPage.prototype.ngOnInit = function () {
        this.menuCntrl.enable(false);
    };
    SliderimagesPage.prototype.loginPage = function () {
        this.router.navigate(['/login']);
    };
    SliderimagesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    SliderimagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sliderimages',
            template: __webpack_require__(/*! raw-loader!./sliderimages.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sliderimages/sliderimages.page.html"),
            styles: [__webpack_require__(/*! ./sliderimages.page.scss */ "./src/app/pages/sliderimages/sliderimages.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], SliderimagesPage);
    return SliderimagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sliderimages-sliderimages-module-es5.js.map