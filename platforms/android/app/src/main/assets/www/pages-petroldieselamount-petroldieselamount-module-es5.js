(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-petroldieselamount-petroldieselamount-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/petroldieselamount/petroldieselamount.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/petroldieselamount/petroldieselamount.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Petrol/Diesel\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100;\">\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top: 3%;\">\n\n    <h5>Fuel type record</h5>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"cl_width\" style=\"margin-top: 3%;\">\n    <mat-form-field class=\"cl_width\">\n      <input matInput class=\"form-control \" name=\"petrolamount\" type=\"tel\"\n        id=\"petrolamount\" required [(ngModel)]=\"userModel.petrolamount\" #petrolamount=\"ngModel\" pattern=\"[0-9.  ]+$\"\n        placeholder=\"Petrol\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"petrolamount.invalid && (petrolamount.dirty || petrolamount.touched)\">\n            Petrol Is Requird\n          </div>\n        </div>\n      </mat-error>\n    </mat-form-field>\n  </div>\n\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\"  class=\"cl_width\">\n    <mat-form-field class=\"cl_width\">\n      <input matInput class=\"form-control \" name=\"dieselamount\" type=\"tel\" \n        id=\"dieselamount\" required [(ngModel)]=\"userModel.dieselamount\" #dieselamount=\"ngModel\" pattern=\"[0-9 . ]+$\"\n        placeholder=\"Diesel\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"dieselamount.invalid && (dieselamount.dirty || dieselamount.touched)\">\n            Diesel Is Requird\n          </div>\n        </div>\n      </mat-error>\n    </mat-form-field>\n  </div>\n\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"cl_margin_top\" style=\"width:100%\">\n    <button mat-button [disabled]=\"dieselamount.invalid || petrolamount.invalid\" (click)=\"fuelTypeBalanceSubmit()\" class=\"submitButton\">Submit</button>\n  </div>\n</div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/petroldieselamount/petroldieselamount-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/petroldieselamount/petroldieselamount-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PetroldieselamountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetroldieselamountPageRoutingModule", function() { return PetroldieselamountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _petroldieselamount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./petroldieselamount.page */ "./src/app/pages/petroldieselamount/petroldieselamount.page.ts");




var routes = [
    {
        path: '',
        component: _petroldieselamount_page__WEBPACK_IMPORTED_MODULE_3__["PetroldieselamountPage"]
    }
];
var PetroldieselamountPageRoutingModule = /** @class */ (function () {
    function PetroldieselamountPageRoutingModule() {
    }
    PetroldieselamountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PetroldieselamountPageRoutingModule);
    return PetroldieselamountPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/petroldieselamount/petroldieselamount.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/petroldieselamount/petroldieselamount.module.ts ***!
  \***********************************************************************/
/*! exports provided: PetroldieselamountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetroldieselamountPageModule", function() { return PetroldieselamountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _petroldieselamount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./petroldieselamount-routing.module */ "./src/app/pages/petroldieselamount/petroldieselamount-routing.module.ts");
/* harmony import */ var _petroldieselamount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./petroldieselamount.page */ "./src/app/pages/petroldieselamount/petroldieselamount.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");









var PetroldieselamountPageModule = /** @class */ (function () {
    function PetroldieselamountPageModule() {
    }
    PetroldieselamountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _petroldieselamount_routing_module__WEBPACK_IMPORTED_MODULE_5__["PetroldieselamountPageRoutingModule"]
            ],
            declarations: [_petroldieselamount_page__WEBPACK_IMPORTED_MODULE_6__["PetroldieselamountPage"]]
        })
    ], PetroldieselamountPageModule);
    return PetroldieselamountPageModule;
}());



/***/ }),

/***/ "./src/app/pages/petroldieselamount/petroldieselamount.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/petroldieselamount/petroldieselamount.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitButton {\n  height: 48px;\n  width: 35%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n\n.cl_margin_top {\n  margin-top: 5%;\n}\n\n.cl_width {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9wZXRyb2xkaWVzZWxhbW91bnQvcGV0cm9sZGllc2VsYW1vdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGV0cm9sZGllc2VsYW1vdW50L3BldHJvbGRpZXNlbGFtb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBRUksWUFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ2pCSjs7QURxQkE7RUFDSSxjQUFBO0FDbEJKOztBRHFCQTtFQUNJLFVBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZXRyb2xkaWVzZWxhbW91bnQvcGV0cm9sZGllc2VsYW1vdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5zdWJtaXRCdXR0b257XG4gICBcbi8vICAgICAvLyBoZWlnaHQ6IDQ4cHg7XHRcbi8vICAgICAvLyB3aWR0aDogMzUlOyBcbi8vICAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4vLyAgICAgcGFkZGluZy10b3A6MTBweDtcbi8vICAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuLy8gICAgIGNvbG9yOiAjRkZGRkZGO1x0XG4vLyAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbi8vICAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICBcbi8vIH1cblxuLnN1Ym1pdEJ1dHRvbntcbiAgIFxuICAgIGhlaWdodDogNDhweDtcdFxuICAgIHdpZHRoOiAzNSU7IFxuICBcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1x0XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxNXB4O1x0XG4gICAgXG59XG5cbi5jbF9tYXJnaW5fdG9we1xuICAgIG1hcmdpbi10b3A6NSVcbn1cblxuLmNsX3dpZHRoe1xuICAgIHdpZHRoOjk1JVxufSIsIi5zdWJtaXRCdXR0b24ge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAzNSU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2xfbWFyZ2luX3RvcCB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uY2xfd2lkdGgge1xuICB3aWR0aDogOTUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/petroldieselamount/petroldieselamount.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/petroldieselamount/petroldieselamount.page.ts ***!
  \*********************************************************************/
/*! exports provided: PetroldieselamountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetroldieselamountPage", function() { return PetroldieselamountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var PetroldieselamountPage = /** @class */ (function () {
    // url = "http://www.mocky.io/v2/5e4fc5ef3000005100226b7f";
    function PetroldieselamountPage(toasController, loader, apiCall) {
        this.toasController = toasController;
        this.loader = loader;
        this.apiCall = apiCall;
        this.userModel = {};
        this.url = "http://www.mocky.io/v2/5e4fc0663000009000226b53";
    }
    PetroldieselamountPage.prototype.ngOnInit = function () {
        // this.getPetrolDieselAmount();
        this.getPetrolAmount();
        this.getDieselAmount();
        if (this.userModel['petrolamount'] == null || this.userModel['petrolamount'] == "" || this.userModel['petrolamount'] == undefined) {
            this.checkStatus = "add";
        }
        else {
            this.checkStatus = "update";
        }
        if (this.userModel['dieselamount'] == null || this.userModel['dieselamount'] == "" || this.userModel['dieselamount'] == undefined) {
            this.checkStatusDiesel = "add";
        }
        else {
            this.checkStatusDiesel = "update";
        }
    };
    PetroldieselamountPage.prototype.submit = function () {
        if (this.checkStatus == "add") {
        }
        else if (this.checkStatus == "update") {
        }
        else {
        }
        this.presentToast("Amount submited");
    };
    PetroldieselamountPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toasController.create({
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
    PetroldieselamountPage.prototype.getDieselAmount = function () {
        var _this = this;
        this.loader.presentLoading();
        var geturl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "price";
        this.apiCall.get(geturl).subscribe(function (MyResponse) {
            _this.getData = MyResponse['result']['list'];
            for (var k = 0; k < _this.getData.length; k++) {
                if (_this.getData[k]['type'] == 1) {
                    _this.userModel['type'] = 1;
                    _this.userModel['dieselamount'] = _this.getData[k]['price'];
                    if (_this.getData[k]['price'] == null || _this.getData[k]['price'] == "" || _this.getData[k]['price'] == undefined) {
                        _this.checkStatusDiesel = "add";
                    }
                    else {
                        _this.checkStatusDiesel = "update";
                    }
                    _this.userModel['dId'] = _this.getData[k]['id'];
                    return;
                }
                localStorage.setItem("dieselPrice", _this.userModel['dieselamount']);
            }
            _this.loader.stopLoading();
        }, function (error) {
            alert("display data:" + error);
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
        });
    };
    PetroldieselamountPage.prototype.getPetrolAmount = function () {
        var _this = this;
        this.loader.presentLoading();
        var geturl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "price";
        this.apiCall.get(geturl).subscribe(function (MyResponse) {
            _this.getData = MyResponse['result']['list'];
            for (var k = 0; k < _this.getData.length; k++) {
                if (_this.getData[k]['type'] == 0) {
                    _this.userModel['type'] = 0;
                    _this.userModel['petrolamount'] = _this.getData[k]['price'];
                    if (_this.getData[k]['price'] == null || _this.getData[k]['price'] == "" || _this.getData[k]['price'] == undefined) {
                        _this.checkStatus = "add";
                    }
                    else {
                        _this.checkStatus = "update";
                    }
                    _this.userModel['pId'] = _this.getData[k]['id'];
                    return;
                }
                localStorage.setItem("petrolPrice", _this.userModel['petrolamount']);
            }
            _this.loader.stopLoading();
        }, function (error) {
            alert("display data:" + error);
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
        });
    };
    PetroldieselamountPage.prototype.fuelTypeBalanceSubmit = function () {
        this.loader.presentLoading();
        this.submitPetrolAmount();
        this.submitDieselAmount();
    };
    PetroldieselamountPage.prototype.submitPetrolAmount = function () {
        var _this = this;
        var send_date = {};
        send_date['type'] = 0;
        send_date['price'] = this.userModel['petrolamount'];
        if (this.checkStatus == "add") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "price";
            this.apiCall.postWAu(url, send_date).subscribe(function (MyResponse) {
                var msg = MyResponse['message'];
                localStorage.setItem("petrolPrice", _this.userModel['petrolamount']);
                _this.presentToast(msg);
                _this.loader.stopLoading();
            }, function (error) {
                _this.loader.stopLoading();
                _this.presentToast("Something went wrong");
                console.log(error.error.message);
            });
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "price/" + this.userModel['pId'];
            this.apiCall.put(url, send_date).subscribe(function (MyResponse) {
                var msg = MyResponse['message'];
                _this.presentToast(msg);
                localStorage.setItem("petrolPrice", _this.userModel['petrolamount']);
                _this.loader.stopLoading();
            }, function (error) {
                _this.loader.stopLoading();
                _this.presentToast("Something went wrong");
                console.log(error.error.message);
            });
        }
    };
    PetroldieselamountPage.prototype.submitDieselAmount = function () {
        var _this = this;
        var send_date = {};
        send_date['type'] = 1;
        send_date['price'] = this.userModel['dieselamount'];
        if (this.checkStatusDiesel == "add") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "price";
            this.apiCall.postWAu(url, send_date).subscribe(function (MyResponse) {
                var msg = MyResponse['message'];
                localStorage.setItem("dieselPrice", _this.userModel['dieselamount']);
                _this.presentToast(msg);
                _this.loader.stopLoading();
            }, function (error) {
                _this.loader.stopLoading();
                _this.presentToast("Something went wrong");
                console.log(error.error.message);
            });
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "price/" + this.userModel['dId'];
            this.apiCall.put(url, send_date).subscribe(function (MyResponse) {
                var msg = MyResponse['message'];
                localStorage.setItem("dieselPrice", _this.userModel['dieselamount']);
                _this.presentToast(msg);
                _this.loader.stopLoading();
            }, function (error) {
                _this.loader.stopLoading();
                _this.presentToast("Something went wrong");
                console.log(error.error.message);
            });
        }
    };
    PetroldieselamountPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_3__["LoaderserviceService"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"] }
    ]; };
    PetroldieselamountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-petroldieselamount',
            template: __webpack_require__(/*! raw-loader!./petroldieselamount.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/petroldieselamount/petroldieselamount.page.html"),
            styles: [__webpack_require__(/*! ./petroldieselamount.page.scss */ "./src/app/pages/petroldieselamount/petroldieselamount.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_3__["LoaderserviceService"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]])
    ], PetroldieselamountPage);
    return PetroldieselamountPage;
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
//# sourceMappingURL=pages-petroldieselamount-petroldieselamount-module-es5.js.map