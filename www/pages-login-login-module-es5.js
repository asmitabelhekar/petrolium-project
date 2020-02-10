(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap\" rel=\"stylesheet\">\n\n<div class=\"login-container\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center center\">\n   \n<div class=\"login-container-filds\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\">\n  \n <div class=\"login-container-title\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\" >\n  \n    <p>Login</p>\n  \n </div>\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\" class=\"\" >\n\n       <mat-label>\n    <mat-icon>call</mat-icon>\n           \n        Phone Number</mat-label>\n       <input matInput required name=\"phone\" [(ngModel)]=\"loginModel.phone\" #phone=\"ngModel\" minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]+\" placeholder=\"949\">\n    <mat-error>\n        <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n            Enter Valid Phone Number\n        </div>\n    </mat-error>\n\n\n\n   </mat-form-field>\n\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\" >\n    <mat-label>\n        <mat-icon>lock</mat-icon>\n        Password</mat-label>\n    <input matInput required name=\"password\" [(ngModel)]=\"loginModel.password\" #phone=\"ngModel\" minlength=\"8\" type=\"password\" >\n    <mat-error>\n        <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n            Enter Valid password\n        </div>\n    </mat-error>\n</mat-form-field>\n<button mat-raised-button class=\"button_submit\" (click)=\"nextPage()\">Submit</button>\n    \n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-content>\n<ion-button (click)=\"nextPage()\" align=\"center\">Login</ion-button>\n</ion-content> -->\n\n\n\n\n\n\n\n<!-- \n<div class=\"login-container\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center center\">\n   \n<div class=\"login-container-filds\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\">\n  \n <div class=\"login-container-title\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\" center\" >\n  \n    <p>Login</p>\n  \n </div>\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\" >\n       <mat-label >Phone Number</mat-label>\n       <input matInput required name=\"phone\" [(ngModel)]=\"loginModel.phone\" #phone=\"ngModel\" minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]+\" placeholder=\"949\">\n    <mat-error>\n        <div *ngIf=\"fname.invalid && (fname.dirty  || fname.touched)\">\n        \n            Email Requird\n     </div>\n    </mat-error>\n\n\n\n   </mat-form-field>\n\n   <mat-form-field floatLabel=\"auto\" appearance=\"outline\" >\n    <mat-label>Password</mat-label>\n    <input matInput required name=\"password\" [(ngModel)]=\"loginModel.password\" #phone=\"ngModel\" minlength=\"8\" type=\"password\" >\n    <mat-error>\n        <div *ngIf=\"fname.invalid && (fname.dirty  || fname.touched)\">\n\n            Email Requird\n     </div>\n    </mat-error>\n</mat-form-field>\n<button mat-raised-button (click)=\"nextPage()\">Login</button>\n    \n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-content>\n<ion-button (click)=\"nextPage()\" align=\"center\">Login</ion-button>\n</ion-content> --> -->\n"

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

module.exports = ".login-container-title {\n  font-size: 44px;\n}\n\n.login-container {\n  width: 100%;\n  height: 100%;\n  font-family: \"Julius Sans One\", sans-serif;\n}\n\n.login-container-filds {\n  margin-top: 15%;\n}\n\n.button_submit {\n  font-family: \"Julius Sans One\", sans-serif;\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGVBQUE7QUNGSjs7QURNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUNISjs7QURRQTtFQUNJLGVBQUE7QUNMSjs7QURPQTtFQUNJLDBDQUFBO0VBRUEsVUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLmxvZ2luLWNvbnRhaW5lci10aXRsZXtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gXG4gICAgXG59XG4ubG9naW4tY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG5cblxuXG59XG4ubG9naW4tY29udGFpbmVyLWZpbGRze1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbn1cbi5idXR0b25fc3VibWl0e1xuICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcblxuICAgIHdpZHRoOiA2MCU7XG59IiwiLmxvZ2luLWNvbnRhaW5lci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDRweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkp1bGl1cyBTYW5zIE9uZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubG9naW4tY29udGFpbmVyLWZpbGRzIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG4uYnV0dG9uX3N1Ym1pdCB7XG4gIGZvbnQtZmFtaWx5OiBcIkp1bGl1cyBTYW5zIE9uZVwiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogNjAlO1xufSJdfQ== */"

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
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuController.enable(false);
    };
    LoginPage.prototype.nextPage = function () {
        this.router.navigate(['/home']);
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