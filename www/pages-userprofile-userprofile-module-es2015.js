(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userprofile-userprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/userprofile/userprofile.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/userprofile/userprofile.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\" align=\"center\">\n        <img src=\"../../../assets/back_white.png\" style=\"width:25px; height: 25px; margin: 7px\" (click)=\"goBackword()\"/>\n        <!-- <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\"></button> -->\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">User Profile</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <!-- <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      <label>User Profile</label>\n    </ion-title>\n  </ion-toolbar> -->\n</ion-header>\n<ion-content>\n  <button class=\"centerImg\" [ngClass]=\"(customerIndex % 2 == 0) ? 'odd' : 'even' \" style=\"font-size :20px; margin-top:12%\">{{firstName | uppercase}}</button>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <ion-item (click)=\"updateProfile()\">\n      <label class=\"cl_title_fontsize\" fxLayoutAlign=\"center center\" style=\"margin-top:3%;color: black; \">\n        {{userName}}\n      </label>\n      <ion-icon name=\"create\" style=\"width:19px;height:19px;color: black\"></ion-icon>\n    </ion-item>\n  </div>\n\n  <ion-item style=\"margin-left:-15px; margin-top:-10px\">\n    <div style=\"margin-top:-10px\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    </div>\n  </ion-item>\n\n  <ion-item style=\"margin-top:25px;margin-left:-20px;\">\n    <div style=\"margin-left:30px;\">\n      <label style=\"font-size:20px\">Contact Details</label><br /><br />\n\n      <ion-label class=\"cl_title_fontsize\">Phone Number</ion-label>\n      <ion-label class=\"cl_content_fontsize\">{{userMobile}}</ion-label><br />\n\n      <ion-label class=\"cl_title_fontsize\">Email Id</ion-label>\n      <ion-label class=\"cl_content_fontsize\">{{userEmail}}</ion-label><br />\n\n      <ion-label class=\"cl_title_fontsize\">User Role</ion-label>\n      <ion-label *ngIf=\"userRole == '0' \" class=\"cl_content_fontsize\">Data Entry</ion-label>\n      <ion-label *ngIf=\"userRole == '1' \" class=\"cl_content_fontsize\">Manager</ion-label>\n      <ion-label *ngIf=\"userRole == '2' \" class=\"cl_content_fontsize\">Admin</ion-label><br /><br />\n    </div>\n  </ion-item>\n\n  <div *ngIf=\"logoutStatus == '0' \" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:10%;\">\n\n    <label mat-raised-button style=\"border : 1px solid grey; border-radius: 18px; padding:10px\" class=\"submitButton\"\n      (click)=\"logOut()\">Log Out</label>\n  </div>\n</ion-content>"

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

module.exports = ".centerImg {\n  border: 1px solid #bdafaf;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70px;\n  color: white;\n  height: 70px;\n  background-color: #f032f0;\n  border-radius: 50%;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  color: white;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl_title_fontsize {\n  font-size: 18px;\n  padding: 3px;\n  color: #696666;\n}\n\n.cl_content_fontsize {\n  font-size: 15px;\n  color: black;\n  padding: 3px;\n}\n\n.odd {\n  background-color: #f08132;\n}\n\n.even {\n  background-color: #ee38b7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy91c2VycHJvZmlsZS91c2VycHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNEQTs7QURJQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0RBOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURLRTtFQUNFLHlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VycHJvZmlsZS91c2VycHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVySW1nIHtcbiAgICBib3JkZXIgOiAxcHggc29saWQgI2JkYWZhZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDMyZjA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLkJhY2tCdXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbF90aXRsZV9mb250c2l6ZXtcbmZvbnQtc2l6ZTogMThweDtcbnBhZGRpbmc6M3B4O1xuY29sb3I6IHJnYigxMDUsIDEwMiwgMTAyKTtcbn1cblxuLmNsX2NvbnRlbnRfZm9udHNpemV7XG5mb250LXNpemU6MTVweDtcbmNvbG9yOiBibGFjaztcbnBhZGRpbmc6M3B4O1xufVxuXG5cblxuLm9kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMDgxMzI7XG4gIH1cbiAgLmV2ZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNTYsIDE4Myk7XG4gIH0iLCIuY2VudGVySW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYWZhZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMzJmMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uQmFja0J1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbF90aXRsZV9mb250c2l6ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogM3B4O1xuICBjb2xvcjogIzY5NjY2Njtcbn1cblxuLmNsX2NvbnRlbnRfZm9udHNpemUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ub2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwODEzMjtcbn1cblxuLmV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzOGI3O1xufSJdfQ== */"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let UserprofilePage = class UserprofilePage {
    constructor(apiCall, router, alertController, events, location, activatedRoute) {
        this.apiCall = apiCall;
        this.router = router;
        this.alertController = alertController;
        this.events = events;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.userModel = {};
    }
    ngOnInit() {
        this.userId = (this.activatedRoute.snapshot.params['userId']);
        if (this.userId == undefined || this.userId == "" || this.userId == null) {
            this.userId = localStorage.getItem('userId');
            this.getProfileDetail(this.userId);
            this.logoutStatus = 0;
        }
        else {
            this.getProfileDetail(this.userId);
            this.logoutStatus = 1;
        }
        this.events.subscribe('Event-UpdateProfile', () => {
            this.getProfileDetail(this.userId);
        });
    }
    getProfileDetail(id) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "users/" + id;
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(MyResponse => {
            this.getUserDetail = (MyResponse['result']);
            this.userName = this.getUserDetail.name;
            this.userMobile = this.getUserDetail.mobile;
            this.userRole = this.getUserDetail.userRole;
            this.userEmail = this.getUserDetail.email;
            this.userPassword = this.getUserDetail.password;
            this.firstName = this.userName.charAt(0);
        }, error => {
        });
    }
    displayAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure want to log out?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            alert.dismiss();
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            localStorage.removeItem("userRole");
                            localStorage.removeItem('userId');
                            localStorage.clear();
                            localStorage.setItem('login', 'no');
                            this.router.navigate(['/login']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    logOut() {
        this.displayAlert();
    }
    updateProfile() {
        this.checkRecordStatus = "update";
        let fullname = this.userName;
        if (fullname != "") {
            let names = fullname.split(" ");
            this.userModel['fname'] = names[0];
            this.userModel['lname'] = names[(names.length - 1)];
        }
        let detailUserData = {
            "fname": this.userModel['fname'],
            "lname": this.userModel['lname'],
            "mobile": this.userMobile,
            "email": this.userEmail,
            "userrole": this.userRole,
            "checkstatus": this.checkRecordStatus,
            "password": this.userPassword,
            "userid": this.userId
        };
        this.router.navigate(['/addusers', { detailUserData: JSON.stringify(detailUserData) }]);
        // this.router.navigate(['/addusers']);
    }
    goBackword() {
        let checkUser = localStorage.getItem('userRole');
        if (checkUser == '0') {
            this.router.navigate(['/dataentrycredit']);
        }
        else if (checkUser == '1') {
            this.location.back();
        }
        else if (checkUser == '2') {
            this.location.back();
        }
        else {
            this.location.back();
        }
        // this.location.back();
    }
};
UserprofilePage.ctorParameters = () => [
    { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UserprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__(/*! raw-loader!./userprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/userprofile/userprofile.page.html"),
        styles: [__webpack_require__(/*! ./userprofile.page.scss */ "./src/app/pages/userprofile/userprofile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], UserprofilePage);



/***/ })

}]);
//# sourceMappingURL=pages-userprofile-userprofile-module-es2015.js.map