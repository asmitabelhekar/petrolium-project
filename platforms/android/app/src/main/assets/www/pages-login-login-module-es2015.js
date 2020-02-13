(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Khula&display=swap\" rel=\"stylesheet\">\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xl=\"row\" class=\"registration-main\">\n  \n   <mat-card  fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.xs=\"column\" class=\"registration-main-matcard\">\n     <mat-card-header>\n       <mat-card-title >\n        <P class=\"login-name-p-tag\"> LOGIN</P>\n       </mat-card-title>\n   \n     </mat-card-header>\n   \n     <mat-card-content fxLayout=\"column\" fxLayoutGap=\"20px\" class=\"registration-form\"  fxLayoutAlign=\"center center\" >\n             \n       <div class=\"registration-form-img\"  fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n         <img src=\"../../../assets/petrol2.svg\" alt=\"\">\n       </div>\n   \n       <mat-form-field>\n   \n         <input matInput required placeholder=\"Phone Number\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"userModel.phone\" #phone=\"ngModel\" minlength=\"10\" maxlength=10 pattern=\"[0-9]+\">\n         <mat-error>\n           <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n             Phone Number Required\n           </div>\n         </mat-error>  \n       </mat-form-field>\n       <mat-form-field>\n   \n         <input type=\"password\" matInput required placeholder=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"userModel.password\"  #password=\"ngModel\" pattern=\"[a-zA-z]+$\" >\n         <mat-error>\n           <div *ngIf=\"password.invalid && (password.dirty  || password.touched)\">\n           Password is Required\n           </div>\n         </mat-error>\n   \n       </mat-form-field>\n     </mat-card-content>\n\n\n     <button  (click)=\"login()\" id=\"button-of-submit\"> Submit</button>\n  \n   \n   \n    </mat-card>\n\n   "

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
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
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

module.exports = ".registration-main {\n  height: 100%;\n  width: 100%;\n  background: #3E5151;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#DECBA4), to(#3E5151));\n  background: linear-gradient(to right, #DECBA4, #3E5151);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nmat-card {\n  min-width: 90%;\n}\n\n.registration-form-img {\n  width: 110px;\n  height: 110px;\n  border: 3px solid black;\n  border-radius: 60px;\n  margin: 0px;\n}\n\n.registration-form-img img {\n  width: 70%;\n  height: 70%;\n}\n\n#button-of-submit {\n  width: 80%;\n  margin-top: 10px;\n  padding: 20px;\n  background: #00B4DB;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#0083B0), to(#00B4DB));\n  background: linear-gradient(to right, #0083B0, #00B4DB);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.login-name-p-tag {\n  font-size: 25px;\n  word-spacing: 2.5;\n  font-family: \"Khula\", sans-serif;\n  padding: 0px;\n  margin: 0px;\n}\n\n.form-control {\n  margin: 0px;\n  padding: 0px;\n}\n\n.img-of-petrolium {\n  width: 90%;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFBc0IsOEJBQUE7RUFDd0MsK0JBQUE7RUFDbEUscUZBQUE7RUFBQSx1REFBQTtFQUF5RCxxRUFBQTtBQ0V6RDs7QURFSTtFQUVBLGNBQUE7QUNBSjs7QURJSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0MsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNEVDs7QURHSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQVI7O0FER0U7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFBc0IsOEJBQUE7RUFDNEMsK0JBQUE7RUFDbEUscUZBQUE7RUFBQSx1REFBQTtFQUF5RCxxRUFBQTtBQ0cvRDs7QURBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQUU7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RyYXRpb24tbWFpbntcbiBcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICBcbiAgICBiYWNrZ3JvdW5kOiAjM0U1MTUxOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERUNCQTQsICMzRTUxNTEpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0RFQ0JBNCwgIzNFNTE1MSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cblxuXG4gICAgfVxuICAgIG1hdC1jYXJke1xuICAgICAgXG4gICAgbWluLXdpZHRoOiA5MCU7XG5cbiAgICBcbiAgICB9XG4gICAgLnJlZ2lzdHJhdGlvbi1mb3JtLWltZ3tcbiAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICAucmVnaXN0cmF0aW9uLWZvcm0taW1nIGltZ3tcbiAgICAgICAgd2lkdGg6NzAlO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcblxuICAgIH1cbiAgI2J1dHRvbi1vZi1zdWJtaXR7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgIGJhY2tncm91bmQ6ICMwMEI0REI7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwODNCMCwgIzAwQjREQik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4M0IwLCAjMDBCNERCKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgICAgXG4gIH1cbiAgLmxvZ2luLW5hbWUtcC10YWd7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHdvcmQtc3BhY2luZzogMi41O1xuICAgIGZvbnQtZmFtaWx5OiAnS2h1bGEnLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcblxuICB9XG4gIC5mb3JtLWNvbnRyb2x7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuXG4gIH1cbiAgLmltZy1vZi1wZXRyb2xpdW17XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH0iLCIucmVnaXN0cmF0aW9uLW1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjM0U1MTUxO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREVDQkE0LCAjM0U1MTUxKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREVDQkE0LCAjM0U1MTUxKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG5tYXQtY2FyZCB7XG4gIG1pbi13aWR0aDogOTAlO1xufVxuXG4ucmVnaXN0cmF0aW9uLWZvcm0taW1nIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5yZWdpc3RyYXRpb24tZm9ybS1pbWcgaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbiNidXR0b24tb2Ytc3VibWl0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwQjREQjtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwODNCMCwgIzAwQjREQik7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwODNCMCwgIzAwQjREQik7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cblxuLmxvZ2luLW5hbWUtcC10YWcge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHdvcmQtc3BhY2luZzogMi41O1xuICBmb250LWZhbWlseTogXCJLaHVsYVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmltZy1vZi1wZXRyb2xpdW0ge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn0iXX0= */"

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
        this.userModel = {};
    }
    ngOnInit() {
    }
    login() {
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