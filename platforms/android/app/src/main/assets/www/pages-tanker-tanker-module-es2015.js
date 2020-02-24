(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanker-tanker-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tanker/tanker.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tanker/tanker.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Tanker\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n  \n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top:3%\">\n\n    <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"cl_margin_top\">\n\n      <h3>Tanker record</h3>\n    </div> -->\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:3%\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Choose a date</mat-label>\n        <input matInput #input=\"ngModel\" [(ngModel)]=\"tankerModel.date\" [min]=\"minDate\" [max]=\"today\" [matDatepicker]=\"picker\" [disabled]=\"true\"\n          placeholder=\"Choose a date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"true\"></mat-datepicker-toggle>\n        <mat-datepicker #picker (selectedChanged)=\"onDate($event)\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"width:96%;margin-left:2%; margin-right:2%\">\n      <div *ngFor=\"let item of buttonsArray;let i = index \" style=\"width:44%\">\n        <button mat-button style=\"width:100%\" [ngClass]=\"(checkFuelType  == i) ? 'oddBackground' : 'evenBackground' \"\n          (click)=\"fuelType(item.indexFuel)\">{{item.fuelType}}</button>\n      </div>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n        <mat-form-field style=\"width:90%; margin-top:10px\">\n          <mat-label>Amount</mat-label>\n          <input matInput type=\"number\" name=\"tankerbalance\" [(ngModel)]=\"tankerModel.tankerbalance\"\n            #tankerbalance=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:10%;width:100%\">\n\n        <button mat-raised-button [disabled]=\"tankerbalance.invalid\" class=\"submitButton\" (click)=\"tankerBalanceSubmit()\">Submit</button>\n      </div>\n  </div>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tanker/tanker-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tanker/tanker-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TankerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankerPageRoutingModule", function() { return TankerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tanker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tanker.page */ "./src/app/pages/tanker/tanker.page.ts");




const routes = [
    {
        path: '',
        component: _tanker_page__WEBPACK_IMPORTED_MODULE_3__["TankerPage"]
    }
];
let TankerPageRoutingModule = class TankerPageRoutingModule {
};
TankerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TankerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tanker/tanker.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tanker/tanker.module.ts ***!
  \***********************************************/
/*! exports provided: TankerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankerPageModule", function() { return TankerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tanker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tanker-routing.module */ "./src/app/pages/tanker/tanker-routing.module.ts");
/* harmony import */ var _tanker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tanker.page */ "./src/app/pages/tanker/tanker.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let TankerPageModule = class TankerPageModule {
};
TankerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _tanker_routing_module__WEBPACK_IMPORTED_MODULE_5__["TankerPageRoutingModule"]
        ],
        declarations: [_tanker_page__WEBPACK_IMPORTED_MODULE_6__["TankerPage"]]
    })
], TankerPageModule);



/***/ }),

/***/ "./src/app/pages/tanker/tanker.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/tanker/tanker.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".oddBackground {\n  border: 1px solid #3f3e3e;\n}\n\n.evenBackground {\n  border: 1px solid #d5dbd5;\n}\n\n.submitButton {\n  height: 48px;\n  width: 30%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n\n.cl_margin_top {\n  margin-top: 5%;\n}\n\n.cl_width {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy90YW5rZXIvdGFua2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFua2VyL3Rhbmtlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtBQ0FKOztBREVFO0VBQ0UseUJBQUE7QUNDSjs7QURrQkE7RUFFRSxZQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDakJGOztBRHNCQTtFQUNJLGNBQUE7QUNuQko7O0FEc0JBO0VBQ0ksVUFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhbmtlci90YW5rZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ub2RkQmFja2dyb3VuZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjMsIDYyLCA2Mik7XG4gIH1cbiAgLmV2ZW5CYWNrZ3JvdW5ke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTMsIDIxOSwgMjEzKTtcbiAgfVxuXG4vLyAgIC5zdWJtaXRCdXR0b257XG4gICBcbi8vICAgICAvLyBoZWlnaHQ6IDQ4cHg7XHRcbi8vICAgICAvLyB3aWR0aDogMzUlOyBcbi8vICAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4vLyAgICAgcGFkZGluZy10b3A6NXB4O1xuLy8gICAgIHBhZGRpbmctYm90dG9tOjVweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1x0XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbi8vICAgICBjb2xvcjogI0ZGRkZGRjtcdFxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4vLyAgICAgZm9udC1zaXplOiAxNXB4O1x0XG4gICAgXG4vLyB9XG5cbi5zdWJtaXRCdXR0b257XG4gICBcbiAgaGVpZ2h0OiA0OHB4O1x0XG4gIHdpZHRoOiAzMCU7IFxuXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgY29sb3I6ICNGRkZGRkY7XHRcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgZm9udC1zaXplOiAxNXB4O1x0XG4gIFxufVxuXG5cbi5jbF9tYXJnaW5fdG9we1xuICAgIG1hcmdpbi10b3A6NSVcbn1cblxuLmNsX3dpZHRoe1xuICAgIHdpZHRoOjk1JVxufVxuIiwiLm9kZEJhY2tncm91bmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2YzZTNlO1xufVxuXG4uZXZlbkJhY2tncm91bmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkYmQ1O1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMzAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNsX21hcmdpbl90b3Age1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmNsX3dpZHRoIHtcbiAgd2lkdGg6IDk1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tanker/tanker.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tanker/tanker.page.ts ***!
  \*********************************************/
/*! exports provided: TankerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankerPage", function() { return TankerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let TankerPage = class TankerPage {
    constructor(dateAdapter, toastcontroller, apiCall, router, loader) {
        this.dateAdapter = dateAdapter;
        this.toastcontroller = toastcontroller;
        this.apiCall = apiCall;
        this.router = router;
        this.loader = loader;
        this.tankerModel = {};
        this.buttonsArray = [
            {
                "fuelType": "Petrol",
                "indexFuel": "0",
                "type": "0"
            },
            {
                "fuelType": "Diesel",
                "indexFuel": "1",
                "type": "1"
            }
        ];
        this.dateAdapter.setLocale("en-GB");
    }
    ngOnInit() {
        this.tankerModel['type'] = 2;
        this.petrolPrice = localStorage.getItem('petrolPrice');
        this.dieselPrice = localStorage.getItem('dieselPrice');
        this.tankerModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
    }
    fuelType(fuelType) {
        this.checkFuelType = fuelType;
        if (fuelType == 0) {
            this.tankerModel['type'] = 0;
        }
        else {
            this.tankerModel['type'] = 1;
        }
    }
    tankerBalanceSubmit() {
        this.loader.presentLoading();
        if (this.tankerModel['type'] == 2) {
            this.presentToast("Please select fuel type.");
            this.loader.stopLoading();
        }
        else {
            this.loader.presentLoading();
            this.tankerModel['perliture'] = "10.20";
            let send_date = {};
            send_date['type'] = this.tankerModel['type'];
            send_date['amount'] = this.tankerModel['tankerbalance'];
            send_date['date'] = this.tankerModel['date'];
            if (this.tankerModel['type'] == 0) {
                send_date['perLitrePrice'] = this.petrolPrice;
            }
            else {
                send_date['perLitrePrice'] = this.dieselPrice;
            }
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "tanker";
            this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
                let msg = MyResponse['message'];
                this.presentToast(msg);
                this.router.navigate(['/tanker']);
                // this.tankerModel['type'] = "";
                // this.tankerModel['tankerbalance'] = "";
                this.loader.stopLoading();
            }, error => {
                ;
                this.loader.stopLoading();
                this.presentToast("Something went wrong");
                console.log(error.error.message);
            });
        }
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastcontroller.create({
                message: msg,
                duration: 4000
            });
            toast.present();
        });
    }
};
TankerPage.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__["ApicallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_4__["LoaderserviceService"] }
];
TankerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tanker',
        template: __webpack_require__(/*! raw-loader!./tanker.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tanker/tanker.page.html"),
        styles: [__webpack_require__(/*! ./tanker.page.scss */ "./src/app/pages/tanker/tanker.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__["ApicallService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_4__["LoaderserviceService"]])
], TankerPage);



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
//# sourceMappingURL=pages-tanker-tanker-module-es2015.js.map