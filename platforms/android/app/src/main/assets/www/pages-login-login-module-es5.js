(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"MainLoginClass\" fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top:20%\">\n\n  <!-- <h3 class=\"TitleClass\">KHAMKAR PETROLIUM</h3> -->\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <img src=\"../../../assets/logoapp.png\" style=\"width:100px;height:100px; border-radius: 50%;\"/>\n</div>\n  <div class=\"LoginFormClass\">\n\n      <form name=\"entryform\" style=\"width: 100%;\" #f=\"ngForm\" novalidate>\n\n\n          <mat-form-field style=\"width:98%; margin-top:10%\">\n              <input matInput placeholder=\"Phone Number\" (input)=\"valueEnter()\" type=\"tel\" id=\"mobile\"\n                name=\"mobile\" class=\"form-control\" required minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"loginModel.mobile\"\n                #mobile=\"ngModel\" />\n              <mat-error>\n                <div class=\"form-group\">\n                  <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                    <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                      Wrong Phone Number\n                    </div>\n                     <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                      Phone Number must be at least 10 digits long.\n                    </div>\n                    <!--<div *ngIf=\"mobile.errors.maxlength\">\n                      Mobile Number must be 10 digits long.\n                    </div> -->\n  \n                  </div>\n                </div>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field class=\"FullWidth\">\n                <input matInput placeholder=\"Password\" (input)=\"valueEnter()\" [type]=\"hide ? 'password' : 'text'\" id=\"password\"\n                  name=\"password\" class=\"form-control\" required  [(ngModel)]=\"loginModel.password\"\n                  #password=\"ngModel\" />\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                      <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                        Please Enter Password\n                      </div>\n                      \n                     \n    \n                    </div>\n                  </div>\n                </mat-error>\n              </mat-form-field>\n              <div *ngIf=\"is_error\" class=\"LoginError\">\n                  {{message}}\n                </div>\n\n\n              <div class=\"LoginClass\">\n                  <button mat-raised-button [disabled]=\"mobile.invalid || password.invalid\" class=\"LogoutBtn\" (click)=\"Login(loginModel)\">Proceed</button>\n\n              </div>\n\n\n        </form>\n\n  </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <link href=\"https://fonts.googleapis.com/css?family=Khula&display=swap\" rel=\"stylesheet\">\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xl=\"row\" class=\"registration-main\">\n\n  <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xs=\"column\" class=\"registration-main-matcard\">\n    <mat-card-header>\n      <mat-card-title>\n        <P class=\"login-name-p-tag\"> LOGIN</P>\n      </mat-card-title>\n\n    </mat-card-header>\n\n    <mat-card-content fxLayout=\"column\" fxLayoutGap=\"20px\" class=\"registration-form\" fxLayoutAlign=\"center center\" style=\"width:80%; margin-top:10px\">\n\n      <div class=\"registration-form-img\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <img src=\"../../../assets/petrol2.svg\" alt=\"\">\n      </div>\n\n      <mat-form-field style=\"width:100%\">\n\n        <input matInput required placeholder=\"Phone Number\" class=\"form-control\" name=\"mobile\"\n          [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" minlength=\"10\" maxlength=10 pattern=\"[0-9]+\">\n        <mat-error>\n          <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n            Phone Number Required\n          </div>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field style=\"width:100%\">\n\n        <input type=\"password\" matInput required placeholder=\"password\" class=\"form-control\" name=\"password\"\n          [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" pattern=\"[a-zA-z]+$\">\n        <mat-error>\n          <div *ngIf=\"password.invalid && (password.dirty  || password.touched)\">\n            Password is Required\n          </div>\n        </mat-error>\n\n      </mat-form-field>\n    </mat-card-content>\n\n\n    <button (click)=\"login(loginModel)\" id=\"button-of-submit\"> Submit</button>\n\n\n\n  </mat-card> -->"

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

module.exports = ".registration-main {\n  height: 100%;\n  width: 100%;\n  background: #3E5151;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#DECBA4), to(#3E5151));\n  background: linear-gradient(to right, #DECBA4, #3E5151);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nmat-card {\n  min-width: 90%;\n}\n\n.registration-form-img {\n  width: 110px;\n  height: 110px;\n  border: 3px solid black;\n  border-radius: 60px;\n  margin: 0px;\n}\n\n.registration-form-img img {\n  width: 70%;\n  height: 70%;\n}\n\n#button-of-submit {\n  width: 30%;\n  margin-top: 10px;\n  padding: 20px;\n  border-radius: 5px;\n  background: #00B4DB;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#0083B0), to(#00B4DB));\n  background: linear-gradient(to right, #0083B0, #00B4DB);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.login-name-p-tag {\n  font-size: 25px;\n  word-spacing: 2.5;\n  font-family: \"Khula\", sans-serif;\n  padding: 0px;\n  margin: 0px;\n}\n\n.form-control {\n  margin: 0px;\n  padding: 0px;\n}\n\n.img-of-petrolium {\n  width: 90%;\n  border: 1px solid black;\n}\n\n.MainLoginClass {\n  width: 100%;\n  padding: 40px 23px 0 23px;\n  display: block;\n  text-align: center;\n}\n\n.TitleClass {\n  height: 28px;\n  color: #D73C56;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 28px;\n  text-align: center;\n}\n\n.LoginFormClass {\n  width: 100%;\n  margin: 30px 0 0 0;\n}\n\n.FullWidth {\n  width: 98%;\n  margin-top: 20px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.ForgotPassword {\n  height: 16px;\n  color: #000000;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  margin: 0 0 10px 0;\n}\n\n.Sales {\n  opacity: 0.66;\n  color: #BBBBBB;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  letter-spacing: 0.18px;\n  line-height: 14px;\n}\n\n.disabled {\n  background-color: rgba(194, 194, 194, 0.87);\n  box-shadow: 0 4px 8px 2px #FFF3E0, 0 2px 2px 0 #FFF3E0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRG93bmxvYWRzL3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQXNCLDhCQUFBO0VBQzBDLCtCQUFBO0VBQ2xFLHFGQUFBO0VBQUEsdURBQUE7RUFBeUQscUVBQUE7QUNFekQ7O0FERUU7RUFFQSxjQUFBO0FDQUY7O0FESUU7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNDLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRFA7O0FER0U7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0FOOztBREdBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFBc0IsOEJBQUE7RUFDNEMsK0JBQUE7RUFDbEUscUZBQUE7RUFBQSx1REFBQTtFQUF5RCxxRUFBQTtBQ0c3RDs7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QURDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTUY7O0FESkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ01GOztBREhBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDUUY7O0FETkE7RUFDRSwyQ0FBQTtFQUNBLHNEQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cmF0aW9uLW1haW57XG4gXG4gIGhlaWdodDogMTAwJTsgICBcbiAgd2lkdGg6IDEwMCU7XG4gXG4gIGJhY2tncm91bmQ6ICMzRTUxNTE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0RFQ0JBNCwgIzNFNTE1MSk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREVDQkE0LCAjM0U1MTUxKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuXG5cbiAgfVxuICBtYXQtY2FyZHtcbiAgICBcbiAgbWluLXdpZHRoOiA5MCU7XG5cbiAgXG4gIH1cbiAgLnJlZ2lzdHJhdGlvbi1mb3JtLWltZ3tcbiAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbi1mb3JtLWltZyBpbWd7XG4gICAgICB3aWR0aDo3MCU7XG4gICAgICBoZWlnaHQ6IDcwJTtcblxuICB9XG4jYnV0dG9uLW9mLXN1Ym1pdHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzoyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDBCNERCOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4M0IwLCAjMDBCNERCKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4M0IwLCAjMDBCNERCKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgIFxufVxuLmxvZ2luLW5hbWUtcC10YWd7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgd29yZC1zcGFjaW5nOiAyLjU7XG4gIGZvbnQtZmFtaWx5OiAnS2h1bGEnLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuXG59XG4uZm9ybS1jb250cm9se1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuXG59XG4uaW1nLW9mLXBldHJvbGl1bXtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi5NYWluTG9naW5DbGFzc3tcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHggMjNweCAwIDIzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uVGl0bGVDbGFzc3tcbiAgaGVpZ2h0OiAyOHB4O1x0XG4gIGNvbG9yOiAjRDczQzU2O1x0XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gIGZvbnQtc2l6ZTogMS41cmVtO1x0XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1x0XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1x0XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5Mb2dpbkZvcm1DbGFzc3tcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cbi5GdWxsV2lkdGh7XG4gIHdpZHRoOjk4JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5Mb2dpbkVycm9ye1xuICBjb2xvcjogI0ZGNjQ2NDtcdFxuICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICBmb250LXNpemU6IDEycHg7XHRcbiAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHRcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHRcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uTG9nb3V0QnRue1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1x0XG4gIGhlaWdodDogNDhweDtcdFxuICB3aWR0aDogMTMxcHg7XHRcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcdFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1x0XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gIGNvbG9yOiAjRkZGRkZGO1x0XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gIGZvbnQtc2l6ZTogMTVweDtcdFxuICBmb250LXdlaWdodDogNTAwO1x0XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcdFxuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgLy8gYm94LXNoYWRvdzogMCA0cHggOHB4IDJweCAjRkZGM0UwLCAwIDJweCAycHggMCAjRkZGM0UwO1xufVxuLkxvZ2luQ2xhc3N7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5Gb3Jnb3RQYXNzd29yZCB7XHRcbiAgaGVpZ2h0OiAxNnB4O1x0XG4gIGNvbG9yOiAjMDAwMDAwO1x0XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gIGZvbnQtc2l6ZTogMTJweDtcdFxuICBmb250LXdlaWdodDogMzAwO1x0XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcdFxuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLlNhbGVze1xuICBvcGFjaXR5OiAwLjY2O1x0XG4gIGNvbG9yOiAjQkJCQkJCO1x0XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gIGZvbnQtc2l6ZTogMTJweDtcdFxuICBsZXR0ZXItc3BhY2luZzogMC4xOHB4O1x0XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuLmRpc2FibGVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwxOTQsMTk0LDAuODcpO1x0XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAycHggI0ZGRjNFMCwgMCAycHggMnB4IDAgI0ZGRjNFMDtcbn0iLCIucmVnaXN0cmF0aW9uLW1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjM0U1MTUxO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREVDQkE0LCAjM0U1MTUxKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREVDQkE0LCAjM0U1MTUxKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG5tYXQtY2FyZCB7XG4gIG1pbi13aWR0aDogOTAlO1xufVxuXG4ucmVnaXN0cmF0aW9uLWZvcm0taW1nIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5yZWdpc3RyYXRpb24tZm9ybS1pbWcgaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbiNidXR0b24tb2Ytc3VibWl0IHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCNERCO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4M0IwLCAjMDBCNERCKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4M0IwLCAjMDBCNERCKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG4ubG9naW4tbmFtZS1wLXRhZyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgd29yZC1zcGFjaW5nOiAyLjU7XG4gIGZvbnQtZmFtaWx5OiBcIktodWxhXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaW1nLW9mLXBldHJvbGl1bSB7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uTWFpbkxvZ2luQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDBweCAyM3B4IDAgMjNweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLlRpdGxlQ2xhc3Mge1xuICBoZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjRDczQzU2O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uTG9naW5Gb3JtQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuXG4uRnVsbFdpZHRoIHtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLkxvZ2luRXJyb3Ige1xuICBjb2xvcjogI0ZGNjQ2NDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5Mb2dvdXRCdG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMzFweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5Mb2dpbkNsYXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uRm9yZ290UGFzc3dvcmQge1xuICBoZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5cbi5TYWxlcyB7XG4gIG9wYWNpdHk6IDAuNjY7XG4gIGNvbG9yOiAjQkJCQkJCO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xOHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbn1cblxuLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE5NCwgMTk0LCAwLjg3KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDJweCAjRkZGM0UwLCAwIDJweCAycHggMCAjRkZGM0UwO1xufSJdfQ== */"

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
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(router, menuController, preloader, apicall, toastcontroller) {
        this.router = router;
        this.menuController = menuController;
        this.preloader = preloader;
        this.apicall = apicall;
        this.toastcontroller = toastcontroller;
        this.loginModel = {};
        this.userModel = {};
        this.hide = true;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.Login = function (data) {
        if (data.mobile == "1234567890" && data.password == "abc") {
            this.router.navigate(['/dataentrycredit']);
            localStorage.setItem('login', 'yes');
            localStorage.setItem('loginStatus', 'dataentry');
        }
        else if (data.mobile == "1234567891" && data.password == "abc") {
            localStorage.setItem('loginStatus', 'manager');
            localStorage.setItem('login', 'yes');
            this.router.navigate(['/home']);
        }
        else {
            localStorage.setItem('login', 'no');
            this.presentToast("Please try again.");
        }
        this.statusCheck = localStorage.getItem('loginStatus');
        // this.preloader.showBlockingLoaderAuth();
        // let operationsUrl = environment.base_url + environment.version + "users/login";
        // this.apicall.postWAu(operationsUrl, data).subscribe(MyResponse => {
        //   console.log(MyResponse);
        //   MyResponse['result']['password'] = data['password'];
        //   this.preloader.hideBlockingLoaderAuth();
        //   this.router.navigate(['home']);
        // }, error => {
        //   this.presentToast("Please try again");
        //   console.log(error)
        // })
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
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_5__["ApicallService"] },
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
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_5__["ApicallService"],
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderserviceService = /** @class */ (function () {
    function LoaderserviceService() {
        this.loadingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderTop = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.blockingLoader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.blockingLoaderAuth = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.bgGrey = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.blockingLoaderFlag = false;
        this.loaderTopFlag = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoaderserviceService.prototype.showBlockingLoader = function () {
        console.log("load");
        this.blockingLoader.next(true);
        this.blockingLoaderFlag = true;
    };
    LoaderserviceService.prototype.hideBlockingLoader = function () {
        this.blockingLoader.next(false);
        this.blockingLoaderFlag = false;
    };
    LoaderserviceService.prototype.showBlockingLoaderAuth = function () {
        this.blockingLoaderAuth.next(true);
    };
    LoaderserviceService.prototype.hideBlockingLoaderAuth = function () {
        this.blockingLoaderAuth.next(false);
    };
    LoaderserviceService.prototype.sendMessage = function (message) {
        // console.log("name",message);
        var set_data = {};
        set_data['message'] = message;
        this.subject.next(set_data);
    };
    LoaderserviceService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    LoaderserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderserviceService);
    return LoaderserviceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map