(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<link href=\"https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap\" rel=\"stylesheet\">\n\n<div class=\"login-container\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\"> \n    <div class=\"login-container-filds\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"login-container-filds-signin-logo\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n            \n        </div>\n        <div class=\"login-container-filds-number-password\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n            <div class=\"login-container-filds-signin\"> \n                <p>Sign In</p>\n            </div>\n            <div class=\"login-container-filds-logo\"> \n          <img src=\"../../../assets/icons8-user-male-64.png\" alt=\"\">\n            </div>\n            <mat-form-field>\n                <input matInput placeholder=Number>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput placeholder=\"password\">\n            </mat-form-field>\n \n            <div class=\"login-container-filds-number-password-lebals\"  fxLayout=\"column\" fxLayout.xs=\"\"></div>\n\n            <button mat-raised-button (click)=\"nextPage()\" id=\"login-button\" >Login</button>\n            \n\n</div>\n\n\n\n\n\n<!-- \n<div class=\"\"> \n            \n    <mat-form-field floatLabel=\"auto\"  >\n        <mat-label >Phone Number</mat-label>\n        <input matInput required name=\"phone\" [(ngModel)]=\"loginModel.phone\" #phone=\"ngModel\" minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]+\" placeholder=\"949\">\n     <mat-error>\n         <div *ngIf=\"fname.invalid && (fname.dirty  || fname.touched)\">\n         \n             Email Requird\n      </div>\n     </mat-error>\n\n\n     \n    </mat-form-field>\n \n</div>\n</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n -->\n\n\n\n\n\n<!-- \n<ion-content>\n<ion-button (click)=\"nextPage()\" align=\"center\">Login</ion-button>\n</ion-content> -->\n\n\n\n\n\n\n\n<!-- \n<div class=\"login-container\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center center\">\n   \n<div class=\"login-container-filds\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\">\n  \n <div class=\"login-container-title\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\" >\n  \n    <p>Login</p>\n  \n </div>\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\" >\n       <mat-label >Phone Number</mat-label>\n       <input matInput required name=\"phone\" [(ngModel)]=\"loginModel.phone\" #phone=\"ngModel\" minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]+\" placeholder=\"949\">\n    <mat-error>\n        <div *ngIf=\"fname.invalid && (fname.dirty  || fname.touched)\">\n        \n            Email Requird\n     </div>\n    </mat-error>\n\n\n\n   </mat-form-field>\n\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\" >\n    <mat-label>Password</mat-label>\n    <input matInput required name=\"password\" [(ngModel)]=\"loginModel.password\" #phone=\"ngModel\" minlength=\"8\" type=\"password\" >\n    <mat-error>\n        <div *ngIf=\"fname.invalid && (fname.dirty  || fname.touched)\">\n\n            Email Requird\n     </div>\n    </mat-error>\n</mat-form-field>\n<button mat-raised-button (click)=\"nextPage()\">Login</button>\n    \n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-content>\n<ion-button (click)=\"nextPage()\" align=\"center\">Login</ion-button>\n</ion-content> -->\n"

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginPageRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  width: 100%;\n  height: 100%;\n  background-image: -gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n}\n\n.login-container-filds {\n  width: 70%;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#37ecba), to(#72afd3));\n  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);\n}\n\n.login-container-filds-signin {\n  padding-left: 50px;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#37ecba), to(#72afd3));\n  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);\n  padding-right: 50px;\n  position: relative;\n  bottom: 25px;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#209cff), to(#68e0cf));\n  background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);\n}\n\n.login-container-filds-logo {\n  width: 130px;\n  height: 150px;\n  padding: 30px;\n  border-radius: 70px;\n  background-color: white;\n}\n\n.login-container-filds-number-password-lebals {\n  width: 100%;\n}\n\n.login-container-filds-number-password {\n  width: 100%;\n  height: 65%;\n}\n\n#login-button {\n  margin-top: 20 px;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7QUNBSjs7QURFQTtFQUVJLFVBQUE7RUFFQSw2RkFBQTtFQUFBLG1FQUFBO0FDREo7O0FEUUE7RUFDQSxrQkFBQTtFQUNJLDZGQUFBO0VBQUEsbUVBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZGQUFBO0VBQUEsbUVBQUE7QUNOSjs7QURVQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBR0EsdUJBQUE7QUNWSjs7QURnQkE7RUFDSSxXQUFBO0FDYko7O0FEd0JBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNyQko7O0FEeUJBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9naW4tY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgIC1ncmFkaWVudCgxMzVkZWcsICNmNWY3ZmEgMCUsICNjM2NmZTIgMTAwJSk7XG59XG4ubG9naW4tY29udGFpbmVyLWZpbGRze1xuICAgIC8vIGhlaWdodDogNjAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzM3ZWNiYSAwJSwgIzcyYWZkMyAxMDAlKTtcbn1cbi8vIC5sb2dpbi1jb250YWluZXItZmlsZHMtc2lnbmluLWxvZ297XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAzNSU7XG4vLyAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4vLyB9XG4ubG9naW4tY29udGFpbmVyLWZpbGRzLXNpZ25pbntcbnBhZGRpbmctbGVmdDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzdlY2JhIDAlLCAjNzJhZmQzIDEwMCUpO1xuICAgIHBhZGRpbmctcmlnaHQ6NTBweCA7ICAgIFxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDI1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzIwOWNmZiAwJSwgIzY4ZTBjZiAxMDAlKTtcbiAgICBcblxufVxuLmxvZ2luLWNvbnRhaW5lci1maWxkcy1sb2dve1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gdG9wOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG59XG4vLyAubG9naW4tY29udGFpbmVyLWZpbGRzLWxvZ28gaW1ne1xuXG4vLyB9XG4ubG9naW4tY29udGFpbmVyLWZpbGRzLW51bWJlci1wYXNzd29yZC1sZWJhbHN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICBcbn1cblxuXG5cblxuXG5cblxuXG4ubG9naW4tY29udGFpbmVyLWZpbGRzLW51bWJlci1wYXNzd29yZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2xvZ2luLWJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAyMCAgcHg7XG4gICAgd2lkdGg6IDUwJTtcbn0iLCIubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjdmYSAwJSwgI2MzY2ZlMiAxMDAlKTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lci1maWxkcyB7XG4gIHdpZHRoOiA3MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMzN2VjYmEgMCUsICM3MmFmZDMgMTAwJSk7XG59XG5cbi5sb2dpbi1jb250YWluZXItZmlsZHMtc2lnbmluIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzdlY2JhIDAlLCAjNzJhZmQzIDEwMCUpO1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzIwOWNmZiAwJSwgIzY4ZTBjZiAxMDAlKTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lci1maWxkcy1sb2dvIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lci1maWxkcy1udW1iZXItcGFzc3dvcmQtbGViYWxzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1jb250YWluZXItZmlsZHMtbnVtYmVyLXBhc3N3b3JkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjUlO1xufVxuXG4jbG9naW4tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjAgcHg7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let LoginPage = class LoginPage {
    constructor(router, menuController) {
        this.router = router;
        this.menuController = menuController;
        this.loginModel = {};
    }
    ngOnInit() {
    }
    nextPage() {
        this.router.navigate(['/home']);
    }
    ionViewWillEnter() {
        this.menuController.enable(false);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map