(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<link href=\"https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap\" rel=\"stylesheet\">\n\n<div class=\"login-container\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center center\">\n\n    \n   \n<div class=\"login-container-filds\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\">\n  \n <div class=\"login-container-title\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\" >\n  \n    <p>Login</p>\n  \n </div>\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\"  >\n\n       <mat-label  class=\" login-container-number-password\">\n    <mat-icon >call</mat-icon>\n           \n        Phone Number</mat-label>\n       <input matInput required name=\"phone\" [(ngModel)]=\"loginModel.phone\" #phone=\"ngModel\" minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]+\" placeholder=\"949\" class=\" login-container-number-password\">\n    <mat-error>\n        <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n            Enter Valid Phone Number\n        </div>\n    </mat-error>\n\n\n\n   </mat-form-field>\n\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\" color=\"warm\" >\n    <mat-label class=\" login-container-number-password\" >\n        <mat-icon>lock</mat-icon>\n        Password</mat-label>\n    <input matInput required name=\"password\" [(ngModel)]=\"loginModel.password\" #phone=\"ngModel\" minlength=\"8\" type=\"password\" class=\" login-container-number-password\" >\n    <mat-error>\n        <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n            Enter Valid password\n        </div>\n    </mat-error>\n</mat-form-field>\n<button mat-raised-button class=\"button_submit\" (click)=\"nextPage()\" class=\"button_submit\" >Submit</button>\n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- \n<ion-content>\n<ion-button (click)=\"nextPage()\" align=\"center\">Login</ion-button>\n</ion-content> -->\n\n\n\n\n\n\n\n<!-- \n<div class=\"login-container\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center center\">\n   \n<div class=\"login-container-filds\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\">\n  \n <div class=\"login-container-title\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\" >\n  \n    <p>Login</p>\n  \n </div>\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\" >\n       <mat-label >Phone Number</mat-label>\n       <input matInput required name=\"phone\" [(ngModel)]=\"loginModel.phone\" #phone=\"ngModel\" minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]+\" placeholder=\"949\">\n    <mat-error>\n        <div *ngIf=\"fname.invalid && (fname.dirty  || fname.touched)\">\n        \n            Email Requird\n     </div>\n    </mat-error>\n\n\n\n   </mat-form-field>\n\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\" >\n    <mat-label>Password</mat-label>\n    <input matInput required name=\"password\" [(ngModel)]=\"loginModel.password\" #phone=\"ngModel\" minlength=\"8\" type=\"password\" >\n    <mat-error>\n        <div *ngIf=\"fname.invalid && (fname.dirty  || fname.touched)\">\n\n            Email Requird\n     </div>\n    </mat-error>\n</mat-form-field>\n<button mat-raised-button (click)=\"nextPage()\">Login</button>\n    \n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-content>\n<ion-button (click)=\"nextPage()\" align=\"center\">Login</ion-button>\n</ion-content> -->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");









var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container-title {\n  font-size: 44px;\n  color: white;\n}\n\n.login-container {\n  width: 100%;\n  height: 100%;\n  font-family: \"Julius Sans One\", sans-serif;\n  background-color: #485461;\n  background-color: #2f4353;\n  background-image: linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);\n}\n\n.login-container-filds {\n  margin: auto auto;\n  width: 70%;\n  padding-bottom: 30px;\n  border: 1px solid #c7c4d3;\n  background-color: #171724;\n  opacity: 0.7;\n}\n\n.button_submit {\n  font-family: \"Julius Sans One\", sans-serif;\n  width: 50%;\n}\n\n.login-container-number-password {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDRCxZQUFBO0FDQ0g7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUVBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtFQUNILFVBQUE7QUNDRDs7QURDQTtFQUNJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXItdGl0bGV7XG4gICAgZm9udC1zaXplOiA0NHB4O1xuICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NTQ2MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY0MzUzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyZjQzNTMgMCUsICNkMmNjYzQgNzQlKTtcbn1cbi5sb2dpbi1jb250YWluZXItZmlsZHN7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTksIDE5NiwgMjExKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDIzLCAzNik7XG4gICAgb3BhY2l0eTogMC43O1xuICBcbn1cbi5idXR0b25fc3VibWl0e1xuICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiB3aWR0aDogNTAlO1xufVxuLmxvZ2luLWNvbnRhaW5lci1udW1iZXItcGFzc3dvcmR7XG4gICAgY29sb3I6d2hpdGU7XG4gIFxufSIsIi5sb2dpbi1jb250YWluZXItdGl0bGUge1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkp1bGl1cyBTYW5zIE9uZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg1NDYxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY0MzUzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmY0MzUzIDAlLCAjZDJjY2M0IDc0JSk7XG59XG5cbi5sb2dpbi1jb250YWluZXItZmlsZHMge1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjN2M0ZDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MjQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmJ1dHRvbl9zdWJtaXQge1xuICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIiwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lci1udW1iZXItcGFzc3dvcmQge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var LoginPage = /** @class */ (function () {
    function LoginPage(router, menuController) {
        this.router = router;
        this.menuController = menuController;
        this.loginModel = {};
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.nextPage = function () {
        this.router.navigate(['/home']);
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuController.enable(false);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map