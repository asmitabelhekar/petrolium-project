(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"width:100%\">\n<div style=\"position:fixed; top:50px ; z-index: 1;background-color: white;width:97%; margin:5px\">\n  <div align=\"left\" style=\"width:100%;z-index: -1;\">\n    <ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\"></ion-searchbar>\n    <ion-list >\n        <ion-item *ngFor=\"let item of items\">{{ item }}</ion-item>\n    </ion-list>\n  \n  </div>\n\n  <!-- <div  fxLayout=\"row\" fxLayoutAlign=\"start start\" (click)=\"addCustomer()\" style=\"margin-left:10px;margin-top:-5px; \">\n    <button mat-raised-button style=\"  border: 1px solid rgb(63, 62, 62);padding:10px;margin-left:5 px; border-radius: 5px;\">Add Customer</button>\n  </div> -->\n</div>\n  \n <!-- <ion-icon name=\"person-add\" style=\"color:rgb(18, 118, 199);width:20px; height: 20px; margin-right:8px;margin-top: -4px\"></ion-icon>\n    <ion-label style=\"color:rgb(18, 118, 199); \" >Add Customer</ion-label> -->\n\n<div style=\"margin-top:20%\">\n  <div *ngFor=\"let daata of getCusstomers; index as i\" >\n    <ion-item (click)=\"getBalanceDetail(daata)\" style=\"margin-left:-20px\">\n      <div style=\"margin-left:30px\">\n       \n    <button style=\"width:35px; height: 35px; border-radius: 50%;margin-right: 15px ; color: #ffffff\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even' \">{{daata.firstName.charAt(0) | uppercase}}</button>\n      </div>\n      {{daata.firstName | titlecase}}  {{daata.lastName | titlecase}}\n    </ion-item>\n  </div>\n</div>\n \n<div>\n  <button (click)=\"addCustomer()\" align=\"center\" style=\"position:fixed; width:60px;height:60px;right:30px; bottom:20px; background-color: #2e2d2d;border-radius: 50%;\"><ion-icon style=\"width:30px; height: 30px;color:white\" name=\"add\"></ion-icon></button>\n</div>\n\n</ion-content>\n"

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

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.new-background-color {\n  --background: #494747;\n}\n\n.odd {\n  background-color: #f08132;\n}\n\n.even {\n  background-color: #ee38b7;\n}\n\n.cl-center-title {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRG93bmxvYWRzL3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0NzQ3O1xufVxuXG4ub2Rke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmMDgxMzI7XG59XG4uZXZlbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNTYsIDE4Myk7XG59XG5cbi5jbC1jZW50ZXItdGl0bGV7XG4gIG1hcmdpbi10b3A6NSU7XG59IiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICM0OTQ3NDc7XG59XG5cbi5vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MTMyO1xufVxuXG4uZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTM4Yjc7XG59XG5cbi5jbC1jZW50ZXItdGl0bGUge1xuICBtYXJnaW4tdG9wOiA1JTtcbn0iXX0= */"

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
    // getCusstomers = [
    //   {
    //     "name": "llllllllll jjjjjjjjjjj",
    //     "mobile": "",
    //     "amount": "2500",
    //     "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    //     "email": "lllll@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "smitaaa belhekar",
    //     "mobile": "1234567890",
    //     "amount": "1000",
    //     "address": "Ahmednagar",
    //     "email": "smitaaa@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "asmita belhekar",
    //     "mobile": "9527902622",
    //     "amount": "5000",
    //     "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    //     "email": "asmita@gmail.com",
    //     "note": ""
    //   },
    //   {
    //     "name": "sejal belhekar",
    //     "mobile": "1234567890",
    //     "amount": "2500",
    //     "address": "Pune",
    //     "email": "",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "priya abc",
    //     "mobile": "1234567890",
    //     "amount": "2500",
    //     "address": "Mumbai",
    //     "email": "priya@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "asmi belhekar",
    //     "mobile": "9527902622",
    //     "amount": "1000",
    //     "address": "Ahmednagar",
    //     "email": "asmi@gmail.com",
    //     "note": ""
    //   },
    //   {
    //     "name": "kiran kokate",
    //     "mobile": "9096467346",
    //     "amount": "5000",
    //     "address": "Pune",
    //     "email": "kiran@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "ccccc dddd",
    //     "mobile": "1234567890",
    //     "amount": "2500",
    //     "address": "Pune",
    //     "email": "ccccc@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "dhananjay raut",
    //     "mobile": "1234567890",
    //     "amount": "2500",
    //     "address": "Mumbai",
    //     "email": "dhananjay@gmail.com",
    //     "note": ""
    //   },
    //   {
    //     "name": "cccc ppppp",
    //     "mobile": "1234567890",
    //     "amount": "1000",
    //     "address": "Ahmednagar",
    //     "email": "ccc@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "cccc hhhhhhh ",
    //     "mobile": "1234567890",
    //     "amount": "5000",
    //     "address": "Pune",
    //     "email": "chchch@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "aaaaaaa zzzz",
    //     "mobile": "1234567890",
    //     "amount": "2500",
    //     "address": "",
    //     "email": "azazazaz@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "smitaaa belhekar",
    //     "mobile": "1234567890",
    //     "amount": "1000",
    //     "address": "Ahmednagar",
    //     "email": "smitaaa@gmail.com",
    //     "note": ""
    //   },
    //   {
    //     "name": "aaaaaaaa   zzzz",
    //     "mobile": "1234567890",
    //     "amount": "2500",
    //     "address": "Pune",
    //     "email": "azazazaz@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "smitaaa belhekar",
    //     "mobile": "1234567890",
    //     "amount": "1000",
    //     "address": "Ahmednagar",
    //     "email": "smitaaa@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "asmita belhekar",
    //     "mobile": "9527902622",
    //     "amount": "5000",
    //     "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    //     "email": "asmita@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "sejal belhekar",
    //     "mobile": "1234567890",
    //     "amount": "2500",
    //     "address": "Pune",
    //     "email": "",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "priya abc",
    //     "mobile": "1234567890",
    //     "amount": "2500",
    //     "address": "Mumbai",
    //     "email": "priya@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "asmi belhekar",
    //     "mobile": "9527902622",
    //     "amount": "1000",
    //     "address": "Ahmednagar",
    //     "email": "asmi@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "kiran kokate",
    //     "mobile": "9096467346",
    //     "amount": "5000",
    //     "address": "Pune",
    //     "email": "kiran@gmail.com",
    //     "note": "fgfgf"
    //   },
    //   {
    //     "name": "ccccc dddd",
    //     "mobile": "1234567890",
    //     "amount": "2500",
    //     "address": "Pune",
    //     "email": "ccccc@gmail.com",
    //     "note": "fgfgf"
    //   }
    // ]
    function HomePage(menuCntrl, router, events, loader, toast, apiCall) {
        this.menuCntrl = menuCntrl;
        this.router = router;
        this.events = events;
        this.loader = loader;
        this.toast = toast;
        this.apiCall = apiCall;
        this.getCusstomers = [];
        this.getCustomerList();
        this.getCusstomers.sort(function (a, b) { return a.name.localeCompare(b.name); });
        this.menuCntrl.enable(true);
        // this.makePdf();
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.getCustomerList();
        this.events.subscribe('Event-AddCustomer', function () {
            _this.getCustomerList();
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
            "note": ""
        };
        this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
    };
    HomePage.prototype.getBalanceDetail = function (data) {
        // let detailData =
        // {
        //   "id" : data.id,
        //   "name": data.firstName,
        //   "mobile": data.mobile,
        //   "address": data.address,
        //   "lname": data.lastName,
        //   "amount": data.payment,
        //   "email": data.email,
        //   "note": data.note,
        // }
        var detailData = {
            "id": data.id,
            "name": data.firstName,
            "lname": data.lastName,
            "mobile": data.mobile
        };
        this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }]);
        // this.router.navigate(['showbalancerecord' ]);
    };
    // async presentLoading() {
    //   const loading = await this.loadingController.create({
    //     message: 'Please wait...',
    //     // spinner: null
    //   });
    //   await loading.present();
    //   setTimeout(() => {
    //     loading.dismiss();
    //   }, 6000);
    //   const { role, data } = await loading.onDidDismiss();
    //   console.log('Loading dismissed!' + role + ' Data: ' + data);
    // }
    HomePage.prototype.getCustomerList = function () {
        var _this = this;
        this.loader.presentLoading();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "customers";
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.getCusstomers = MyResponse['result']['list'];
            console.log("success:" + _this.getCusstomers);
            _this.loader.stopLoading();
        }, function (error) {
            _this.loader.stopLoading();
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
//# sourceMappingURL=pages-home-home-module-es5.js.map