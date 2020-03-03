(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userslist-userslist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/userslist/userslist.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/userslist/userslist.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Users\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"width:100%\">\n\n  <div fxLayoutAlign=\"center center\">\n    <ion-row style=\"width:95%; border : 1px solid rgb(117, 115, 115); border-radius: 15px; margin:15px\">\n      <ion-col size=\"1\">\n        <ion-icon name=\"search\" style=\"width:20px; height: 20px;margin-top:5px\"></ion-icon>  \n        </ion-col>\n      <ion-col size=\"11\" >\n        <input type=\"text\" [(ngModel)]=\"getSearchKey\" (input)=\"OnInput(getSearchKey)\" placeholder=\"Search\" style=\"width:96%;margin-right:2%;\"/>\n      </ion-col>\n    </ion-row>\n  </div>\n\n \n  \n<div style=\"margin-top:10px; \" *ngIf=\"showNoRecordsFound == 1\">\n  <div *ngFor=\"let daata of getCusstomers; index as i\" >\n    <ion-item (click)=\"getUserDetail(daata.id)\" style=\"margin-left:-20px\">\n      <div style=\"margin-left:30px\">\n       \n    <button style=\"width:35px; height: 35px; border-radius: 50%;margin-right: 15px ; color: #ffffff\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even' \">{{daata.name.charAt(0) | uppercase}}</button>\n      </div>\n      {{daata.name | titlecase}}  \n    </ion-item>\n  </div>\n</div>\n <div *ngIf=\"showNoRecordsFound == 0\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top: 25%;\">\n   <h3>No records found</h3>\n </div>\n<div>\n  <button (click)=\"addCustomer()\" align=\"center\" style=\"position:fixed; width:60px;height:60px;right:30px; bottom:20px; background-color: #2e2d2d;border-radius: 50%;\"><ion-icon style=\"width:30px; height: 30px;color:white\" name=\"add\"></ion-icon></button>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/userslist/userslist-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/userslist/userslist-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserslistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserslistPageRoutingModule", function() { return UserslistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userslist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userslist.page */ "./src/app/pages/userslist/userslist.page.ts");




var routes = [
    {
        path: '',
        component: _userslist_page__WEBPACK_IMPORTED_MODULE_3__["UserslistPage"]
    }
];
var UserslistPageRoutingModule = /** @class */ (function () {
    function UserslistPageRoutingModule() {
    }
    UserslistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UserslistPageRoutingModule);
    return UserslistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/userslist/userslist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/userslist/userslist.module.ts ***!
  \*****************************************************/
/*! exports provided: UserslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserslistPageModule", function() { return UserslistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userslist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userslist-routing.module */ "./src/app/pages/userslist/userslist-routing.module.ts");
/* harmony import */ var _userslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userslist.page */ "./src/app/pages/userslist/userslist.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var UserslistPageModule = /** @class */ (function () {
    function UserslistPageModule() {
    }
    UserslistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _userslist_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserslistPageRoutingModule"]
            ],
            declarations: [_userslist_page__WEBPACK_IMPORTED_MODULE_6__["UserslistPage"]]
        })
    ], UserslistPageModule);
    return UserslistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/userslist/userslist.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/userslist/userslist.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.new-background-color {\n  --background: #494747;\n}\n\n.odd {\n  background-color: #f08132;\n}\n\n.even {\n  background-color: #ee38b7;\n}\n\n.cl-center-title {\n  margin-top: 5%;\n}\n\n.cat-search {\n  position: absolute;\n  border: none;\n  outline: none;\n  margin-top: 25px;\n  height: 75px;\n  left: 50%;\n  width: 100%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: linear-gradient(120deg, #3498db, #8e44ad);\n}\n\ninput {\n  border: none;\n}\n\ninput:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy91c2Vyc2xpc3QvdXNlcnNsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlcnNsaXN0L3VzZXJzbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7QUNDSjs7QURDRTtFQUNFLHlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxjQUFBO0FDRUo7O0FEQ0U7RUFHQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EscURBQUE7QUNERjs7QURLRTtFQUNFLFlBQUE7QUNGSjs7QURNRTtFQUNFLGFBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzbGlzdC91c2Vyc2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NDc0NztcbiAgfVxuICBcbiAgLm9kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMDgxMzI7XG4gIH1cbiAgLmV2ZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNTYsIDE4Myk7XG4gIH1cbiAgXG4gIC5jbC1jZW50ZXItdGl0bGV7XG4gICAgbWFyZ2luLXRvcDo1JTtcbiAgfVxuICBcbiAgLmNhdC1zZWFyY2hcbiAge1xuICAvLyBtYXJnaW4tdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gdG9wOjUlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywjMzQ5OGRiLCM4ZTQ0YWQpO1xuICBcbiAgfVxuICBcbiAgaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgXG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9IiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICM0OTQ3NDc7XG59XG5cbi5vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MTMyO1xufVxuXG4uZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTM4Yjc7XG59XG5cbi5jbC1jZW50ZXItdGl0bGUge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmNhdC1zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzM0OThkYiwgIzhlNDRhZCk7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/userslist/userslist.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/userslist/userslist.page.ts ***!
  \***************************************************/
/*! exports provided: UserslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserslistPage", function() { return UserslistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");







var UserslistPage = /** @class */ (function () {
    function UserslistPage(menuCntrl, router, events, loader, toast, apiCall) {
        this.menuCntrl = menuCntrl;
        this.router = router;
        this.events = events;
        this.loader = loader;
        this.toast = toast;
        this.apiCall = apiCall;
        this.userModel = {};
        this.getCusstomers = [];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "users?" + "size=" + 1000;
        this.getUserList(this.url);
        this.getCusstomers.sort(function (a, b) { return a.name.localeCompare(b.name); });
        this.menuCntrl.enable(true);
    }
    UserslistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserList(this.url);
        this.events.subscribe('Event-AddUser', function () {
            _this.getUserList(_this.url);
        });
    };
    UserslistPage.prototype.OnInput = function (event) {
        this.serchKey = (event);
        if (this.serchKey.length > 3) {
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "users?" + "search=" + this.serchKey;
            this.getUserList(this.url);
        }
        else {
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "users?" + "size=" + 1000;
            this.getUserList(this.url);
        }
    };
    UserslistPage.prototype.getUserList = function (url) {
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
    UserslistPage.prototype.presentToast = function (message) {
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
    UserslistPage.prototype.addCustomer = function () {
        this.checkUserStatus = "add";
        var detailUserData = {
            "fname": "",
            "lname": "",
            "mobile": "",
            "email": "",
            "userrole": undefined,
            "checkstatus": this.checkUserStatus,
            "password": "",
            "userid": ""
        };
        this.router.navigate(['/addusers', { detailUserData: JSON.stringify(detailUserData) }]);
    };
    UserslistPage.prototype.getUserDetail = function (data) {
        this.router.navigate(['/userprofile', { userId: data }]);
        // alert("display data:" + (data));
    };
    UserslistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_6__["LoaderserviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"] }
    ]; };
    UserslistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userslist',
            template: __webpack_require__(/*! raw-loader!./userslist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/userslist/userslist.page.html"),
            styles: [__webpack_require__(/*! ./userslist.page.scss */ "./src/app/pages/userslist/userslist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_6__["LoaderserviceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]])
    ], UserslistPage);
    return UserslistPage;
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
//# sourceMappingURL=pages-userslist-userslist-module-es5.js.map