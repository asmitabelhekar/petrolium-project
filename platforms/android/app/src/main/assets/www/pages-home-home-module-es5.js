(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Customers\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"width:100%\">\n\n  <div fxLayoutAlign=\"center center\">\n    <ion-row style=\"width:95%; border : 1px solid rgb(117, 115, 115); border-radius: 15px; margin:15px\">\n      <ion-col size=\"1\">\n        <ion-icon name=\"search\" style=\"width:20px; height: 20px;margin-top:5px\"></ion-icon>  \n        </ion-col>\n      <ion-col size=\"11\" >\n        <input type=\"text\" [(ngModel)]=\"getSearchKey\" (input)=\"OnInput(getSearchKey)\" placeholder=\"Search\" style=\"width:96%;margin-right:2%;\"/>\n      </ion-col>\n    </ion-row>\n  </div>\n\n \n  \n<div style=\"margin-top:10px; \" *ngIf=\"showNoRecordsFound == 1\">\n  <div *ngFor=\"let daata of getCusstomers; index as i\" >\n    <ion-item (click)=\"getBalanceDetail(daata)\" style=\"margin-left:-20px\">\n      <div style=\"margin-left:30px\">\n       \n    <button style=\"width:35px; height: 35px; border-radius: 50%;margin-right: 15px ; color: #ffffff\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even' \">{{daata.firstName.charAt(0) | uppercase}}</button>\n      </div>\n      {{daata.firstName | titlecase}}  {{daata.lastName | titlecase}}\n    </ion-item>\n  </div>\n</div>\n <div *ngIf=\"showNoRecordsFound == 0\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top: 25%;\">\n   <h3>No records found</h3>\n </div>\n<div>\n  <button (click)=\"addCustomer()\" align=\"center\" style=\"position:fixed; width:60px;height:60px;right:30px; bottom:20px; background-color: #2e2d2d;border-radius: 50%;\"><ion-icon style=\"width:30px; height: 30px;color:white\" name=\"add\"></ion-icon></button>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.new-background-color {\n  --background: #494747;\n}\n\n.odd {\n  background-color: #f08132;\n}\n\n.even {\n  background-color: #ee38b7;\n}\n\n.cl-center-title {\n  margin-top: 5%;\n}\n\n.cat-search {\n  position: absolute;\n  border: none;\n  outline: none;\n  margin-top: 25px;\n  height: 75px;\n  left: 50%;\n  width: 100%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: linear-gradient(120deg, #3498db, #8e44ad);\n}\n\ninput {\n  border: none;\n}\n\ninput:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBR0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLHFEQUFBO0FDREE7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FETUE7RUFDRSxhQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gIC0tYmFja2dyb3VuZDogIzQ5NDc0Nztcbn1cblxuLm9kZHtcbiAgYmFja2dyb3VuZC1jb2xvcjojZjA4MTMyO1xufVxuLmV2ZW57XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDU2LCAxODMpO1xufVxuXG4uY2wtY2VudGVyLXRpdGxle1xuICBtYXJnaW4tdG9wOjUlO1xufVxuXG4uY2F0LXNlYXJjaFxue1xuLy8gbWFyZ2luLXRvcDogNXB4O1xucG9zaXRpb246IGFic29sdXRlO1xuLy8gdG9wOjUlO1xuYm9yZGVyOiBub25lO1xub3V0bGluZTogbm9uZTtcbm1hcmdpbi10b3A6IDI1cHg7XG5oZWlnaHQ6IDc1cHg7XG5sZWZ0OiA1MCU7XG53aWR0aDogMTAwJTtcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCMzNDk4ZGIsIzhlNDRhZCk7XG5cbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0NzQ3O1xufVxuXG4ub2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwODEzMjtcbn1cblxuLmV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzOGI3O1xufVxuXG4uY2wtY2VudGVyLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5jYXQtc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzNDk4ZGIsICM4ZTQ0YWQpO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");







var HomePage = /** @class */ (function () {
    function HomePage(menuCntrl, router, events, loader, toast, apiCall) {
        this.menuCntrl = menuCntrl;
        this.router = router;
        this.events = events;
        this.loader = loader;
        this.toast = toast;
        this.apiCall = apiCall;
        this.userModel = {};
        this.getCusstomers = [];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "customers?" + "size=" + 1000;
        this.getCustomerList(this.url);
        this.getCusstomers.sort(function (a, b) { return a.name.localeCompare(b.name); });
        this.menuCntrl.enable(true);
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.getCustomerList(this.url);
        this.getPetrolAmount();
        this.getDieselAmount();
        this.events.subscribe('Event-AddCustomer', function () {
            _this.getCustomerList(_this.url);
        });
    };
    HomePage.prototype.addCustomer = function () {
        this.checkRecordStatus = "add";
        var detailCustomerdata = {
            "fname": "",
            "mobile": "",
            "address": "",
            "email": "",
            "checkstatus": this.checkRecordStatus,
            "note": "",
            "vehicles": []
        };
        this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
    };
    HomePage.prototype.getBalanceDetail = function (data) {
        var detailData = {
            "id": data.id,
            "name": data.firstName,
            "lname": data.lastName,
            "mobile": data.mobile,
            "vehicles": data.vehicles
        };
        this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }]);
    };
    HomePage.prototype.getCustomerList = function (url) {
        var _this = this;
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.getCusstomers = MyResponse['result']['list'];
            if (_this.getCusstomers.length > 0) {
                _this.showNoRecordsFound = 1;
            }
            else {
                _this.showNoRecordsFound = 0;
            }
            console.log("success:" + _this.getCusstomers);
            // this.loader.stopLoading();
        }, function (error) {
            // this.loader.stopLoading();
            _this.presentToast("Something went wrong");
        });
    };
    HomePage.prototype.presentToast = function (message) {
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
    HomePage.prototype.OnInput = function (event) {
        this.serchKey = (event);
        if (this.serchKey.length > 3) {
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "customers?" + "search=" + this.serchKey;
            this.getCustomerList(this.url);
        }
        else {
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "customers?" + "size=" + 1000;
            this.getCustomerList(this.url);
        }
    };
    HomePage.prototype.getItems = function () {
        console.log("get events:" + this.autocomplete);
    };
    HomePage.prototype.getDieselAmount = function () {
        var _this = this;
        this.loader.presentLoading();
        var geturl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "price";
        this.apiCall.get(geturl).subscribe(function (MyResponse) {
            _this.getData = MyResponse['result']['list'];
            for (var k = 0; k < _this.getData.length; k++) {
                if (_this.getData[k]['type'] == 1) {
                    _this.userModel['dieselamount'] = _this.getData[k]['price'];
                    localStorage.setItem("dieselPrice", _this.getData[k]['price']);
                    console.log("diesel price:" + _this.getData[k]['price']);
                    return;
                }
            }
            _this.loader.stopLoading();
        }, function (error) {
            alert("display data:" + error);
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
        });
    };
    HomePage.prototype.getPetrolAmount = function () {
        var _this = this;
        this.loader.presentLoading();
        var geturl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "price";
        this.apiCall.get(geturl).subscribe(function (MyResponse) {
            _this.getData = MyResponse['result']['list'];
            for (var k = 0; k < _this.getData.length; k++) {
                if (_this.getData[k]['type'] == 0) {
                    _this.userModel['petrolamount'] = _this.getData[k]['price'];
                    localStorage.setItem("petrolPrice", _this.getData[k]['price']);
                    console.log("petrol price:" + _this.getData[k]['price']);
                    return;
                }
            }
            _this.loader.stopLoading();
        }, function (error) {
            alert("display data:" + error);
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_6__["LoaderserviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_6__["LoaderserviceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]])
    ], HomePage);
    return HomePage;
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
//# sourceMappingURL=pages-home-home-module-es5.js.map