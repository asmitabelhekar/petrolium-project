(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addcustomer-addcustomer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addcustomer/addcustomer.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addcustomer/addcustomer.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-icon name=\"close\" style=\"width:30px; height:30px; margin:10px ;color : #ffffff\" (click)=\"goBackword()\">\n        </ion-icon>\n        <!-- <checkRecordStatus ion-button class=\"BackButton\" (click)=\"goBackword()\" style=\"margin:10px\"></button> -->\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label class=\"TitleHeader TitleText\" style=\"font-size: 17px;\">\n          Add Customer\n        </ion-label>\n      </ion-col>\n     \n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <form #userForm=\"ngForm\">\n    <!-- <button style=\"width:55px; height: 55px; background-color: #bfc0c9;font-size:20px\" class=\"centerImg\">+</button> -->\n    <ion-row style=\"width:100%;margin-top:5%\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"person\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row >\n          <mat-form-field style=\"width:95%; margin-right:5%\">\n            <input matInput class=\"form-control \" name=\"fname\" required [(ngModel)]=\"userModel.fname\" #fname=\"ngModel\"\n              pattern=\"[a-zA-z   ]+$\" placeholder=\"First Name\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\">\n                  First Name Is Requird\n                </div>\n              </div>\n            </mat-error>\n\n          </mat-form-field>\n        </ion-row>\n      \n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-10px\">\n      <ion-col size=\"2\">\n        <!-- <ion-icon name=\"person\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon> -->\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row >\n        <mat-form-field style=\"width:95%; margin-right:5%\">\n          <input matInput class=\"form-control \" name=\"lname\" required [(ngModel)]=\"userModel.lname\" #lname=\"ngModel\"\n            pattern=\"[a-zA-z]+$\" placeholder=\"Last Name\" />\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\">\n                Last Name Is Requird\n              </div>\n            </div>\n          </mat-error>\n  \n        </mat-form-field>\n        </ion-row>\n      </ion-col>\n      \n    </ion-row>\n\n\n<ion-row style=\"margin-top:-10px\">\n  <ion-col size=\"2\">\n    <ion-icon name=\"call\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n    </ion-icon>\n  </ion-col>\n  <ion-col size=\"10\">\n    <ion-row >\n    <mat-form-field style=\"width:95%; margin-right:5%\">\n      <input matInput class=\"form-control \" name=\"mobile\" type=\"number\" minlength=\"10\" maxlength=\"10\" required [(ngModel)]=\"userModel.mobile\" #mobile=\"ngModel\"\n        pattern=\"[0-9]+$\" placeholder=\"Mobile\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n            Mobile Number Is Requird\n          </div>\n        </div>\n      </mat-error>\n\n    </mat-form-field>\n    </ion-row>\n  </ion-col>\n</ion-row>\n    \n<ion-row style=\"margin-top:-10px\">\n  <ion-col size=\"2\">\n    <ion-icon name=\"mail\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n    </ion-icon>\n  </ion-col>\n\n  <ion-col size=\"10\">\n    <ion-row >\n    <mat-form-field style=\"width:95%; margin-right:5%\">\n      <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"userModel.email\" #email=\"ngModel\"\n        pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" placeholder=\"Email\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n            Email Is Requird\n          </div>\n        </div>\n      </mat-error>\n\n    </mat-form-field>\n    </ion-row>\n  </ion-col>\n</ion-row>\n\n   \n\n    <ion-row style=\"margin-top:-10px\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"home\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row >\n        <mat-form-field style=\"width:95%; margin-right:5%\">\n          <textarea matInput class=\"form-control \" name=\"address\"  [(ngModel)]=\"userModel.address\" #address=\"ngModel\"\n            pattern=\"[a-zA-z  .]+$\" placeholder=\"Address\" ></textarea>\n        </mat-form-field>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-10px\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"document\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n    \n      <ion-col size=\"10\">\n        <ion-row >\n        <mat-form-field style=\"width:95%; margin-right:5%\">\n          <textarea matInput class=\"form-control \" name=\"note\" [(ngModel)]=\"userModel.note\" #note=\"ngModel\"\n            pattern=\"[a-zA-z  .]+$\" placeholder=\"Note\" ></textarea>\n        \n        </mat-form-field>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n   \n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:15px\">\n      <button mat-raised-button\n        [disabled]=\"mobile.invalid || address.invalid || fname.invalid || lname.invalid \"\n        class=\"submitButton\" (click)=\"addCustomerData()\">Save</button>\n\n    </div>\n  </form>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddcustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPageRoutingModule", function() { return AddcustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcustomer.page */ "./src/app/pages/addcustomer/addcustomer.page.ts");




const routes = [
    {
        path: '',
        component: _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__["AddcustomerPage"]
    }
];
let AddcustomerPageRoutingModule = class AddcustomerPageRoutingModule {
};
AddcustomerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddcustomerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer.module.ts ***!
  \*********************************************************/
/*! exports provided: AddcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPageModule", function() { return AddcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcustomer-routing.module */ "./src/app/pages/addcustomer/addcustomer-routing.module.ts");
/* harmony import */ var _addcustomer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addcustomer.page */ "./src/app/pages/addcustomer/addcustomer.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let AddcustomerPageModule = class AddcustomerPageModule {
};
AddcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddcustomerPageRoutingModule"]
        ],
        declarations: [_addcustomer_page__WEBPACK_IMPORTED_MODULE_4__["AddcustomerPage"]]
    })
], AddcustomerPageModule);



/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration-main {\n  margin-top: 5%;\n  width: 100%;\n  border: 1px solid red;\n}\n\nmat-card {\n  min-width: 80%;\n}\n\n.submitButton {\n  height: 48px;\n  width: 30%;\n  margin-left: 15%;\n  margin-right: 15%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.new-background-color {\n  --background: #494747;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9hZGRjdXN0b21lci9hZGRjdXN0b21lci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZGN1c3RvbWVyL2FkZGN1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDSTtFQUNBLGNBQUE7QUNFSjs7QURDSTtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDRCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDQ1I7O0FESUk7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRlI7O0FES0k7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDSFI7O0FET0E7RUFDSSxxQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkY3VzdG9tZXIvYWRkY3VzdG9tZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJhdGlvbi1tYWlue1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICB9XG4gICAgbWF0LWNhcmR7XG4gICAgbWluLXdpZHRoOiA4MCU7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXRCdXR0b257XG4gICBcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1x0XG4gICAgICAgIHdpZHRoOiAzMCU7IFxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTUlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1x0XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1x0XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcdFxuICAgICAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIC8vIGJvdHRvbTogMTBweDtcbiAgICAgICAgLy8gcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5UaXRsZUhlYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgfVxuICAgIC5UaXRsZVRleHR7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgd2lkdGg6IDgxJTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDk0NzQ3O1xuICB9IiwiLnJlZ2lzdHJhdGlvbi1tYWluIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWluLXdpZHRoOiA4MCU7XG59XG5cbi5zdWJtaXRCdXR0b24ge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0NzQ3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer.page.ts ***!
  \*******************************************************/
/*! exports provided: AddcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPage", function() { return AddcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");







let AddcustomerPage = class AddcustomerPage {
    constructor(router, toast, loader, apiCall, alertController, events, route) {
        this.router = router;
        this.toast = toast;
        this.loader = loader;
        this.apiCall = apiCall;
        this.alertController = alertController;
        this.events = events;
        this.route = route;
        this.userModel = {};
    }
    ngOnInit() {
        this.recordstatus = this.route.snapshot.params['detailCustomerdata'];
        console.log("detailCustomerdata" + this.recordstatus);
        let displayArrayValues = JSON.parse(this.recordstatus);
        this.userModel['mobile'] = displayArrayValues.mobile;
        this.userModel['address'] = displayArrayValues.address;
        this.userModel['email'] = displayArrayValues.email;
        this.userModel['note'] = displayArrayValues.note;
        this.customerId = displayArrayValues.customerId;
        let fullname = displayArrayValues.fname;
        if (fullname != "") {
            let names = fullname.split(" ");
            this.userModel['fname'] = names[0];
            this.userModel['lname'] = names[(names.length - 1)];
        }
        this.checkStatus = displayArrayValues.checkstatus;
        if (this.checkStatus == "add") {
            this.savetext = "Add Customer";
        }
        else if (this.checkStatus == "update") {
            this.savetext = "Update Customer";
        }
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
    addCustomerData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader.presentLoading();
            let send_date = {};
            this.mobieNumber = this.userModel['mobile'];
            send_date['firstName'] = this.userModel['fname'];
            send_date['lastName'] = this.userModel['lname'];
            send_date['mobile'] = this.mobieNumber.toString();
            send_date['address'] = this.userModel['address'];
            if (this.userModel['note'] != "") {
                send_date['note'] = this.userModel['note'];
            }
            if (this.userModel['email'] != "") {
                send_date['email'] = this.userModel['email'];
            }
            send_date['isActive'] = 1;
            if (this.checkStatus == "add") {
                this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + "customers";
                this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
                    console.log("MyResponse ", MyResponse);
                    this.events.publish('Event-AddCustomer');
                    this.router.navigate(['/home']);
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
                this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + "customers/" + this.customerId;
                this.apiCall.put(this.url, send_date).subscribe(MyResponse => {
                    console.log("MyResponse ", MyResponse);
                    this.events.publish('Event-AddCustomer');
                    this.router.navigate(['/home']);
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
        });
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
                            this.router.navigate(['customerdetil', { customerId: this.customerId }]);
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
                            this.router.navigate(['/home']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AddcustomerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_6__["LoaderserviceService"] },
    { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_5__["ApicallService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcustomer',
        template: __webpack_require__(/*! raw-loader!./addcustomer.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addcustomer/addcustomer.page.html"),
        styles: [__webpack_require__(/*! ./addcustomer.page.scss */ "./src/app/pages/addcustomer/addcustomer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_6__["LoaderserviceService"],
        src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_5__["ApicallService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AddcustomerPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApicallService = class ApicallService {
    constructor(http) {
        this.http = http;
    }
    postWAu(url, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.post(url, data, httpOptions);
    }
    get(url) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.get(url, httpOptions);
    }
    put(url, data) {
        console.log(url);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put(url, data, httpOptions);
    }
};
ApicallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApicallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApicallService);



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
//# sourceMappingURL=pages-addcustomer-addcustomer-module-es2015.js.map