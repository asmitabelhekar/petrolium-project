(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-debitamount-debitamount-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/debitamount/debitamount.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/debitamount/debitamount.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Debit Amount\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center\" style=\"margin-top:5%\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field style=\"width:90%\">\n        <input type=\"text\"\n               placeholder=\"Customer Name\"\n               aria-label=\"Number\"\n               matInput\n               [(ngModel)]=\"userModel.customername\"\n               [formControl]=\"myControl\"\n               [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n          <!-- <mat-option  [value]=\"option\" *ngIf=\"recordNotPresent == 1\">\n            Record not present\n           </mat-option> -->\n           <mat-option  [value]=\"option\" *ngIf=\"recordNotPresent == 1\"  (click)=\"addCustomer()\">\n             Add Customer\n            </mat-option>\n           <!-- <button (click)=\"addCustomer()\" *ngIf=\"recordNotPresent == 1\" style=\"width:100%; height:50px\">Add Customer</button> -->\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%\">\n          <mat-label>Choose a date</mat-label>\n          <input matInput #input=\"ngModel\" [(ngModel)]=\"userModel.date\" [min]=\"minDate\" [max]=\"today\"\n            [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [disabled]=\"true\">\n          <!-- <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"userModel.date\" [max]=\"maxDate\"> -->\n          <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"true\"></mat-datepicker-toggle>\n          <mat-datepicker #picker (selectedChanged)=\"onDate($event)\"></mat-datepicker>\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n        <mat-form-field style=\"width:90%\">\n          <mat-label>Add Debit</mat-label>\n              <input matInput type=\"number\" name=\"payment\" [(ngModel)]=\"userModel.payment\"\n                #payment=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-form-field style=\"width:90%;\">\n          <mat-label>Note</mat-label>\n          <textarea matInput class=\"form-control \" name=\"note\" [(ngModel)]=\"userModel.note\" #note=\"ngModel\"\n            pattern=\"[a-zA-z.  ]+$\" placeholder=\"Note\"></textarea>\n        </mat-form-field>\n      </div>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:10%\" >\n        <button mat-raised-button [disabled]=\"payment.invalid \" class=\"submitButton\" (click)=\"debitAmount()\">Debit</button>\n      </div>\n    \n\n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/debitamount/debitamount-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/debitamount/debitamount-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DebitamountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitamountPageRoutingModule", function() { return DebitamountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _debitamount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debitamount.page */ "./src/app/pages/debitamount/debitamount.page.ts");




var routes = [
    {
        path: '',
        component: _debitamount_page__WEBPACK_IMPORTED_MODULE_3__["DebitamountPage"]
    }
];
var DebitamountPageRoutingModule = /** @class */ (function () {
    function DebitamountPageRoutingModule() {
    }
    DebitamountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DebitamountPageRoutingModule);
    return DebitamountPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/debitamount/debitamount.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/debitamount/debitamount.module.ts ***!
  \*********************************************************/
/*! exports provided: DebitamountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitamountPageModule", function() { return DebitamountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _debitamount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debitamount-routing.module */ "./src/app/pages/debitamount/debitamount-routing.module.ts");
/* harmony import */ var _debitamount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debitamount.page */ "./src/app/pages/debitamount/debitamount.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var DebitamountPageModule = /** @class */ (function () {
    function DebitamountPageModule() {
    }
    DebitamountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _debitamount_routing_module__WEBPACK_IMPORTED_MODULE_5__["DebitamountPageRoutingModule"]
            ],
            declarations: [_debitamount_page__WEBPACK_IMPORTED_MODULE_6__["DebitamountPage"]]
        })
    ], DebitamountPageModule);
    return DebitamountPageModule;
}());



/***/ }),

/***/ "./src/app/pages/debitamount/debitamount.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/debitamount/debitamount.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitButton {\n  height: 48px;\n  width: 30%;\n  margin-left: 15%;\n  margin-right: 15%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9kZWJpdGFtb3VudC9kZWJpdGFtb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RlYml0YW1vdW50L2RlYml0YW1vdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDRCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZWJpdGFtb3VudC9kZWJpdGFtb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0QnV0dG9ue1xuICAgXG4gICAgaGVpZ2h0OiA0OHB4O1x0XG4gICAgd2lkdGg6IDMwJTsgXG4gICAgIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICAgIGNvbG9yOiAjRkZGRkZGO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICBcblxufVxuIiwiLnN1Ym1pdEJ1dHRvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/debitamount/debitamount.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/debitamount/debitamount.page.ts ***!
  \*******************************************************/
/*! exports provided: DebitamountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitamountPage", function() { return DebitamountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");









var DebitamountPage = /** @class */ (function () {
    function DebitamountPage(toast, apiCall, loader, router) {
        this.toast = toast;
        this.apiCall = apiCall;
        this.loader = loader;
        this.router = router;
        this.customerList = [];
        this.userModel = {};
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.autoCompleteArray = [];
        this.recordNotPresent = 0;
    }
    DebitamountPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getCustomerList();
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filter(value); }));
        this.userModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
        var loginStatus = localStorage.getItem("loginStatus");
    };
    DebitamountPage.prototype.getCustomerList = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "customers";
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.getCusstomers = MyResponse['result']['list'];
            for (var i = 0; i < _this.getCusstomers.length; i++) {
                var fullName = _this.getCusstomers[i]['firstName'] + " " + _this.getCusstomers[i]['lastName'];
                var id = _this.getCusstomers[i]['id'];
                _this.customerList.push(fullName);
                var getObject = {
                    "name": fullName,
                    "id": id
                };
                _this.autoCompleteArray.push(getObject);
            }
            console.log("success:" + _this.getCusstomers);
        }, function (error) {
            _this.presentToast("Something went wrong");
        });
    };
    DebitamountPage.prototype.addCustomer = function () {
        this.recordNotPresent = 0;
        this.checkRecordStatus = "add";
        var detailCustomerdata = {
            "fname": "",
            "mobile": "",
            "address": "",
            "email": "",
            "checkstatus": this.checkRecordStatus,
            "note": ""
        };
        this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
    };
    DebitamountPage.prototype.ionViewWillLeave = function () {
        this.recordNotPresent = 0;
    };
    DebitamountPage.prototype.ionViewDidLeave = function () {
        this.recordNotPresent = 0;
    };
    DebitamountPage.prototype.convert = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    };
    DebitamountPage.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        if (this.customerList.filter(function (option) { return option.toLowerCase().includes(filterValue); }) == undefined || this.customerList.filter(function (option) { return option.toLowerCase().includes(filterValue); }) == "" || this.customerList.filter(function (option) { return option.toLowerCase().includes(filterValue); }) == null) {
            this.recordNotPresent = 1;
        }
        return this.customerList.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    DebitamountPage.prototype.debitAmount = function () {
        var _this = this;
        this.loader.presentLoading();
        for (var j = 0; j < this.autoCompleteArray.length; j++) {
            if (this.userModel['customername'] == this.autoCompleteArray[j]['name']) {
                this.userModel['id'] = this.autoCompleteArray[j]['id'];
            }
        }
        if (this.userModel['id'] == undefined || this.userModel['id'] == "" || this.userModel['id'] == null) {
            this.presentToast("Customer of this name is not present .Please add customer first.");
            return;
        }
        var send_date = {};
        send_date['date'] = this.userModel['date'];
        send_date['amount'] = this.userModel['payment'] * -1;
        if (this.userModel['note'] != "") {
            send_date['message'] = this.userModel['note'];
        }
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "customers/" + this.userModel['id'] + "/passbook";
        this.apiCall.postWAu(this.url, send_date).subscribe(function (MyResponse) {
            _this.router.navigate(['/home']);
            var msg = MyResponse['message'];
            _this.presentToast(msg);
            _this.loader.stopLoading();
        }, function (error) {
            ;
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
            console.log(error.error.message);
        });
    };
    DebitamountPage.prototype.presentToast = function (message) {
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
    DebitamountPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_8__["LoaderserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DebitamountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-debitamount',
            template: __webpack_require__(/*! raw-loader!./debitamount.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/debitamount/debitamount.page.html"),
            styles: [__webpack_require__(/*! ./debitamount.page.scss */ "./src/app/pages/debitamount/debitamount.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_8__["LoaderserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DebitamountPage);
    return DebitamountPage;
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
//# sourceMappingURL=pages-debitamount-debitamount-module-es5.js.map