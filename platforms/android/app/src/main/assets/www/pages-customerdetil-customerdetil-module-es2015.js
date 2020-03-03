(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customerdetil-customerdetil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/customerdetil/customerdetil.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/customerdetil/customerdetil.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"BackButton\" (click)=\"goBackword()\" style=\"margin:10px\"></button>\n      </ion-col>\n      <ion-col size=\"10\">\n\n        <div class=\"TitleHeader TitleText\">\n          Customer Detail\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <button class=\"centerImg\" style=\"font-size :20px; margin-top:12%\"\n    [ngClass]=\"(customerIndex % 2 == 0) ? 'odd' : 'even' \">{{firstName | uppercase}}</button>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <ion-item>\n      <ion-label style=\"margin-top:3%; \">\n        {{customerName | titlecase}}\n      </ion-label>\n    </ion-item>\n  </div>\n\n  <ion-item style=\"margin-left:-15px; margin-top:-10px\">\n    <div style=\"margin-top:-10px\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n    </div>\n\n  </ion-item>\n  \n  <ion-item style=\"margin-left:-15px; \">\n\n    <ion-row style=\"height:90px; width: 100%\" align=\"center\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n      <ion-col size=\"6\" align=\"center\" (click)=\"makeCall()\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <ion-icon name=\"call\" style=\"width:30px; height:30px; color : #2e2d2d; margin-top: 10px\">\n        </ion-icon>\n        <ion-label style=\"color:#2e2d2d\" class=\"cl_font_size_label\">Call</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" align=\"center\" (click)=\"sendMessage()\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <ion-icon name=\"text\" style=\"width:30px; height:30px;color : #2e2d2d; margin-top: 10px\">\n        </ion-icon>\n        <ion-label style=\"color:#2e2d2d\" class=\"cl_font_size_label\">Text</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n\n  <ion-row style=\"margin-left:15px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"call\" style=\"width:30px; height:30px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-row style=\"width:100%\">\n\n          <ion-label class=\"cl_font_size_label\" *ngIf=\"customerMobile != 'NA' \">+91</ion-label>\n          <ion-label style=\"width:5px\"></ion-label>\n          <ion-label class=\"cl_font_size_label\">{{customerMobile}}</ion-label>\n\n        </ion-row>\n\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <!-- <ion-row style=\"margin-left:15px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"mail\" style=\"width:25px; height:28px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-label>{{customerEmail}}</ion-label>\n      </ion-item>\n\n    </ion-col>\n  </ion-row> -->\n\n  <ion-row style=\"margin-left:15px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"home\" style=\"width:25px; height:28px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\" class=\"cl_font_size_label\">{{customerAddress}}</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-left:15px; margin-bottom: 35px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"document\" style=\"width:25px; height:28px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-label class=\"ion-text-wrap cl_font_size_label\">{{customerNote}}</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <!-- <div >\n    <table>\n      <th style=\"margin-right: 20px;\">Driver Name</th>\n      <th>Vehicle Number</th>\n      <tr *ngFor=\"let x of vehicleDetail\">\n        <td>{{ x.driverName }}</td>\n        <td>{{ x.number }}</td>\n      </tr>\n    </table>\n  </div> -->\n  <div   style=\"width:100%; margin-top:-15px\">\n    <label style=\"font-size : 17px;margin-bottom:8px \" fxLayoutAlign=\"center center\">Vehicle Detail</label>\n\n    <div fxlayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-bottom:20%\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:90%\">\n        <ion-row style=\"border: 1px solid grey; width:100%\">\n          <ion-col size=\"6\" style=\"border-right: 1px solid grey;\">\n            <label fxLayoutAlign=\"center center\" class=\"cl_font_size_label\"><b>Driver Name</b></label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <label fxLayoutAlign=\"center center\" class=\"cl_font_size_label\">  <b>Vehicle Number</b></label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngFor=\"let x of vehicleDetail\" style=\"border-right: 1px solid grey;border-left: 1px solid grey;border-bottom: 1px solid grey; width:  100%;\">\n          <ion-col size=\"6\" style=\"border-right: 1px solid grey;\">\n            <label fxLayoutAlign=\"center center\" class=\"cl_font_size_label\">{{ x.driverName }}</label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <label fxLayoutAlign=\"center center\" class=\"cl_font_size_label\">\n              {{ x.vehicleNumber }}\n            </label>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"editCss\" style=\"margin-top:20%\" (click)=\"editDetails()\">\n    <ion-icon name=\"create\" style=\"width:20px; height:18px; color : #ffffff;\">\n    </ion-icon>\n    <ion-label style=\"color:white;\" align=\"center\">Edit Customer</ion-label>\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customerdetil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerdetil.page */ "./src/app/pages/customerdetil/customerdetil.page.ts");




const routes = [
    {
        path: '',
        component: _customerdetil_page__WEBPACK_IMPORTED_MODULE_3__["CustomerdetilPage"]
    }
];
let CustomerdetilPageRoutingModule = class CustomerdetilPageRoutingModule {
};
CustomerdetilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerdetilPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customerdetil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerdetil-routing.module */ "./src/app/pages/customerdetil/customerdetil-routing.module.ts");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _customerdetil_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customerdetil.page */ "./src/app/pages/customerdetil/customerdetil.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");










let CustomerdetilPageModule = class CustomerdetilPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/customerdetil/customerdetil.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/customerdetil/customerdetil.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.odd {\n  background-color: #f08132;\n}\n\n.even {\n  background-color: #ee38b7;\n}\n\n.centerImg {\n  border: 1px solid #bdafaf;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 80px;\n  color: white;\n  height: 80px;\n  background-color: #f08132;\n  border-radius: 50%;\n}\n\n.inputCss {\n  color: black;\n  width: 70%;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 7px;\n}\n\n.editCss {\n  width: 45%;\n  margin-left: 50%;\n  margin-right: 5%;\n  background-color: #494747;\n  display: inline-block;\n  text-align: center;\n  padding: 11px;\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  border-radius: 20px;\n}\n\n.new-background-color {\n  --background: #494747;\n}\n\n.cl_font_size_label {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9jdXN0b21lcmRldGlsL2N1c3RvbWVyZGV0aWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jdXN0b21lcmRldGlsL2N1c3RvbWVyZGV0aWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDRko7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBREtFO0VBQ0UseUJBQUE7QUNGSjs7QURNQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FET0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0QsaUJBQUE7RUFDQSxlQUFBO0FDSkg7O0FET0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRFFBO0VBQ0kscUJBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyZGV0aWwvY3VzdG9tZXJkZXRpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5CYWNrQnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLm9kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMDgxMzI7XG4gIH1cbiAgLmV2ZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNTYsIDE4Myk7XG4gIH1cblxuXG4uY2VudGVySW1nIHtcbiAgICBib3JkZXIgOiAxcHggc29saWQgI2JkYWZhZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDgxMzI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cblxuLmlucHV0Q3Nze1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAgd2lkdGg6IDcwJTsgXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTsgXG4gICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgIG1hcmdpbi10b3A6N3B4O1xufVxuXG4uZWRpdENzc3tcbiAgICB3aWR0aDogNDUlO1xuICAgIG1hcmdpbi1sZWZ0OjUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDc0NztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6MTFweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cblxuXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDk0NzQ3O1xuICB9XG5cbiAgLmNsX2ZvbnRfc2l6ZV9sYWJlbHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH0iLCIuQmFja0J1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwODEzMjtcbn1cblxuLmV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzOGI3O1xufVxuXG4uY2VudGVySW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYWZhZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA4MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwODEzMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW5wdXRDc3Mge1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5lZGl0Q3NzIHtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDc0NztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDExcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDk0NzQ3O1xufVxuXG4uY2xfZm9udF9zaXplX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");










let CustomerdetilPage = class CustomerdetilPage {
    constructor(activatedRoute, router, location, callNumber, toast, loader, apiCall, sms) {
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
    ngOnInit() {
        this.customerId = JSON.parse(this.activatedRoute.snapshot.params['customerId']);
        this.getCustomerDetailInfo();
    }
    goBackword() {
        let detailData = {
            "id": this.customerId,
            "name": this.getCustomerDetail['firstName'],
            "lname": this.getCustomerDetail['lastName'],
            "mobile": this.customerMobile
        };
        this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }]);
    }
    getCustomerDetailInfo() {
        this.loader.presentLoading();
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "customers/" + this.customerId;
        this.apiCall.get(url).subscribe(MyResponse => {
            this.getCustomerDetail = (MyResponse['result']);
            if (this.getCustomerDetail.firstName != "" || this.getCustomerDetail.firstName != null) {
                this.customerName = this.getCustomerDetail['firstName'] + " " + this.getCustomerDetail['lastName'];
                this.firstName = this.customerName.charAt(0);
            }
            else {
                this.customerName = "NA";
            }
            if (this.getCustomerDetail['mobile'] != "" || this.getCustomerDetail['mobile'] != null) {
                this.customerMobile = this.getCustomerDetail['mobile'];
            }
            else {
                this.customerMobile = "NA";
            }
            if (this.getCustomerDetail['address'] != "" || this.getCustomerDetail['address'] != null) {
                this.customerAddress = this.getCustomerDetail['address'];
            }
            else {
                this.customerAddress = "NA";
            }
            if (this.getCustomerDetail['email'] != "" || this.getCustomerDetail['email'] != null) {
                this.customerEmail = this.getCustomerDetail['email'];
            }
            else {
                this.customerEmail = "NA";
            }
            if (this.getCustomerDetail['note'] != "" || this.getCustomerDetail['note'] != null) {
                this.customerNote = this.getCustomerDetail['note'];
                if (this.customerNote == null) {
                    this.customerNote = "NA";
                }
            }
            else {
                this.customerNote = "NA";
            }
            this.vehicleDetail = this.getCustomerDetail['vehicles'];
            this.loader.stopLoading();
        }, error => {
            this.loader.stopLoading();
            this.presentToast("Something went wrong");
            alert("failed:" + error);
        });
    }
    editDetails() {
        this.checkRecordStatus = "update";
        let detailCustomerdata = {
            "fname": this.customerName,
            "mobile": this.customerMobile,
            "address": this.customerAddress,
            "email": this.customerEmail,
            "checkstatus": this.checkRecordStatus,
            "note": this.customerNote,
            "customerId": this.customerId,
            "vehicles": this.vehicleDetail
        };
        this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
    }
    makeCall() {
        if (this.customerMobile != "" || this.customerMobile != null || this.customerMobile != undefined) {
            this.callNumber.callNumber(this.customerMobile, true);
        }
        else {
            this.presentToast("You don''t have mobile number");
        }
    }
    sendMessage() {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT'
            }
        };
        this.sms.send(this.customerMobile, '', options)
            .then(() => {
        }, () => {
        });
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
};
CustomerdetilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_9__["LoaderserviceService"] },
    { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-customerdetil-customerdetil-module-es2015.js.map