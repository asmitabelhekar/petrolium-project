(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userprofile-userprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/userprofile/userprofile.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/userprofile/userprofile.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      User Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <button class=\"centerImg\" style=\"font-size :20px; margin-top:12%\">{{firstName | uppercase}}</button>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <ion-item>\n      <label class=\"cl_title_fontsize\" fxLayoutAlign=\"center center\" style=\"margin-top:3%;color: black; \">\n        {{userName}}\n      </label>\n    </ion-item>\n  </div>\n\n  <ion-item style=\"margin-left:-15px; margin-top:-10px\">\n    <div style=\"margin-top:-10px\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    </div>\n  </ion-item>\n\n  <div style=\"margin-left:20px; margin-top:25px\">\n\n    <label style=\"font-size:20px\">Contact Details</label><br/><br/>\n\n    <ion-label class=\"cl_title_fontsize\">Phone Number</ion-label><br/>\n    <ion-label class=\"cl_content_fontsize\">{{userMobile}}</ion-label><br/><br/>\n\n    <ion-label class=\"cl_title_fontsize\">Email Id</ion-label><br/>\n    <ion-label class=\"cl_content_fontsize\">{{userEmail}}</ion-label><br/><br/>\n\n    <ion-label class=\"cl_title_fontsize\">User Role</ion-label><br/>\n    <ion-label *ngIf=\"userRole == '0' \" class=\"cl_content_fontsize\">Data Entry</ion-label>\n    <ion-label *ngIf=\"userRole == '1' \" class=\"cl_content_fontsize\">Manager</ion-label>\n    <ion-label *ngIf=\"userRole == '2' \" class=\"cl_content_fontsize\">Admin</ion-label><br/><br/>\n\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:10%;\">\n\n    <label mat-raised-button style=\"border : 1px solid grey; border-radius: 18px; padding:10px\" class=\"submitButton\" (click)=\"logOut()\">Log Out</label>\n  </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/userprofile/userprofile-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/userprofile/userprofile-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePageRoutingModule", function() { return UserprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userprofile.page */ "./src/app/pages/userprofile/userprofile.page.ts");




const routes = [
    {
        path: '',
        component: _userprofile_page__WEBPACK_IMPORTED_MODULE_3__["UserprofilePage"]
    }
];
let UserprofilePageRoutingModule = class UserprofilePageRoutingModule {
};
UserprofilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserprofilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/userprofile/userprofile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/userprofile/userprofile.module.ts ***!
  \*********************************************************/
/*! exports provided: UserprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePageModule", function() { return UserprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userprofile-routing.module */ "./src/app/pages/userprofile/userprofile-routing.module.ts");
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userprofile.page */ "./src/app/pages/userprofile/userprofile.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");








let UserprofilePageModule = class UserprofilePageModule {
};
UserprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserprofilePageRoutingModule"]
        ],
        declarations: [_userprofile_page__WEBPACK_IMPORTED_MODULE_6__["UserprofilePage"]]
    })
], UserprofilePageModule);



/***/ }),

/***/ "./src/app/pages/userprofile/userprofile.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/userprofile/userprofile.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centerImg {\n  border: 1px solid #bdafaf;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70px;\n  color: white;\n  height: 70px;\n  background-color: #f032f0;\n  border-radius: 50%;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl_title_fontsize {\n  font-size: 18px;\n  padding: 3px;\n  color: #696666;\n}\n\n.cl_content_fontsize {\n  font-size: 15px;\n  color: black;\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy91c2VycHJvZmlsZS91c2VycHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURJQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0RBOztBRElBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDREEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VycHJvZmlsZS91c2VycHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVySW1nIHtcbiAgICBib3JkZXIgOiAxcHggc29saWQgI2JkYWZhZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDMyZjA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLkJhY2tCdXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsX3RpdGxlX2ZvbnRzaXple1xuZm9udC1zaXplOiAxOHB4O1xucGFkZGluZzozcHg7XG5jb2xvcjogcmdiKDEwNSwgMTAyLCAxMDIpO1xufVxuXG4uY2xfY29udGVudF9mb250c2l6ZXtcbmZvbnQtc2l6ZToxNXB4O1xuY29sb3I6IGJsYWNrO1xucGFkZGluZzozcHg7XG59IiwiLmNlbnRlckltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGFmYWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDMyZjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLkJhY2tCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsX3RpdGxlX2ZvbnRzaXplIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGNvbG9yOiAjNjk2NjY2O1xufVxuXG4uY2xfY29udGVudF9mb250c2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/userprofile/userprofile.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/userprofile/userprofile.page.ts ***!
  \*******************************************************/
/*! exports provided: UserprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePage", function() { return UserprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserprofilePage = class UserprofilePage {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
    }
    ngOnInit() {
        this.getProfileDetail();
    }
    getProfileDetail() {
        let userId = localStorage.getItem('userId');
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "users/" + userId;
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(MyResponse => {
            this.getUserDetail = (MyResponse['result']);
            this.userName = this.getUserDetail.name;
            this.userMobile = this.getUserDetail.mobile;
            this.userRole = this.getUserDetail.userRole;
            this.userEmail = this.getUserDetail.email;
            this.firstName = this.userName.charAt(0);
        }, error => {
        });
    }
    logOut() {
        localStorage.removeItem("userRole");
        localStorage.removeItem('userId');
        localStorage.clear();
        localStorage.setItem('login', 'no');
        this.router.navigate(['/login']);
    }
};
UserprofilePage.ctorParameters = () => [
    { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__(/*! raw-loader!./userprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/userprofile/userprofile.page.html"),
        styles: [__webpack_require__(/*! ./userprofile.page.scss */ "./src/app/pages/userprofile/userprofile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UserprofilePage);



/***/ })

}]);
//# sourceMappingURL=pages-userprofile-userprofile-module-es2015.js.map