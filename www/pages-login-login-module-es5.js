(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Khula&display=swap\" rel=\"stylesheet\">\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xl=\"row\" class=\"registration-main\">\n  \n   <mat-card  fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xs=\"column\" class=\"registration-main-matcard\">\n     <mat-card-header>\n       <mat-card-title >\n        <P class=\"login-name-p-tag\"> LOGIN</P>\n       </mat-card-title>\n   \n     </mat-card-header>\n   \n     <mat-card-content fxLayout=\"column\" fxLayoutGap=\"20px\" class=\"registration-form\"  fxLayoutAlign=\"center center\" >\n             \n       <div class=\"registration-form-img\"  fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n         <img src=\"../../../assets/petrol2.svg\" alt=\"\">\n       </div>\n   \n       <mat-form-field>\n   \n         <input matInput required placeholder=\"Phone Number\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"userModel.phone\" #phone=\"ngModel\" minlength=\"10\" maxlength=10 pattern=\"[0-9]+\">\n         <mat-error>\n           <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n             Phone Number Required\n           </div>\n         </mat-error>  \n       </mat-form-field>\n       <mat-form-field>\n   \n         <input type=\"password\" matInput required placeholder=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"userModel.password\"  #password=\"ngModel\" pattern=\"[a-zA-z]+$\" >\n         <mat-error>\n           <div *ngIf=\"password.invalid && (password.dirty  || password.touched)\">\n           Password is Required\n           </div>\n         </mat-error>\n   \n       </mat-form-field>\n     </mat-card-content>\n\n\n     <button  (click)=\"nextPage()\" id=\"button-of-submit\"> Submit</button>\n  \n   \n   \n    </mat-card>\n\n   \n    <div class=\"img-of-petrolium\">\n      <img src=\"../../../assets/city.jpg\" alt=\"\">\n        </div>\n   </div>\n   "

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

module.exports = ".registration-main {\n  height: 100%;\n  width: 100%;\n  background: #3E5151;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#DECBA4), to(#3E5151));\n  background: linear-gradient(to right, #DECBA4, #3E5151);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nmat-card {\n  min-width: 90%;\n}\n\n.registration-form-img {\n  width: 110px;\n  height: 110px;\n  border: 3px solid black;\n  border-radius: 60px;\n  margin: 0px;\n}\n\n.registration-form-img img {\n  width: 70%;\n  height: 70%;\n}\n\n#button-of-submit {\n  width: 80%;\n  margin-top: 10px;\n  padding: 20px;\n  background: #00B4DB;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#0083B0), to(#00B4DB));\n  background: linear-gradient(to right, #0083B0, #00B4DB);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.login-name-p-tag {\n  font-size: 25px;\n  word-spacing: 2.5;\n  font-family: \"Khula\", sans-serif;\n  padding: 0px;\n  margin: 0px;\n}\n\n.form-control {\n  margin: 0px;\n  padding: 0px;\n}\n\n.img-of-petrolium {\n  width: 90%;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzbWl0YS9wcm9qZWN0L3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQXNCLDhCQUFBO0VBQ3dDLCtCQUFBO0VBQ2xFLHFGQUFBO0VBQUEsdURBQUE7RUFBeUQscUVBQUE7QUNFekQ7O0FERUk7RUFFQSxjQUFBO0FDQUo7O0FESUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNDLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRFQ7O0FER0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0FSOztBREdFO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQXNCLDhCQUFBO0VBQzRDLCtCQUFBO0VBQ2xFLHFGQUFBO0VBQUEsdURBQUE7RUFBeUQscUVBQUE7QUNHL0Q7O0FEQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDR0o7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREFFO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cmF0aW9uLW1haW57XG4gXG4gICAgaGVpZ2h0OiAxMDAlOyAgIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgXG4gICAgYmFja2dyb3VuZDogIzNFNTE1MTsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREVDQkE0LCAjM0U1MTUxKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERUNCQTQsICMzRTUxNTEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG5cblxuICAgIH1cbiAgICBtYXQtY2FyZHtcbiAgICAgIFxuICAgIG1pbi13aWR0aDogOTAlO1xuXG4gICAgXG4gICAgfVxuICAgIC5yZWdpc3RyYXRpb24tZm9ybS1pbWd7XG4gICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLnJlZ2lzdHJhdGlvbi1mb3JtLWltZyBpbWd7XG4gICAgICAgIHdpZHRoOjcwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG5cbiAgICB9XG4gICNidXR0b24tb2Ytc3VibWl0e1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDBCNERCOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwODNCMCwgIzAwQjREQik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgICAgIFxuICB9XG4gIC5sb2dpbi1uYW1lLXAtdGFne1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB3b3JkLXNwYWNpbmc6IDIuNTtcbiAgICBmb250LWZhbWlseTogJ0todWxhJywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgfVxuICAuZm9ybS1jb250cm9se1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcblxuICB9XG4gIC5pbWctb2YtcGV0cm9saXVte1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB9IiwiLnJlZ2lzdHJhdGlvbi1tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzNFNTE1MTtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0RFQ0JBNCwgIzNFNTE1MSk7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0RFQ0JBNCwgIzNFNTE1MSk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cblxubWF0LWNhcmQge1xuICBtaW4td2lkdGg6IDkwJTtcbn1cblxuLnJlZ2lzdHJhdGlvbi1mb3JtLWltZyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucmVnaXN0cmF0aW9uLWZvcm0taW1nIGltZyB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xufVxuXG4jYnV0dG9uLW9mLXN1Ym1pdCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwMEI0REI7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDgzQjAsICMwMEI0REIpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbi5sb2dpbi1uYW1lLXAtdGFnIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3b3JkLXNwYWNpbmc6IDIuNTtcbiAgZm9udC1mYW1pbHk6IFwiS2h1bGFcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pbWctb2YtcGV0cm9saXVtIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */"

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
        this.userModel = {};
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