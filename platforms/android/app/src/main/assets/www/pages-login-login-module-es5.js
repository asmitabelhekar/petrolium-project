(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Khula&display=swap\" rel=\"stylesheet\">\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xl=\"row\" class=\"registration-main\">\n\n  <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xs=\"column\" class=\"registration-main-matcard\">\n    <mat-card-header>\n      <mat-card-title>\n        <P class=\"login-name-p-tag\"> LOGIN</P>\n      </mat-card-title>\n\n    </mat-card-header>\n\n    <mat-card-content fxLayout=\"column\" fxLayoutGap=\"20px\" class=\"registration-form\" fxLayoutAlign=\"center center\" style=\"width:80%; margin-top:10px\">\n\n      <div class=\"registration-form-img\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <img src=\"../../../assets/petrol2.svg\" alt=\"\">\n      </div>\n\n      <mat-form-field style=\"width:100%\">\n\n        <input matInput required placeholder=\"Phone Number\" class=\"form-control\" name=\"mobile\"\n          [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" minlength=\"10\" maxlength=10 pattern=\"[0-9]+\">\n        <mat-error>\n          <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n            Phone Number Required\n          </div>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field style=\"width:100%\">\n\n        <input type=\"password\" matInput required placeholder=\"password\" class=\"form-control\" name=\"password\"\n          [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" pattern=\"[a-zA-z]+$\">\n        <mat-error>\n          <div *ngIf=\"password.invalid && (password.dirty  || password.touched)\">\n            Password is Required\n          </div>\n        </mat-error>\n\n      </mat-form-field>\n    </mat-card-content>\n\n\n    <button (click)=\"login(loginModel)\" id=\"button-of-submit\"> Submit</button>\n\n\n\n  </mat-card>"

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

module.exports = ".registration-main {\n  height: 100%;\n  width: 100%;\n  background: #3E5151;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#DECBA4), to(#3E5151));\n  background: linear-gradient(to right, #DECBA4, #3E5151);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nmat-card {\n  min-width: 90%;\n}\n\n.registration-form-img {\n  width: 110px;\n  height: 110px;\n  border: 3px solid black;\n  border-radius: 60px;\n  margin: 0px;\n}\n\n.registration-form-img img {\n  width: 70%;\n  height: 70%;\n}\n\n#button-of-submit {\n  width: 30%;\n  margin-top: 10px;\n  padding: 20px;\n  border-radius: 5px;\n  background: #00B4DB;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#0083B0), to(#00B4DB));\n  background: linear-gradient(to right, #0083B0, #00B4DB);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.login-name-p-tag {\n  font-size: 25px;\n  word-spacing: 2.5;\n  font-family: \"Khula\", sans-serif;\n  padding: 0px;\n  margin: 0px;\n}\n\n.form-control {\n  margin: 0px;\n  padding: 0px;\n}\n\n.img-of-petrolium {\n  width: 90%;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFBc0IsOEJBQUE7RUFDd0MsK0JBQUE7RUFDbEUscUZBQUE7RUFBQSx1REFBQTtFQUF5RCxxRUFBQTtBQ0V6RDs7QURFSTtFQUVBLGNBQUE7QUNBSjs7QURJSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0MsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNEVDs7QURHSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQVI7O0FER0U7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUFzQiw4QkFBQTtFQUM0QywrQkFBQTtFQUNsRSxxRkFBQTtFQUFBLHVEQUFBO0VBQXlELHFFQUFBO0FDRy9EOztBREFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHSjs7QURBRTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJhdGlvbi1tYWlue1xuIFxuICAgIGhlaWdodDogMTAwJTsgICBcbiAgICB3aWR0aDogMTAwJTtcbiAgIFxuICAgIGJhY2tncm91bmQ6ICMzRTUxNTE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0RFQ0JBNCwgIzNFNTE1MSk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREVDQkE0LCAjM0U1MTUxKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuXG5cbiAgICB9XG4gICAgbWF0LWNhcmR7XG4gICAgICBcbiAgICBtaW4td2lkdGg6IDkwJTtcblxuICAgIFxuICAgIH1cbiAgICAucmVnaXN0cmF0aW9uLWZvcm0taW1ne1xuICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIC5yZWdpc3RyYXRpb24tZm9ybS1pbWcgaW1ne1xuICAgICAgICB3aWR0aDo3MCU7XG4gICAgICAgIGhlaWdodDogNzAlO1xuXG4gICAgfVxuICAjYnV0dG9uLW9mLXN1Ym1pdHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogIzAwQjREQjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4M0IwLCAjMDBCNERCKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgICBcbiAgfVxuICAubG9naW4tbmFtZS1wLXRhZ3tcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgd29yZC1zcGFjaW5nOiAyLjU7XG4gICAgZm9udC1mYW1pbHk6ICdLaHVsYScsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuXG4gIH1cbiAgLmZvcm0tY29udHJvbHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG5cbiAgfVxuICAuaW1nLW9mLXBldHJvbGl1bXtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgfSIsIi5yZWdpc3RyYXRpb24tbWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzRTUxNTE7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERUNCQTQsICMzRTUxNTEpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERUNCQTQsICMzRTUxNTEpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbm1hdC1jYXJkIHtcbiAgbWluLXdpZHRoOiA5MCU7XG59XG5cbi5yZWdpc3RyYXRpb24tZm9ybS1pbWcge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJlZ2lzdHJhdGlvbi1mb3JtLWltZyBpbWcge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cblxuI2J1dHRvbi1vZi1zdWJtaXQge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwMEI0REI7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbi5sb2dpbi1uYW1lLXAtdGFnIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3b3JkLXNwYWNpbmc6IDIuNTtcbiAgZm9udC1mYW1pbHk6IFwiS2h1bGFcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pbWctb2YtcGV0cm9saXVtIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */"

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
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function (data) {
        alert("data:" + JSON.stringify(data.name));
        if (data.mobile == "1234567890" && data.password == "abc") {
            this.router.navigate(['updatebalance']);
            localStorage.setItem('loginStatus', 'dataentry');
        }
        else if (data.mobile == "1234567891" && data.password == "abc") {
            localStorage.setItem('loginStatus', 'manager');
            this.router.navigate(['home']);
        }
        else {
        }
        // localStorage.setItem('loginStatus', 'manager');
        var statusCheck = localStorage.getItem("loginStatus");
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