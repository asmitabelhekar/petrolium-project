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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let HomePageModule = class HomePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let HomePage = class HomePage {
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
    constructor(menuCntrl, router, apiCall) {
        this.menuCntrl = menuCntrl;
        this.router = router;
        this.apiCall = apiCall;
        this.getCusstomers = [];
        this.getCustomerList();
        this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));
        this.menuCntrl.enable(true);
        // this.makePdf();
    }
    ngOnInit() {
        this.getCustomerList();
    }
    addCustomer() {
        this.checkRecordStatus = "add";
        let detailCustomerdata = {
            "fname": "",
            "mobile": "",
            "address": "",
            "email": "",
            "checkstatus": this.checkRecordStatus,
            "note": ""
        };
        this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
    }
    getBalanceDetail(data) {
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
        let detailData = {
            "id": data.id,
            "name": data.firstName,
            "lname": data.lastName,
        };
        this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }]);
        // this.router.navigate(['showbalancerecord' ]);
    }
    getCustomerList() {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "customers";
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(MyResponse => {
            this.getCusstomers = MyResponse['result']['list'];
            console.log("success:" + this.getCusstomers);
        }, error => {
            alert("failed:" + error);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map