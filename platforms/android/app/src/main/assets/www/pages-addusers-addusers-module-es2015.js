(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addusers-addusers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addusers/addusers.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addusers/addusers.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-icon name=\"close\" style=\"width:30px; height:30px; margin:10px ;color : #ffffff\" (click)=\"goBackword()\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label class=\"TitleHeader TitleText\" style=\"font-size: 17px;\">\n          Add User\n        </ion-label>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-row style=\"margin-top:5%;width:100%\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"person\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-row>\n        <mat-form-field style=\"width:95%; margin-right:5%\">\n          <mat-label>User Role</mat-label>\n          <select matNativeControl required #userrole [(ngModel)]=\"userModel.userRole\"\n            (change)=\"selectUserRoleDetail(userrole.value)\">\n            <option *ngFor=\"let type of userRoles\" [value]=\"type.roleId\"> {{type.role}}</option>\n          </select>\n        </mat-form-field>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <!-- <form #userForm=\"ngForm\" style=\"width:100%\"> -->\n    <ion-row style=\"width:100%;margin-top:-15px\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"person\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row>\n          <mat-form-field style=\"width:95%; margin-right:5%\">\n            <input matInput class=\"form-control \" name=\"fname\" required [(ngModel)]=\"userModel.fname\" #fname=\"ngModel\"\n              pattern=\"[a-zA-z   ]+$\" placeholder=\"First Name\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\">\n                  First Name Is Requird\n                </div>\n              </div>\n            </mat-error>\n\n          </mat-form-field>\n        </ion-row>\n\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-10px\">\n      <ion-col size=\"2\">\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row>\n          <mat-form-field style=\"width:95%; margin-right:5%\">\n            <input matInput class=\"form-control \" name=\"lname\" required [(ngModel)]=\"userModel.lname\" #lname=\"ngModel\"\n              pattern=\"[a-zA-z]+$\" placeholder=\"Last Name\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\">\n                  Last Name Is Requird\n                </div>\n              </div>\n            </mat-error>\n\n          </mat-form-field>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n  \n\n\n    <ion-row style=\"margin-top:-10px\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"call\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row>\n          <mat-form-field style=\"width:95%; margin-right:5%\">\n\n            <input matInput class=\"form-control \" name=\"mobile\" type=\"tel\" minlength=\"10\" maxlength=\"10\" id=\"mobile\"\n              required [(ngModel)]=\"userModel.mobile\" #mobile=\"ngModel\" pattern=\"[0-9]+$\" placeholder=\"Mobile\" />\n\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n                  Mobile Number Is Requird\n                </div>\n\n              </div>\n            </mat-error>\n\n          </mat-form-field>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-10px\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"mail\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n\n      <ion-col size=\"10\">\n        <ion-row>\n          <mat-form-field style=\"width:95%; margin-right:5%\">\n            <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"userModel.email\" #email=\"ngModel\"\n              pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" placeholder=\"Email\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                  Email Is Requird\n                </div>\n              </div>\n            </mat-error>\n\n          </mat-form-field>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-10px\" *ngIf=\"passwordStatus == '0' \">\n      <ion-col size=\"2\">\n        <ion-icon name=\"lock\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row>\n          <mat-form-field style=\"width:95%; margin-right:5%\">\n            <input matInput class=\"form-control \" name=\"password\" required [(ngModel)]=\"userModel.password\" #password=\"ngModel\"\n              pattern=\"[a-zA-z]+$\" placeholder=\"Password\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n                  Password Is Requird\n                </div>\n              </div>\n            </mat-error>\n\n          </mat-form-field>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:15px; margin-bottom: 20px\">\n      <button mat-raised-button [disabled]=\"mobile.invalid || fname.invalid || lname.invalid \"\n        class=\"submitButton\" (click)=\"addUserData()\">Save</button>\n\n    </div>\n    <!-- </form> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/addusers/addusers-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/addusers/addusers-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddusersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddusersPageRoutingModule", function() { return AddusersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addusers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addusers.page */ "./src/app/pages/addusers/addusers.page.ts");




const routes = [
    {
        path: '',
        component: _addusers_page__WEBPACK_IMPORTED_MODULE_3__["AddusersPage"]
    }
];
let AddusersPageRoutingModule = class AddusersPageRoutingModule {
};
AddusersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddusersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/addusers/addusers.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/addusers/addusers.module.ts ***!
  \***************************************************/
/*! exports provided: AddusersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddusersPageModule", function() { return AddusersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addusers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addusers-routing.module */ "./src/app/pages/addusers/addusers-routing.module.ts");
/* harmony import */ var _addusers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addusers.page */ "./src/app/pages/addusers/addusers.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let AddusersPageModule = class AddusersPageModule {
};
AddusersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _addusers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddusersPageRoutingModule"]
        ],
        declarations: [_addusers_page__WEBPACK_IMPORTED_MODULE_6__["AddusersPage"]]
    })
], AddusersPageModule);



/***/ }),

/***/ "./src/app/pages/addusers/addusers.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/addusers/addusers.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitButton {\n  height: 48px;\n  width: 30%;\n  margin-left: 15%;\n  margin-right: 15%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9hZGR1c2Vycy9hZGR1c2Vycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZHVzZXJzL2FkZHVzZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDRCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDQUo7O0FETUE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSko7O0FET0E7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGR1c2Vycy9hZGR1c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0QnV0dG9ue1xuICAgXG4gICAgaGVpZ2h0OiA0OHB4O1x0XG4gICAgd2lkdGg6IDMwJTsgXG4gICAgIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICAgIGNvbG9yOiAjRkZGRkZGO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gYm90dG9tOiAxMHB4O1xuICAgIC8vIHJpZ2h0OiAxMHB4O1xufVxuXG4uVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiLnN1Ym1pdEJ1dHRvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/addusers/addusers.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/addusers/addusers.page.ts ***!
  \*************************************************/
/*! exports provided: AddusersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddusersPage", function() { return AddusersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let AddusersPage = class AddusersPage {
    constructor(alertController, router, apiCall, events, location, route, toast, loader) {
        this.alertController = alertController;
        this.router = router;
        this.apiCall = apiCall;
        this.events = events;
        this.location = location;
        this.route = route;
        this.toast = toast;
        this.loader = loader;
        this.userModel = {};
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.userRoles = [
            {
                "role": "Data Entry",
                "roleId": '0'
            }, {
                "role": "Manager",
                "roleId": '1'
            }, {
                "role": "Admin",
                "roleId": '2'
            }
        ];
    }
    ngOnInit() {
        this.recordstatus = (this.route.snapshot.params['detailUserData']);
        console.log("detailUserData" + this.recordstatus);
        let displayArrayValues = JSON.parse(this.recordstatus);
        this.checkStatus = displayArrayValues.checkstatus;
        if (this.checkStatus == "add") {
            this.passwordStatus = 0;
            this.pageTitle = "Add User";
            this.userModel['password'] = displayArrayValues.password;
        }
        else {
            this.pageTitle = "Update User";
            this.passwordStatus = 1;
        }
        this.userModel['mobile'] = displayArrayValues.mobile;
        this.userModel['address'] = displayArrayValues.address;
        this.userModel['email'] = displayArrayValues.email;
        this.userModel['fname'] = displayArrayValues.fname;
        this.userModel['lname'] = displayArrayValues.lname;
        this.userModel['userRole'] = displayArrayValues.userrole;
        this.userModel['userId'] = displayArrayValues.userid;
    }
    goBackword() {
        if (this.checkStatus == "add") {
            this.displayAlert();
        }
        else if (this.checkStatus == "update") {
            this.displayCloseAlert();
        }
        else {
            this.displayAlert();
        }
    }
    selectUserRoleDetail(userId) {
        this.userModel['userRole'] = userId;
        // alert(this.userModel['userRole']);
    }
    displayCloseAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Are you sure want to discard changes',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            alert.dismiss();
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.location.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    displayAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Are you sure want to discard changes',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            alert.dismiss();
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['/userslist']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    addUserData() {
        this.loader.presentLoading();
        let send_date = {};
        this.mobieNumber = this.userModel['mobile'];
        let fullName = this.userModel['fname'] + " " + this.userModel['lname'];
        send_date['name'] = fullName;
        send_date['email'] = this.userModel['email'];
        send_date['mobile'] = this.mobieNumber.toString();
        send_date['userRole'] = this.userModel['userRole'];
        send_date['isActive'] = 1;
        if (this.checkStatus == "add") {
            send_date['password'] = this.userModel['password'];
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "users";
            this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
                console.log("MyResponse ", MyResponse);
                let checkUser = localStorage.getItem('userRole');
                if (checkUser == '0') {
                    this.events.publish('Event-UpdateProfile');
                    this.router.navigate(['/userprofile']);
                }
                else if (checkUser == '1') {
                    this.events.publish('Event-UpdateProfile');
                    this.router.navigate(['/userprofile']);
                }
                else if (checkUser == '2') {
                    this.events.publish('Event-AddUser');
                    this.router.navigate(['/userslist']);
                }
                else {
                    this.events.publish('Event-AddUser');
                    this.router.navigate(['/userslist']);
                }
                let msg = MyResponse['message'];
                this.presentToast(msg);
                this.loader.stopLoading();
            }, error => {
                this.presentToast("Something went wrong");
                console.log(error.error.message);
            });
        }
        else if (this.checkStatus == "update") {
            this.loader.presentLoading();
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "users/" + this.userModel['userId'];
            this.apiCall.put(this.url, send_date).subscribe(MyResponse => {
                console.log("MyResponse ", MyResponse);
                let checkUser = localStorage.getItem('userRole');
                if (checkUser == '0') {
                    this.events.publish('Event-UpdateProfile');
                    this.router.navigate(['/userprofile']);
                }
                else if (checkUser == '1') {
                    this.events.publish('Event-UpdateProfile');
                    this.router.navigate(['/userprofile']);
                }
                else if (checkUser == '2') {
                    this.events.publish('Event-AddUser');
                    this.router.navigate(['/userslist']);
                }
                else {
                    this.events.publish('Event-AddUser');
                    this.router.navigate(['/userslist']);
                }
                let msg = MyResponse['message'];
                this.presentToast(msg);
                this.loader.stopLoading();
            }, error => {
                this.loader.stopLoading();
                this.presentToast("Something went wrong");
                console.log(error.error.message);
            });
        }
        else {
        }
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 4000
            });
            toast.present();
        });
    }
};
AddusersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_5__["LoaderserviceService"] }
];
AddusersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addusers',
        template: __webpack_require__(/*! raw-loader!./addusers.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addusers/addusers.page.html"),
        styles: [__webpack_require__(/*! ./addusers.page.scss */ "./src/app/pages/addusers/addusers.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_5__["LoaderserviceService"]])
], AddusersPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let LoaderserviceService = class LoaderserviceService {
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
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            yield loading.present();
            setTimeout(() => {
                loading.dismiss();
            });
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!' + role + ' Data: ' + data);
        });
    }
    stopLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingController.dismiss();
        });
    }
};
LoaderserviceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoaderserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], LoaderserviceService);



/***/ })

}]);
//# sourceMappingURL=pages-addusers-addusers-module-es2015.js.map