(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dataentryopening-dataentryopening-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dataentryopening/dataentryopening.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dataentryopening/dataentryopening.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Opening\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top:5%\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Choose a date</mat-label>\n        <input matInput #input=\"ngModel\" [(ngModel)]=\"openingModel.date\" [min]=\"minDate\" [max]=\"today\" [matDatepicker]=\"picker\" [disabled]=\"true\"\n          placeholder=\"Choose a date\">\n        <!-- <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"userModel.date\" [max]=\"maxDate\"> -->\n        <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"true\"></mat-datepicker-toggle>\n        <mat-datepicker #picker (selectedChanged)=\"onDate($event)\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n\n    <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n      <mat-form-field style=\"width:90%\">\n        <mat-label>Fuel Type</mat-label>\n        <mat-select (selectionChange)=\"changeClient($event.value)\">\n          <mat-option *ngFor=\"let type of fuelType\" [value]=\"type.type\" >\n            {{type.type}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div> -->\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"width:96%;margin-left:2%; margin-right:2%\">\n      <div *ngFor=\"let item of buttonsArray;let i = index \" style=\"width:44%\">\n        <button mat-button style=\"width:100%\" [ngClass]=\"(checkFuelType  == i) ? 'oddBackground' : 'evenBackground' \"\n          (click)=\"fuelTypeCheck(item.indexFuel)\">{{item.fuelType}}</button>\n      </div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n     \n        <mat-form-field style=\"width:90%; margin-top:10px\">\n          <mat-label>Opening Balance</mat-label>\n          <input matInput type=\"number\" name=\"openingbalance\" [(ngModel)]=\"openingModel.openingbalance\"\n            #openingbalance=\"ngModel\" class=\"form-control\" align=\"center\" required pattern=\"[0-9.-]+$\">\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:10%;width:100%\">\n\n        <button mat-raised-button [disabled]=\"openingbalance.invalid \" class=\"submitButton\" (click)=\"openingBalanceSubmit()\">Submit</button>\n      </div>\n  </div>\n\n\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dataentryopening_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataentryopening.page */ "./src/app/pages/dataentryopening/dataentryopening.page.ts");




const routes = [
    {
        path: '',
        component: _dataentryopening_page__WEBPACK_IMPORTED_MODULE_3__["DataentryopeningPage"]
    }
];
let DataentryopeningPageRoutingModule = class DataentryopeningPageRoutingModule {
};
DataentryopeningPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DataentryopeningPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dataentryopening_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataentryopening-routing.module */ "./src/app/pages/dataentryopening/dataentryopening-routing.module.ts");
/* harmony import */ var _dataentryopening_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataentryopening.page */ "./src/app/pages/dataentryopening/dataentryopening.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let DataentryopeningPageModule = class DataentryopeningPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/dataentryopening/dataentryopening.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dataentryopening/dataentryopening.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.submitButton {\n  height: 48px;\n  width: 30%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n\n.oddBackground {\n  border: 1px solid #3f3e3e;\n}\n\n.evenBackground {\n  border: 1px solid #d5dbd5;\n}\n\npage-home .bg-red {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9kYXRhZW50cnlvcGVuaW5nL2RhdGFlbnRyeW9wZW5pbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXRhZW50cnlvcGVuaW5nL2RhdGFlbnRyeW9wZW5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUE7RUFFSSxZQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDSEo7O0FET0E7RUFDSSx5QkFBQTtBQ0pKOztBRE1FO0VBQ0UseUJBQUE7QUNISjs7QURPSTtFQUNNLHFCQUFBO0FDSlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXRhZW50cnlvcGVuaW5nL2RhdGFlbnRyeW9wZW5pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uQmFja0J1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnN1Ym1pdEJ1dHRvbntcbiAgIFxuICAgIGhlaWdodDogNDhweDtcdFxuICAgIHdpZHRoOiAzMCU7IFxuICBcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1x0XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxNXB4O1x0XG4gICAgXG59XG5cbi5vZGRCYWNrZ3JvdW5ke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MywgNjIsIDYyKTtcbiAgfVxuICAuZXZlbkJhY2tncm91bmR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMywgMjE5LCAyMTMpO1xuICB9XG5cbiAgcGFnZS1ob21lIHtcbiAgICAuYmctcmVke1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgIH0iLCIuVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uQmFja0J1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMzAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm9kZEJhY2tncm91bmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2YzZTNlO1xufVxuXG4uZXZlbkJhY2tncm91bmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkYmQ1O1xufVxuXG5wYWdlLWhvbWUgLmJnLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");









let DataentryopeningPage = class DataentryopeningPage {
    constructor(dataAdapter, location, loader, toast, apiCall, router) {
        this.dataAdapter = dataAdapter;
        this.location = location;
        this.loader = loader;
        this.toast = toast;
        this.apiCall = apiCall;
        this.router = router;
        this.checkFuelType = 0;
        this.openingModel = {};
        this.fuelType = [
            { "type": "Petrol" },
            { "type": "Diesel" }
        ];
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
        this.dataAdapter.setLocale("en-GB");
        this.openingModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
    }
    ngOnInit() {
        this.openingModel['type'] = 0;
        this.getOpeningBalance(this.openingModel['type']);
        this.openingModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
    }
    goBackword() {
        this.location.back();
    }
    openingBalanceSubmit() {
        this.loader.presentLoading();
        if (this.openingModel['type'] == 2) {
            this.presentToast("Please select fuel type.");
        }
        else {
            let send_date = {};
            send_date['date'] = this.openingModel['date'];
            send_date['type'] = this.openingModel['type'];
            send_date['balance'] = this.openingModel['openingbalance'];
            if (this.previousOpeningBalance == 0 || this.previousOpeningBalance == "") {
                let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "balance";
                this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
                    let msg = MyResponse['message'];
                    this.presentToast(msg);
                    // this.router.navigate(['/dataentrycredit']);
                    this.loader.stopLoading();
                }, error => {
                    this.loader.stopLoading();
                    this.presentToast("Something went wrong");
                    console.log(error.error.message);
                });
            }
            else {
                let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "balance/" + this.openingModel['id'];
                this.apiCall.put(url, send_date).subscribe(MyResponse => {
                    let msg = MyResponse['message'];
                    this.presentToast(msg);
                    // this.router.navigate(['/dataentrycredit']);
                    this.loader.stopLoading();
                }, error => {
                    this.loader.stopLoading();
                    this.presentToast("Something went wrong");
                    console.log(error.error.message);
                });
            }
        }
    }
    fuelTypeCheck(fuelType) {
        this.checkFuelType = fuelType;
        if (fuelType == 0) {
            this.openingModel['type'] = 0;
            this.getOpeningBalance(this.openingModel['type']);
        }
        else {
            this.openingModel['type'] = 1;
            this.getOpeningBalance(this.openingModel['type']);
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
    changeClient(value) {
        if (value == "Petrol") {
            this.openingModel['type'] = 0;
            this.getOpeningBalance(this.openingModel['type']);
        }
        else {
            this.openingModel['type'] = 1;
            this.getOpeningBalance(this.openingModel['type']);
        }
        console.log("type : " + this.openingModel['type']);
    }
    getOpeningBalance(type) {
        this.loader.presentLoading();
        let objectt = {};
        objectt['date'] = this.openingModel['date'];
        objectt['type'] = type;
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "balance?" + "filters=" + JSON.stringify(objectt);
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(MyResponse => {
            let getData = MyResponse['result']['list'];
            if (getData.length > 0) {
                for (let i = 0; i < getData.length; i++) {
                    this.openingModel['id'] = MyResponse['result']['list'][i]['id'];
                    this.previousOpeningBalance = MyResponse['result']['list'][i]['balance'];
                    this.openingModel['openingbalance'] = MyResponse['result']['list'][i]['balance'];
                }
            }
            else {
                this.openingModel['id'] = "";
                this.previousOpeningBalance = 0;
                this.openingModel['openingbalance'] = 0;
            }
            this.loader.stopLoading();
        }, error => {
            this.loader.stopLoading();
            this.presentToast("Something went wrong");
        });
    }
};
DataentryopeningPage.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_8__["LoaderserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_6__["ApicallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
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
//# sourceMappingURL=pages-dataentryopening-dataentryopening-module-es2015.js.map