(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customerdetil-customerdetil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/customerdetil/customerdetil.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/customerdetil/customerdetil.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar  class=\"new-background-color\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"BackButton\" (click)=\"goBackword()\" style=\"margin:10px\"></button>\n      </ion-col>\n      <ion-col size=\"10\">\n\n        <div class=\"TitleHeader TitleText\">\n          Customer Detail\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <button class=\"centerImg\" style=\"font-size :16px\" [ngClass]=\"(customerIndex % 2 == 0) ? 'odd' : 'even' \">{{firstName}}</button>\n     <ion-item>\n      <ion-label style=\"margin-top:3%; \">\n        {{customerName | titlecase}}\n      </ion-label>\n     </ion-item>\n    \n  </div>\n  \n  <ion-item style=\"margin-left:-15px; margin-top:-10px\" >\n    <div style=\"margin-top:-10px\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    \n    </div>\n\n  </ion-item>\n  <ion-item style=\"margin-left:-15px; \">\n\n    <ion-row style=\"height:90px; width: 100%\" align=\"center\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n      <ion-col size=\"6\" align=\"center\" (click)=\"makeCall()\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <ion-icon name=\"call\" style=\"width:30px; height:30px; color : #2e2d2d; margin-top: 15px\">\n        </ion-icon>\n        <ion-label style=\"color:#2e2d2d\">Call</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" align=\"center\" (click)=\"sendMessage()\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <ion-icon name=\"text\" style=\"width:30px; height:30px;color : #2e2d2d; margin-top: 15px\">\n        </ion-icon>\n        <ion-label style=\"color:#2e2d2d\">Text</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n\n  <ion-row style=\"margin-left:15px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"call\" style=\"width:30px; height:30px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-row style=\"width:100%\">\n\n          <ion-label *ngIf=\"customerMobile != 'NA' \">+91</ion-label>\n          <ion-label style=\"width:5px\"></ion-label>\n          <ion-label>{{customerMobile}}</ion-label>\n\n        </ion-row>\n\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-left:15px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"mail\" style=\"width:25px; height:28px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-label>{{customerEmail}}</ion-label>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-left:15px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"home\" style=\"width:25px; height:28px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">{{customerAddress}}</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-left:15px; margin-bottom: 35px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"document\" style=\"width:25px; height:28px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">{{customerNote}}</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n\n  <div class=\"editCss\" style=\"margin-top:20%\" (click)=\"editDetails()\">\n    <ion-icon name=\"create\" style=\"width:20px; height:18px; color : #ffffff;\">\n    </ion-icon>\n    <ion-label style=\"color:white;\" align=\"center\">Edit Customer</ion-label>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/customerdetil/customerdetil-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/customerdetil/customerdetil-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CustomerdetilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetilPageRoutingModule", function() { return CustomerdetilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customerdetil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerdetil.page */ "./src/app/pages/customerdetil/customerdetil.page.ts");




var routes = [
    {
        path: '',
        component: _customerdetil_page__WEBPACK_IMPORTED_MODULE_3__["CustomerdetilPage"]
    }
];
var CustomerdetilPageRoutingModule = /** @class */ (function () {
    function CustomerdetilPageRoutingModule() {
    }
    CustomerdetilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CustomerdetilPageRoutingModule);
    return CustomerdetilPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/customerdetil/customerdetil.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/customerdetil/customerdetil.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomerdetilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetilPageModule", function() { return CustomerdetilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customerdetil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerdetil-routing.module */ "./src/app/pages/customerdetil/customerdetil-routing.module.ts");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _customerdetil_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customerdetil.page */ "./src/app/pages/customerdetil/customerdetil.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");










var CustomerdetilPageModule = /** @class */ (function () {
    function CustomerdetilPageModule() {
    }
    CustomerdetilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _customerdetil_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerdetilPageRoutingModule"]
            ],
            providers: [_ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_6__["SMS"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"]],
            declarations: [_customerdetil_page__WEBPACK_IMPORTED_MODULE_8__["CustomerdetilPage"]]
        })
    ], CustomerdetilPageModule);
    return CustomerdetilPageModule;
}());



/***/ }),

/***/ "./src/app/pages/customerdetil/customerdetil.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/customerdetil/customerdetil.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.odd {\n  background-color: #f08132;\n}\n\n.even {\n  background-color: #ee38b7;\n}\n\n.centerImg {\n  border: 1px solid #bdafaf;\n  display: block;\n  width: 80px;\n  color: white;\n  height: 80px;\n  background-color: #f08132;\n  margin-top: 15%;\n  border-radius: 50%;\n}\n\n.inputCss {\n  color: black;\n  width: 70%;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 7px;\n}\n\n.editCss {\n  width: 45%;\n  margin-left: 50%;\n  margin-right: 5%;\n  background-color: #494747;\n  display: inline-block;\n  text-align: center;\n  padding: 11px;\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  border-radius: 20px;\n}\n\n.new-background-color {\n  --background: #494747;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRG93bmxvYWRzL3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvY3VzdG9tZXJkZXRpbC9jdXN0b21lcmRldGlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdG9tZXJkZXRpbC9jdXN0b21lcmRldGlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ0ZKOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURLRTtFQUNFLHlCQUFBO0FDRko7O0FETUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFNBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNELGlCQUFBO0VBQ0EsZUFBQTtBQ05IOztBRFNBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURVQTtFQUNJLHFCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0b21lcmRldGlsL2N1c3RvbWVyZGV0aWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uQmFja0J1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5vZGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjA4MTMyO1xuICB9XG4gIC5ldmVue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDU2LCAxODMpO1xuICB9XG5cblxuLmNlbnRlckltZyB7XG4gICAgYm9yZGVyIDogMXB4IHNvbGlkICNiZGFmYWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MTMyO1xuICAgIG1hcmdpbi10b3A6MTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG5cbi5pbnB1dENzc3tcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIHdpZHRoOiA3MCU7IFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICBtYXJnaW4tdG9wOjdweDtcbn1cblxuLmVkaXRDc3N7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW4tbGVmdDo1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTQ3NDc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOjExcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG5cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NDc0NztcbiAgfSIsIi5CYWNrQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MTMyO1xufVxuXG4uZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTM4Yjc7XG59XG5cbi5jZW50ZXJJbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmRhZmFmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MTMyO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmlucHV0Q3NzIHtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uZWRpdENzcyB7XG4gIHdpZHRoOiA0NSU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ3NDc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NDc0Nztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/customerdetil/customerdetil.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/customerdetil/customerdetil.page.ts ***!
  \***********************************************************/
/*! exports provided: CustomerdetilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetilPage", function() { return CustomerdetilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");










var CustomerdetilPage = /** @class */ (function () {
    function CustomerdetilPage(activatedRoute, router, location, callNumber, toast, loader, apiCall, sms) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.callNumber = callNumber;
        this.toast = toast;
        this.loader = loader;
        this.apiCall = apiCall;
        this.sms = sms;
        this.customerImage = "";
    }
    CustomerdetilPage.prototype.ngOnInit = function () {
        this.customerId = JSON.parse(this.activatedRoute.snapshot.params['customerId']);
        this.getCustomerDetailInfo();
        // this.customerIndex = parseArray.getIndex;
    };
    CustomerdetilPage.prototype.goBackword = function () {
        this.location.back();
        // this.router.navigate(['/showbalancerecord']);
    };
    CustomerdetilPage.prototype.getCustomerDetailInfo = function () {
        var _this = this;
        this.loader.presentLoading();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "customers/" + this.customerId;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.getCustomerDetail = (MyResponse['result']);
            if (_this.getCustomerDetail.firstName != "") {
                _this.customerName = _this.getCustomerDetail['firstName'] + " " + _this.getCustomerDetail['lastName'];
                _this.firstName = _this.customerName.charAt(0);
                // alert("name:"+this.firstName);
            }
            else {
                _this.customerName = "NA";
            }
            if (_this.getCustomerDetail['mobile'] != "") {
                _this.customerMobile = _this.getCustomerDetail['mobile'];
            }
            else {
                _this.customerMobile = "NA";
            }
            if (_this.getCustomerDetail['address'] != "") {
                _this.customerAddress = _this.getCustomerDetail['address'];
            }
            else {
                _this.customerAddress = "NA";
            }
            if (_this.getCustomerDetail['email'] != "") {
                _this.customerEmail = _this.getCustomerDetail['email'];
            }
            else {
                _this.customerEmail = "NA";
            }
            if (_this.getCustomerDetail['note'] != "") {
                _this.customerNote = _this.getCustomerDetail['note'];
            }
            else {
                _this.customerNote = "NA";
            }
            _this.loader.stopLoading();
        }, function (error) {
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
            alert("failed:" + error);
        });
    };
    CustomerdetilPage.prototype.editDetails = function () {
        this.checkRecordStatus = "update";
        var detailCustomerdata = {
            "fname": this.customerName,
            "mobile": this.customerMobile,
            "address": this.customerAddress,
            "email": this.customerEmail,
            "checkstatus": this.checkRecordStatus,
            "note": this.customerNote,
            "customerId": this.customerId
        };
        this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
    };
    CustomerdetilPage.prototype.makeCall = function () {
        if (this.customerMobile != "" || this.customerMobile != null || this.customerMobile != undefined) {
            this.callNumber.callNumber(this.customerMobile, true);
        }
        else {
            this.presentToast("You don''t have mobile number");
        }
    };
    CustomerdetilPage.prototype.sendMessage = function () {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // Opens Default sms app
            }
        };
        this.sms.send(this.customerMobile, '', options)
            .then(function () {
            // alert("success");
        }, function () {
            // alert("failed");
        });
        // this.sms.send(this.customerMobile, 'Hello world!');
    };
    CustomerdetilPage.prototype.presentToast = function (message) {
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
    CustomerdetilPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_9__["LoaderserviceService"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"] },
        { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"] }
    ]; };
    CustomerdetilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customerdetil',
            template: __webpack_require__(/*! raw-loader!./customerdetil.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/customerdetil/customerdetil.page.html"),
            styles: [__webpack_require__(/*! ./customerdetil.page.scss */ "./src/app/pages/customerdetil/customerdetil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_9__["LoaderserviceService"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"]])
    ], CustomerdetilPage);
    return CustomerdetilPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-customerdetil-customerdetil-module-es5.js.map