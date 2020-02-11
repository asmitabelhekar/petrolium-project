(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sliderimages-sliderimages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sliderimages/sliderimages.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sliderimages/sliderimages.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content style=\"width:100%; height: 100%\">\n  <div style=\"width:100%; height: 100%\">\n    <ion-slides [options]=\"slideOptsOne\" style=\"width:100%; height: 100%\">\n      <ion-slide *ngFor=\"let item of getCusstomers\" style=\"width:100%; height: 100%\">\n        <!-- <ion-card style=\"width:100%; height: 100%\">\n          <ion-card-content style=\"width:100%; height: 100%\"> -->\n            <ion-img [src]=\"item.image\" style=\"width:100%; height: 100%\"></ion-img>\n            <!-- <h2> <b>{{item.title}} </b></h2>\n            <h4>{{item.summary}}</h4> -->\n          <!-- </ion-card-content>\n        </ion-card> -->\n      </ion-slide>\n     </ion-slides>\n  </div>\n \n\n   <ion-button class=\"cl-fixed-bottom-position\" (click)=\"loginPage()\">LOGIN</ion-button>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sliderimages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliderimages.page */ "./src/app/pages/sliderimages/sliderimages.page.ts");




const routes = [
    {
        path: '',
        component: _sliderimages_page__WEBPACK_IMPORTED_MODULE_3__["SliderimagesPage"]
    }
];
let SliderimagesPageRoutingModule = class SliderimagesPageRoutingModule {
};
SliderimagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SliderimagesPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sliderimages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliderimages-routing.module */ "./src/app/pages/sliderimages/sliderimages-routing.module.ts");
/* harmony import */ var _sliderimages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sliderimages.page */ "./src/app/pages/sliderimages/sliderimages.page.ts");







let SliderimagesPageModule = class SliderimagesPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/sliderimages/sliderimages.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/sliderimages/sliderimages.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cl-fixed-bottom-position {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #d2691e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9zbGlkZXJpbWFnZXMvc2xpZGVyaW1hZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2xpZGVyaW1hZ2VzL3NsaWRlcmltYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNELGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2xpZGVyaW1hZ2VzL3NsaWRlcmltYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2wtZml4ZWQtYm90dG9tLXBvc2l0aW9ue1xuICAgIHdpZHRoOjY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgYm90dG9tOiAyMHB4O1xuICAgcmlnaHQ6IDIwcHg7XG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgIGNvbG9yOndoaXRlO1xuICAgei1pbmRleDogMTA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI2OTFlO1xufSIsIi5jbC1maXhlZC1ib3R0b20tcG9zaXRpb24ge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyNjkxZTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SliderimagesPage = class SliderimagesPage {
    constructor(router) {
        this.router = router;
        this.getImageArray = [
            {
                "image": "../../../assets/logoapp.png"
            },
            {
                "image": "../../../assets/logoapp.png"
            },
            {
                "image": "../../../assets/logoapp.png"
            }
        ];
        this.getCusstomers = [
            {
                "title": "llllllllll jjjjjjjjjjj",
                "summery": "",
                "image": "../../../assets/sliseone.png"
            },
            {
                "title": "smitaaa belhekar",
                "summery": "1234567890",
                "image": "../../../assets/slidetwo.png"
            },
            {
                "title": "asmita belhekar",
                "summery": "9527902622",
                "image": "../../../assets/slidethree.png"
            },
        ];
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
    }
    ngOnInit() {
    }
    loginPage() {
        this.router.navigate(['/login']);
    }
};
SliderimagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SliderimagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sliderimages',
        template: __webpack_require__(/*! raw-loader!./sliderimages.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sliderimages/sliderimages.page.html"),
        styles: [__webpack_require__(/*! ./sliderimages.page.scss */ "./src/app/pages/sliderimages/sliderimages.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SliderimagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-sliderimages-sliderimages-module-es2015.js.map