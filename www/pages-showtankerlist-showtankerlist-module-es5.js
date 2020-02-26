(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showtankerlist-showtankerlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/showtankerlist/showtankerlist.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/showtankerlist/showtankerlist.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Tanker List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"showTankerRecord == 1\" fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n\n\n      <ion-card *ngFor=\"let history of getTankerHistory\" style=\"border-radius: 10px;\">\n        <ion-row style=\"margin-left: 5px;\">\n          <ion-col size=\"6\">\n            <label class=\"cl_title_css\">Fuel Type:</label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <label class=\"cl_label_css\" *ngIf=\"history.type == '0' \">Petrol</label>\n            <label class=\"cl_label_css\" *ngIf=\"history.type == '1' \">Diesel</label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"margin-left: 5px;\">\n          <ion-col size=\"6\">\n            <label class=\"cl_title_css\">Per Liture Price : </label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <label class=\"cl_label_css\">{{history.perLitrePrice}}</label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"margin-left: 5px;\">\n          <ion-col size=\"6\">\n            <label class=\"cl_title_css\">Amount : </label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <label class=\"cl_label_css\">{{history.amount}}</label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"margin-left: 5px;\">\n          <ion-col size=\"6\">\n            <label class=\"cl_title_css\">Total Amount : </label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <label class=\"cl_label_css\">{{history.amount * history.perLitrePrice}}</label>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row style=\"margin-left: 5px;\">\n          <ion-col size=\"6\">\n            <label class=\"cl_title_css\">Date : </label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <label class=\"cl_label_css\">{{history.date | date }}</label>\n          </ion-col>\n        </ion-row>\n\n\n      </ion-card>\n\n    <!-- </div> -->\n\n  </div>\n\n  <div *ngIf=\"showTankerRecord == 0\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top: 25%;\">\n    <h3>No records found</h3>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/showtankerlist/showtankerlist-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/showtankerlist/showtankerlist-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ShowtankerlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowtankerlistPageRoutingModule", function() { return ShowtankerlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _showtankerlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showtankerlist.page */ "./src/app/pages/showtankerlist/showtankerlist.page.ts");




var routes = [
    {
        path: '',
        component: _showtankerlist_page__WEBPACK_IMPORTED_MODULE_3__["ShowtankerlistPage"]
    }
];
var ShowtankerlistPageRoutingModule = /** @class */ (function () {
    function ShowtankerlistPageRoutingModule() {
    }
    ShowtankerlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShowtankerlistPageRoutingModule);
    return ShowtankerlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/showtankerlist/showtankerlist.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/showtankerlist/showtankerlist.module.ts ***!
  \***************************************************************/
/*! exports provided: ShowtankerlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowtankerlistPageModule", function() { return ShowtankerlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showtankerlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showtankerlist-routing.module */ "./src/app/pages/showtankerlist/showtankerlist-routing.module.ts");
/* harmony import */ var _showtankerlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showtankerlist.page */ "./src/app/pages/showtankerlist/showtankerlist.page.ts");







var ShowtankerlistPageModule = /** @class */ (function () {
    function ShowtankerlistPageModule() {
    }
    ShowtankerlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _showtankerlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowtankerlistPageRoutingModule"]
            ],
            declarations: [_showtankerlist_page__WEBPACK_IMPORTED_MODULE_6__["ShowtankerlistPage"]]
        })
    ], ShowtankerlistPageModule);
    return ShowtankerlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/showtankerlist/showtankerlist.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/showtankerlist/showtankerlist.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl_label_css {\n  font-size: 13px;\n  color: black;\n}\n\n.cl_title_css {\n  font-size: 14px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9zaG93dGFua2VybGlzdC9zaG93dGFua2VybGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nob3d0YW5rZXJsaXN0L3Nob3d0YW5rZXJsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBREtBO0VBRUksZUFBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG93dGFua2VybGlzdC9zaG93dGFua2VybGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uY2xfbGFiZWxfY3Nze1xuICAgIC8vIHBhZGRpbmc6MnB4OyBcbiAgICBmb250LXNpemU6MTNweDtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuLmNsX3RpdGxlX2Nzc3tcbiAgICAvLyBwYWRkaW5nOjJweDsgXG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgY29sb3I6YmxhY2s7XG59IiwiLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbF9sYWJlbF9jc3Mge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNsX3RpdGxlX2NzcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/showtankerlist/showtankerlist.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/showtankerlist/showtankerlist.page.ts ***!
  \*************************************************************/
/*! exports provided: ShowtankerlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowtankerlistPage", function() { return ShowtankerlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ShowtankerlistPage = /** @class */ (function () {
    function ShowtankerlistPage(loader, apiCall, toasController) {
        this.loader = loader;
        this.apiCall = apiCall;
        this.toasController = toasController;
    }
    ShowtankerlistPage.prototype.ngOnInit = function () {
        this.getTankerList();
    };
    ShowtankerlistPage.prototype.getTankerList = function () {
        var _this = this;
        this.loader.presentLoading();
        // let url = environment.base_url + "customers/" + 2 + "/purchase";
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "tanker?" + "size=" + 1000;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.getTankerHistory = MyResponse['result']['list'];
            if (_this.getTankerHistory.length > 0) {
                _this.showTankerRecord = 1;
            }
            else {
                _this.showTankerRecord = 0;
            }
            _this.loader.stopLoading();
        }, function (error) {
            alert(error);
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
        });
    };
    ShowtankerlistPage.prototype.presentToast = function (message) {
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
    ShowtankerlistPage.ctorParameters = function () { return [
        { type: _service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_2__["LoaderserviceService"] },
        { type: _service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
    ]; };
    ShowtankerlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showtankerlist',
            template: __webpack_require__(/*! raw-loader!./showtankerlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/showtankerlist/showtankerlist.page.html"),
            styles: [__webpack_require__(/*! ./showtankerlist.page.scss */ "./src/app/pages/showtankerlist/showtankerlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_2__["LoaderserviceService"],
            _service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], ShowtankerlistPage);
    return ShowtankerlistPage;
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
//# sourceMappingURL=pages-showtankerlist-showtankerlist-module-es5.js.map