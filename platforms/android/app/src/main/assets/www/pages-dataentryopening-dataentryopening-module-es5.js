(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dataentryopening-dataentryopening-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dataentryopening/dataentryopening.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dataentryopening/dataentryopening.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  \n  <ion-toolbar class=\"new-background-color\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-buttons slot=\"start\" style=\"color:white\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n      </ion-col>\n      <ion-col size=\"10\">\n\n        <div class=\"TitleHeader TitleText\">\n          Opening\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Opening\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:15%; width:100%\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Choose a date</mat-label>\n        <input matInput #input=\"ngModel\" [(ngModel)]=\"openingModel.date\" [min]=\"minDate\" [max]=\"today\" [matDatepicker]=\"picker\"\n          placeholder=\"Choose a date\">\n        <!-- <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"userModel.date\" [max]=\"maxDate\"> -->\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker (selectedChanged)=\"onDate($event)\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Fuel Type</mat-label>\n        <mat-select (selectionChange)=\"changeClient($event.value)\">\n          <mat-option *ngFor=\"let type of fuelType\" [value]=\"type.type\" >\n            {{type.type}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n        <mat-form-field style=\"width:90%; margin-top:10px\">\n          <mat-label>Opening Balance</mat-label>\n          <input matInput type=\"number\" name=\"openingbalance\" [(ngModel)]=\"openingModel.openingbalance\"\n            #openingbalance=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:10%;width:100%\">\n\n        <button mat-raised-button [disabled]=\"openingbalance.invalid \" class=\"submitButton\" (click)=\"openingBalanceSubmit()\">Submit</button>\n      </div>\n  </div>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/dataentryopening/dataentryopening-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/dataentryopening/dataentryopening-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DataentryopeningPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataentryopeningPageRoutingModule", function() { return DataentryopeningPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataentryopening_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataentryopening.page */ "./src/app/pages/dataentryopening/dataentryopening.page.ts");




var routes = [
    {
        path: '',
        component: _dataentryopening_page__WEBPACK_IMPORTED_MODULE_3__["DataentryopeningPage"]
    }
];
var DataentryopeningPageRoutingModule = /** @class */ (function () {
    function DataentryopeningPageRoutingModule() {
    }
    DataentryopeningPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DataentryopeningPageRoutingModule);
    return DataentryopeningPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dataentryopening/dataentryopening.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dataentryopening/dataentryopening.module.ts ***!
  \*******************************************************************/
/*! exports provided: DataentryopeningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataentryopeningPageModule", function() { return DataentryopeningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dataentryopening_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataentryopening-routing.module */ "./src/app/pages/dataentryopening/dataentryopening-routing.module.ts");
/* harmony import */ var _dataentryopening_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataentryopening.page */ "./src/app/pages/dataentryopening/dataentryopening.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var DataentryopeningPageModule = /** @class */ (function () {
    function DataentryopeningPageModule() {
    }
    DataentryopeningPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _dataentryopening_routing_module__WEBPACK_IMPORTED_MODULE_5__["DataentryopeningPageRoutingModule"]
            ],
            declarations: [_dataentryopening_page__WEBPACK_IMPORTED_MODULE_6__["DataentryopeningPage"]]
        })
    ], DataentryopeningPageModule);
    return DataentryopeningPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dataentryopening/dataentryopening.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dataentryopening/dataentryopening.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.submitButton {\n  height: 48px;\n  width: 35%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRG93bmxvYWRzL3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvZGF0YWVudHJ5b3BlbmluZy9kYXRhZW50cnlvcGVuaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGF0YWVudHJ5b3BlbmluZy9kYXRhZW50cnlvcGVuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNGSjs7QURLQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRElBO0VBRUksWUFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGF0YWVudHJ5b3BlbmluZy9kYXRhZW50cnlvcGVuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLkJhY2tCdXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5zdWJtaXRCdXR0b257XG4gICBcbiAgICBoZWlnaHQ6IDQ4cHg7XHRcbiAgICB3aWR0aDogMzUlOyBcbiAgXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcdFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMTVweDtcdFxuICAgIFxufSIsIi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5CYWNrQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zdWJtaXRCdXR0b24ge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAzNSU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dataentryopening/dataentryopening.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dataentryopening/dataentryopening.page.ts ***!
  \*****************************************************************/
/*! exports provided: DataentryopeningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataentryopeningPage", function() { return DataentryopeningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");









var DataentryopeningPage = /** @class */ (function () {
    function DataentryopeningPage(dataAdapter, location, loader, toast, apiCall, router) {
        this.dataAdapter = dataAdapter;
        this.location = location;
        this.loader = loader;
        this.toast = toast;
        this.apiCall = apiCall;
        this.router = router;
        this.openingModel = {};
        this.fuelType = [
            { "type": "Petrol" },
            { "type": "Diesel" }
        ];
        this.dataAdapter.setLocale("en-GB");
    }
    DataentryopeningPage.prototype.ngOnInit = function () {
        this.openingModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
    };
    DataentryopeningPage.prototype.goBackword = function () {
        this.location.back();
    };
    DataentryopeningPage.prototype.openingBalanceSubmit = function () {
        var _this = this;
        this.loader.presentLoading();
        var send_date = {};
        send_date['date'] = this.openingModel['date'];
        send_date['type'] = this.openingModel['type'];
        send_date['balance'] = this.openingModel['openingbalance'];
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "balance";
        this.apiCall.postWAu(url, send_date).subscribe(function (MyResponse) {
            var msg = MyResponse['message'];
            _this.presentToast(msg);
            _this.router.navigate(['/dataentrycredit']);
            _this.loader.stopLoading();
        }, function (error) {
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
            console.log(error.error.message);
        });
    };
    DataentryopeningPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
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
    DataentryopeningPage.prototype.changeClient = function (value) {
        if (value == "Petrol") {
            this.openingModel['type'] = 0;
        }
        else {
            this.openingModel['type'] = 1;
        }
        console.log("type : " + this.openingModel['type']);
    };
    DataentryopeningPage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_8__["LoaderserviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__["ApicallService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    DataentryopeningPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataentryopening',
            template: __webpack_require__(/*! raw-loader!./dataentryopening.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dataentryopening/dataentryopening.page.html"),
            styles: [__webpack_require__(/*! ./dataentryopening.page.scss */ "./src/app/pages/dataentryopening/dataentryopening.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_8__["LoaderserviceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__["ApicallService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], DataentryopeningPage);
    return DataentryopeningPage;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var LoaderserviceService = /** @class */ (function () {
    function LoaderserviceService(loadingController) {
        this.loadingController = loadingController;
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
    LoaderserviceService.prototype.loadingPresent = function (message, duration) {
        if (message === void 0) { message = null; }
        if (duration === void 0) { duration = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({ message: message, duration: duration })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    LoaderserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], LoaderserviceService);
    return LoaderserviceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dataentryopening-dataentryopening-module-es5.js.map