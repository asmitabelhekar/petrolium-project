(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"cl-center-title\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"addCustomer()\">\n    <ion-icon name=\"person-add\" style=\"color:rgb(18, 118, 199);width:20px; height: 20px\"></ion-icon>\n    <ion-label style=\"color:rgb(18, 118, 199); \" >Add Customer</ion-label>\n  </div>\n \n\n  <div *ngFor=\"let daata of getCusstomers; index as i\"class=\"cl-center-title\">\n    <ion-item (click)=\"getCustomerDetailInfo(daata , i)\" style=\"margin-left:-20px\">\n      <div style=\"margin-left:30px\">\n       \n    <button style=\"width:35px; height: 35px; border-radius: 50%;margin-right: 15px ; color: #ffffff\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even' \">{{daata.name.charAt(0) | uppercase}}</button>\n      </div>\n      {{daata.name | titlecase}}\n    </ion-item>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.new-background-color {\n  --background: #494747;\n}\n\n.odd {\n  background-color: #f08132;\n}\n\n.even {\n  background-color: #ee38b7;\n}\n\n.cl-center-title {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAtLWJhY2tncm91bmQ6ICM0OTQ3NDc7XG59XG5cbi5vZGR7XG4gIGJhY2tncm91bmQtY29sb3I6I2YwODEzMjtcbn1cbi5ldmVue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCA1NiwgMTgzKTtcbn1cblxuLmNsLWNlbnRlci10aXRsZXtcbiAgbWFyZ2luLXRvcDo1JTtcbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NDc0Nztcbn1cblxuLm9kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDgxMzI7XG59XG5cbi5ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzhiNztcbn1cblxuLmNsLWNlbnRlci10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomePage = class HomePage {
    constructor(menuCntrl, router) {
        this.menuCntrl = menuCntrl;
        this.router = router;
        this.getCusstomers = [
            {
                "name": "llllllllll jjjjjjjjjjj",
                "mobile": "",
                "amount": "2500",
                "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
                "email": "lllll@gmail.com",
            },
            {
                "name": "smitaaa belhekar",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar",
                "email": "smitaaa@gmail.com",
            },
            {
                "name": "asmita belhekar",
                "mobile": "9527902622",
                "amount": "5000",
                "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
                "email": "asmita@gmail.com",
            },
            {
                "name": "sejal belhekar",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune",
                "email": "",
            },
            {
                "name": "priya abc",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Mumbai",
                "email": "priya@gmail.com",
            },
            {
                "name": "asmi belhekar",
                "mobile": "9527902622",
                "amount": "1000",
                "address": "Ahmednagar",
                "email": "asmi@gmail.com",
            },
            {
                "name": "kiran kokate",
                "mobile": "9096467346",
                "amount": "5000",
                "address": "Pune",
                "email": "kiran@gmail.com",
            },
            {
                "name": "ccccc dddd",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune",
                "email": "ccccc@gmail.com",
            },
            {
                "name": "dhananjay raut",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Mumbai",
                "email": "dhananjay@gmail.com",
            },
            {
                "name": "cccc ppppp",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar",
                "email": "ccc@gmail.com",
            },
            {
                "name": "cccc hhhhhhh ",
                "mobile": "1234567890",
                "amount": "5000",
                "address": "Pune",
                "email": "chchch@gmail.com",
            },
            {
                "name": "aaaaaaa zzzz",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "",
                "email": "azazazaz@gmail.com",
            },
            {
                "name": "smitaaa belhekar",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar",
                "email": "smitaaa@gmail.com",
            },
            {
                "name": "aaaaaaaa   zzzz",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune",
                "email": "azazazaz@gmail.com",
            },
            {
                "name": "smitaaa belhekar",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar",
                "email": "smitaaa@gmail.com",
            },
            {
                "name": "asmita belhekar",
                "mobile": "9527902622",
                "amount": "5000",
                "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
                "email": "asmita@gmail.com",
            },
            {
                "name": "sejal belhekar",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune",
                "email": "",
            },
            {
                "name": "priya abc",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Mumbai",
                "email": "priya@gmail.com",
            },
            {
                "name": "asmi belhekar",
                "mobile": "9527902622",
                "amount": "1000",
                "address": "Ahmednagar",
                "email": "asmi@gmail.com",
            },
            {
                "name": "kiran kokate",
                "mobile": "9096467346",
                "amount": "5000",
                "address": "Pune",
                "email": "kiran@gmail.com",
            },
            {
                "name": "ccccc dddd",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune",
                "email": "ccccc@gmail.com",
            }
        ];
        this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));
        this.menuCntrl.enable(true);
    }
    addCustomer() {
        this.router.navigate(['addcustomer']);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map