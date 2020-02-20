(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"MainLoginClass\" fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top:20%\">\n\n  <!-- <h3 class=\"TitleClass\">KHAMKAR PETROLIUM</h3> -->\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <img src=\"../../../assets/logoapp.png\" style=\"width:100px;height:100px; border-radius: 50%;\"/>\n</div>\n  <div class=\"LoginFormClass\">\n\n      <form name=\"entryform\" style=\"width: 100%;\" #f=\"ngForm\" novalidate>\n\n\n          <mat-form-field style=\"width:98%; margin-top:10%\">\n              <input matInput placeholder=\"Phone Number\" (input)=\"valueEnter()\" type=\"tel\" id=\"mobile\"\n                name=\"mobile\" class=\"form-control\" required minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"loginModel.mobile\"\n                #mobile=\"ngModel\" />\n              <mat-error>\n                <div class=\"form-group\">\n                  <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                    <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                      Wrong Phone Number\n                    </div>\n                     <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                      Phone Number must be at least 10 digits long.\n                    </div>\n                    <!--<div *ngIf=\"mobile.errors.maxlength\">c\n                      Mobile Number must be 10 digits long.\n                    </div> -->\n  \n                  </div>\n                </div>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field class=\"FullWidth\">\n                <input matInput placeholder=\"Password\" (input)=\"valueEnter()\" [type]=\"hide ? 'password' : 'text'\" id=\"password\"\n                  name=\"password\" class=\"form-control\" required  [(ngModel)]=\"loginModel.password\"\n                  #password=\"ngModel\" />\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                      <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                        Please Enter Password\n                      </div>\n                      \n                     \n    \n                    </div>\n                  </div>\n                </mat-error>\n              </mat-form-field>\n              <div *ngIf=\"is_error\" class=\"LoginError\">\n                  {{message}}\n                </div>\n\n\n              <div class=\"LoginClass\">\n                  <button mat-raised-button [disabled]=\"mobile.invalid || password.invalid\" class=\"LogoutBtn\" (click)=\"Login(loginModel)\">Login</button>\n\n              </div>\n\n\n        </form>\n\n  </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <link href=\"https://fonts.googleapis.com/css?family=Khula&display=swap\" rel=\"stylesheet\">\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xl=\"row\" class=\"registration-main\">\n\n  <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xs=\"column\" class=\"registration-main-matcard\">\n    <mat-card-header>\n      <mat-card-title>\n        <P class=\"login-name-p-tag\"> LOGIN</P>\n      </mat-card-title>\n\n    </mat-card-header>\n\n    <mat-card-content fxLayout=\"column\" fxLayoutGap=\"20px\" class=\"registration-form\" fxLayoutAlign=\"center center\" style=\"width:80%; margin-top:10px\">\n\n      <div class=\"registration-form-img\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <img src=\"../../../assets/petrol2.svg\" alt=\"\">\n      </div>\n\n      <mat-form-field style=\"width:100%\">\n\n        <input matInput required placeholder=\"Phone Number\" class=\"form-control\" name=\"mobile\"\n          [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" minlength=\"10\" maxlength=10 pattern=\"[0-9]+\">\n        <mat-error>\n          <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n            Phone Number Required\n          </div>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field style=\"width:100%\">\n\n        <input type=\"password\" matInput required placeholder=\"password\" class=\"form-control\" name=\"password\"\n          [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" pattern=\"[a-zA-z]+$\">\n        <mat-error>\n          <div *ngIf=\"password.invalid && (password.dirty  || password.touched)\">\n            Password is Required\n          </div>\n        </mat-error>\n\n      </mat-form-field>\n    </mat-card-content>\n\n\n    <button (click)=\"login(loginModel)\" id=\"button-of-submit\"> Submit</button>\n\n\n\n  </mat-card> -->"

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
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
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

module.exports = ".registration-main {\n  height: 100%;\n  width: 100%;\n  background: #3E5151;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#DECBA4), to(#3E5151));\n  background: linear-gradient(to right, #DECBA4, #3E5151);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nmat-card {\n  min-width: 90%;\n}\n\n.registration-form-img {\n  width: 110px;\n  height: 110px;\n  border: 3px solid black;\n  border-radius: 60px;\n  margin: 0px;\n}\n\n.registration-form-img img {\n  width: 70%;\n  height: 70%;\n}\n\n#button-of-submit {\n  width: 30%;\n  margin-top: 10px;\n  padding: 20px;\n  border-radius: 5px;\n  background: #00B4DB;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#0083B0), to(#00B4DB));\n  background: linear-gradient(to right, #0083B0, #00B4DB);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.login-name-p-tag {\n  font-size: 25px;\n  word-spacing: 2.5;\n  font-family: \"Khula\", sans-serif;\n  padding: 0px;\n  margin: 0px;\n}\n\n.form-control {\n  margin: 0px;\n  padding: 0px;\n}\n\n.img-of-petrolium {\n  width: 90%;\n  border: 1px solid black;\n}\n\n.MainLoginClass {\n  width: 100%;\n  padding: 40px 23px 0 23px;\n  display: block;\n  text-align: center;\n}\n\n.TitleClass {\n  height: 28px;\n  color: #D73C56;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 28px;\n  text-align: center;\n}\n\n.LoginFormClass {\n  width: 100%;\n  margin: 30px 0 0 0;\n}\n\n.FullWidth {\n  width: 98%;\n  margin-top: 20px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.ForgotPassword {\n  height: 16px;\n  color: #000000;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  margin: 0 0 10px 0;\n}\n\n.Sales {\n  opacity: 0.66;\n  color: #BBBBBB;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  letter-spacing: 0.18px;\n  line-height: 14px;\n}\n\n.disabled {\n  background-color: rgba(194, 194, 194, 0.87);\n  box-shadow: 0 4px 8px 2px #FFF3E0, 0 2px 2px 0 #FFF3E0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFBc0IsOEJBQUE7RUFDMEMsK0JBQUE7RUFDbEUscUZBQUE7RUFBQSx1REFBQTtFQUF5RCxxRUFBQTtBQ0V6RDs7QURFRTtFQUVBLGNBQUE7QUNBRjs7QURJRTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0MsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNEUDs7QURHRTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQU47O0FER0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUFzQiw4QkFBQTtFQUM0QywrQkFBQTtFQUNsRSxxRkFBQTtFQUFBLHVEQUFBO0VBQXlELHFFQUFBO0FDRzdEOztBREFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQ0dKOztBRENBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QURKQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTUY7O0FESEE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNRRjs7QUROQTtFQUNFLDJDQUFBO0VBQ0Esc0RBQUE7QUNTRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RyYXRpb24tbWFpbntcbiBcbiAgaGVpZ2h0OiAxMDAlOyAgIFxuICB3aWR0aDogMTAwJTtcbiBcbiAgYmFja2dyb3VuZDogIzNFNTE1MTsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREVDQkE0LCAjM0U1MTUxKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERUNCQTQsICMzRTUxNTEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG5cblxuICB9XG4gIG1hdC1jYXJke1xuICAgIFxuICBtaW4td2lkdGg6IDkwJTtcblxuICBcbiAgfVxuICAucmVnaXN0cmF0aW9uLWZvcm0taW1ne1xuICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAgICBtYXJnaW46IDBweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uLWZvcm0taW1nIGltZ3tcbiAgICAgIHdpZHRoOjcwJTtcbiAgICAgIGhlaWdodDogNzAlO1xuXG4gIH1cbiNidXR0b24tb2Ytc3VibWl0e1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOjIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwMEI0REI7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgXG59XG4ubG9naW4tbmFtZS1wLXRhZ3tcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3b3JkLXNwYWNpbmc6IDIuNTtcbiAgZm9udC1mYW1pbHk6ICdLaHVsYScsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG5cbn1cbi5mb3JtLWNvbnRyb2x7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG5cbn1cbi5pbWctb2YtcGV0cm9saXVte1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cblxuLk1haW5Mb2dpbkNsYXNze1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDBweCAyM3B4IDAgMjNweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5UaXRsZUNsYXNze1xuICBoZWlnaHQ6IDI4cHg7XHRcbiAgY29sb3I6ICNENzNDNTY7XHRcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgZm9udC1zaXplOiAxLjVyZW07XHRcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHRcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHRcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLkxvZ2luRm9ybUNsYXNze1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuLkZ1bGxXaWR0aHtcbiAgd2lkdGg6OTglO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLkxvZ2luRXJyb3J7XG4gIGNvbG9yOiAjRkY2NDY0O1x0XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gIGZvbnQtc2l6ZTogMTJweDtcdFxuICBmb250LXdlaWdodDogNTAwO1x0XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcdFxuICBsaW5lLWhlaWdodDogMTZweDtcdFxuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5Mb2dvdXRCdG57XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHRcbiAgaGVpZ2h0OiA0OHB4O1x0XG4gIHdpZHRoOiAxMzFweDtcdFxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1x0XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgY29sb3I6ICNGRkZGRkY7XHRcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgZm9udC1zaXplOiAxNXB4O1x0XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1x0XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAvLyBib3gtc2hhZG93OiAwIDRweCA4cHggMnB4ICNGRkYzRTAsIDAgMnB4IDJweCAwICNGRkYzRTA7XG59XG4uTG9naW5DbGFzc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLkZvcmdvdFBhc3N3b3JkIHtcdFxuICBoZWlnaHQ6IDE2cHg7XHRcbiAgY29sb3I6ICMwMDAwMDA7XHRcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgZm9udC1zaXplOiAxMnB4O1x0XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHRcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1x0XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4uU2FsZXN7XG4gIG9wYWNpdHk6IDAuNjY7XHRcbiAgY29sb3I6ICNCQkJCQkI7XHRcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgZm9udC1zaXplOiAxMnB4O1x0XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4cHg7XHRcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG4uZGlzYWJsZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LDE5NCwxOTQsMC44Nyk7XHRcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDJweCAjRkZGM0UwLCAwIDJweCAycHggMCAjRkZGM0UwO1xufSIsIi5yZWdpc3RyYXRpb24tbWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzRTUxNTE7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERUNCQTQsICMzRTUxNTEpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERUNCQTQsICMzRTUxNTEpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbm1hdC1jYXJkIHtcbiAgbWluLXdpZHRoOiA5MCU7XG59XG5cbi5yZWdpc3RyYXRpb24tZm9ybS1pbWcge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJlZ2lzdHJhdGlvbi1mb3JtLWltZyBpbWcge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cblxuI2J1dHRvbi1vZi1zdWJtaXQge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwMEI0REI7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbi5sb2dpbi1uYW1lLXAtdGFnIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3b3JkLXNwYWNpbmc6IDIuNTtcbiAgZm9udC1mYW1pbHk6IFwiS2h1bGFcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pbWctb2YtcGV0cm9saXVtIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5NYWluTG9naW5DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4IDIzcHggMCAyM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uVGl0bGVDbGFzcyB7XG4gIGhlaWdodDogMjhweDtcbiAgY29sb3I6ICNENzNDNTY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5Mb2dpbkZvcm1DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDMwcHggMCAwIDA7XG59XG5cbi5GdWxsV2lkdGgge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uTG9naW5FcnJvciB7XG4gIGNvbG9yOiAjRkY2NDY0O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLkxvZ291dEJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEzMXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLkxvZ2luQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5Gb3Jnb3RQYXNzd29yZCB7XG4gIGhlaWdodDogMTZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLlNhbGVzIHtcbiAgb3BhY2l0eTogMC42NjtcbiAgY29sb3I6ICNCQkJCQkI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTk0LCAxOTQsIDAuODcpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMnB4ICNGRkYzRTAsIDAgMnB4IDJweCAwICNGRkYzRTA7XG59Il19 */"

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
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(router, menuController, preloader, apiCall, events, loader, toastcontroller) {
        this.router = router;
        this.menuController = menuController;
        this.preloader = preloader;
        this.apiCall = apiCall;
        this.events = events;
        this.loader = loader;
        this.toastcontroller = toastcontroller;
        this.loginModel = {};
        this.userModel = {};
        this.hide = true;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.Login = function (data) {
        var _this = this;
        this.loader.presentLoading();
        var send_date = {};
        send_date['mobile'] = this.loginModel['mobile'];
        send_date['password'] = this.loginModel['password'];
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "users/login";
        this.apiCall.postWAu(url, send_date).subscribe(function (MyResponse) {
            localStorage.setItem('userRole', MyResponse['result']['userRole']);
            _this.userRole = MyResponse['result']['userRole'];
            localStorage.setItem('login', 'yes');
            _this.events.publish('Event-SideMenu');
            if (_this.userRole == '0') {
                _this.router.navigate(['/dataentrycredit']);
            }
            else if (_this.userRole == '1') {
                _this.router.navigate(['/home']);
            }
            else {
                _this.router.navigate(['/home']);
            }
            var msg = MyResponse['message'];
            _this.presentToast("Login Successfully");
            _this.loader.stopLoading();
        }, function (error) {
            _this.loader.stopLoading();
            _this.presentToast("Please try again");
            console.log(error.error.message);
        });
        this.statusCheck = localStorage.getItem('loginStatus');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuController.enable(false);
    };
    LoginPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastcontroller.create({
                            message: message,
                            duration: 4000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.valueEnter = function () {
        this.is_error = 0;
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this.loginModel = {};
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_4__["LoaderserviceService"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__["ApicallService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_4__["LoaderserviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_4__["LoaderserviceService"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__["ApicallService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_4__["LoaderserviceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/service/apicall/apicall.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/apicall/apicall.service.ts ***!
  \****************************************************/
/*! exports provided: ApicallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicallService", function() { return ApicallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApicallService = /** @class */ (function () {
    function ApicallService(http) {
        this.http = http;
    }
    ApicallService.prototype.postWAu = function (url, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.post(url, data, httpOptions);
    };
    ApicallService.prototype.get = function (url) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.get(url, httpOptions);
    };
    ApicallService.prototype.put = function (url, data) {
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put(url, data, httpOptions);
    };
    ApicallService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApicallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApicallService);
    return ApicallService;
}());



/***/ }),

/***/ "./src/app/service/loader/loaderservice.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/loader/loaderservice.service.ts ***!
  \*********************************************************/
/*! exports provided: LoaderserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderserviceService", function() { return LoaderserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoaderserviceService = /** @class */ (function () {
    //   loadingStatus = new Subject<boolean>();
    //   loaderTop = new Subject<boolean>();
    //   blockingLoader = new Subject<boolean>();
    //   blockingLoaderAuth = new Subject<boolean>();
    //   bgGrey = new Subject<boolean>();
    //   blockingLoaderFlag = false;
    //   loaderTopFlag = false;
    //   private subject = new Subject<any>();
    //   showBlockingLoader(){
    //     console.log("load");
    //     this.blockingLoader.next(true);
    //     this.blockingLoaderFlag = true;
    //   }
    //   hideBlockingLoader(){
    //     this.blockingLoader.next(false);
    //     this.blockingLoaderFlag = false;
    //   }
    //   showBlockingLoaderAuth(){
    //     this.blockingLoaderAuth.next(true);
    //   }
    //   hideBlockingLoaderAuth(){
    //     this.blockingLoaderAuth.next(false);
    //   }
    //   sendMessage(message) {
    //     // console.log("name",message);
    //     let set_data = {};
    //     set_data['message'] = message;
    //     this.subject.next(set_data);
    // }
    // getMessage(): Observable<any> {
    //   return this.subject.asObservable();
    // }
    function LoaderserviceService(loadingController) {
        this.loadingController = loadingController;
    }
    LoaderserviceService.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        setTimeout(function () {
                            loading.dismiss();
                        });
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoaderserviceService.prototype.stopLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadingController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    LoaderserviceService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    LoaderserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], LoaderserviceService);
    return LoaderserviceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map