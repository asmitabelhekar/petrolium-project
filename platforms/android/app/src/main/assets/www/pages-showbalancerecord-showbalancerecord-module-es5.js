(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showbalancerecord-showbalancerecord-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/showbalancerecord/showbalancerecord.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"8\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">{{customerName | titlecase}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n          <ion-icon name=\"person\" style=\"color: white;width:22px; height:22px; margin:10px\" (click)=\"customerDetail()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"width:100%\">\n\n \n    <div style=\"background-color: #414a58;position: fixed; width:100%;z-index: 1; \">\n\n      <ion-row fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"color:white\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(1)\">\n          <ion-icon name=\"arrow-round-up\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\"></ion-icon>\n          <label style=\"font-size: 14px; margin-bottom:15px;\">Debited</label>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(2)\">\n          <ion-icon name=\"arrow-round-down\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\">\n          </ion-icon>\n          <label style=\"font-size: 14px;margin-bottom:15px;\">Credited</label>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(3)\">\n          <ion-icon name=\"mail\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\"></ion-icon>\n          <label style=\"font-size: 14px;margin-bottom:15px;\">Message</label>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(4)\">\n          <ion-icon name=\"call\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\"></ion-icon>\n          <label style=\"font-size: 14px;margin-bottom:15px;\">Call</label>\n        </div>\n      </ion-row>\n      <ion-row style=\"margin-top:10px\">\n        <ion-col size=\"4\">\n          <label style=\"font-size: 15px;color: whitesmoke; margin-left:5px; \">Transactions</label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end end\">\n            <ion-label  style=\"color:white;margin-right:10px;font-size: 15px; \">Balance :\n              ₹{{totalAmount}}</ion-label>\n           </div>\n           \n        </ion-col>\n      </ion-row>\n      <!-- <h5 fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"color:white; margin-bottom:20px\">Balance :\n        ₹{{totalAmount}} {{totalAmountStatus}}</h5> -->\n    </div>\n  \n    <div style=\"width:100%;margin-top:37%\">\n   \n   <div *ngIf=\"showRecordsData == 0\">\n    <div *ngFor=\"let item of getNewRecords\" style=\"width:100%;\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <label fxLayoutAlign=\"center center\" style=\"font-size: 10px;color: white; background-color: rgb(182, 180, 180);padding:5px;width:22%; border-radius: 15px;margin-top:10px\">{{item.date}}</label>\n      </div>\n      <div *ngFor=\"let listArray of item.list\" style=\"width:100%;margin-top:10px\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" *ngIf=\"0 > listArray.balance\">\n          <ion-card \n            style=\"border: 1px solid grey; width:200px; margin-left:20px; margin-top:5px;padding:4px\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <label style=\"font-size: 17px;color:red\">₹{{listArray.amount}}</label>\n              </ion-col>\n              <ion-col size=\"5\">\n                <label style=\"font-size: 10px;color:grey\">{{listArray.time}}</label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\">\n                <label style=\"font-size: 13px;color:rgb(17, 17, 17)\">{{listArray.comment}}</label>\n              </ion-col>\n            </ion-row>\n  \n          </ion-card>\n          \n          <ion-row style=\"margin-left:20px\" >\n            <ion-col size=\"12\">\n              <label  style=\"font-size: 13px;color:grey\">₹{{listArray.balance}} Advance</label>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"end end\" *ngIf=\"listArray.balance >=  0 \">\n          <ion-card \n            style=\"border: 1px solid grey;width:200px; margin-right:20px; margin-top:5px; padding:4px\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <label style=\"font-size: 17px;color:green\">₹{{listArray.amount}}</label>\n              </ion-col>\n              <ion-col size=\"5\">\n                <label style=\"font-size: 10px;color:grey\">{{listArray.time}}</label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\">\n                <label style=\"font-size: 13px;color:rgb(7, 7, 7)\">{{listArray.comment}}</label>\n              </ion-col>\n            </ion-row>\n  \n          </ion-card>\n          <ion-row style=\"margin-right:20px\"  >\n            <ion-col size=\"12\">\n              <label style=\"font-size: 13px;color:grey\">₹{{listArray.balance}} Due</label>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n   </div>\n\n   <div *ngIf=\"showRecordsData == 1\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n<h1>No records found.</h1>\n   </div>\n  </div>\n\n\n <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <ion-label  style=\"position: fixed;bottom: 20px;background-color:#5f5c5c;color:white ;border-radius: 15px;padding:10px;\">Balance :\n    ₹{{totalAmount}} {{totalAmountStatus}}</ion-label>\n </div> -->\n \n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/showbalancerecord/showbalancerecord-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/showbalancerecord/showbalancerecord-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ShowbalancerecordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowbalancerecordPageRoutingModule", function() { return ShowbalancerecordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _showbalancerecord_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showbalancerecord.page */ "./src/app/pages/showbalancerecord/showbalancerecord.page.ts");




var routes = [
    {
        path: '',
        component: _showbalancerecord_page__WEBPACK_IMPORTED_MODULE_3__["ShowbalancerecordPage"]
    }
];
var ShowbalancerecordPageRoutingModule = /** @class */ (function () {
    function ShowbalancerecordPageRoutingModule() {
    }
    ShowbalancerecordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShowbalancerecordPageRoutingModule);
    return ShowbalancerecordPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/showbalancerecord/showbalancerecord.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/showbalancerecord/showbalancerecord.module.ts ***!
  \*********************************************************************/
/*! exports provided: ShowbalancerecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowbalancerecordPageModule", function() { return ShowbalancerecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showbalancerecord_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showbalancerecord-routing.module */ "./src/app/pages/showbalancerecord/showbalancerecord-routing.module.ts");
/* harmony import */ var _showbalancerecord_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showbalancerecord.page */ "./src/app/pages/showbalancerecord/showbalancerecord.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");











var ShowbalancerecordPageModule = /** @class */ (function () {
    function ShowbalancerecordPageModule() {
    }
    ShowbalancerecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _showbalancerecord_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowbalancerecordPageRoutingModule"]
            ],
            providers: [_ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__["SMS"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"]],
            declarations: [_showbalancerecord_page__WEBPACK_IMPORTED_MODULE_6__["ShowbalancerecordPage"]]
        })
    ], ShowbalancerecordPageModule);
    return ShowbalancerecordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/showbalancerecord/showbalancerecord.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/showbalancerecord/showbalancerecord.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tablebackground {\n  margin-top: 20%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.tableback {\n  margin-top: 5%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.FixedButton {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #d2691e;\n}\n\n.cl-fixed-position-total-amount-bottom {\n  position: fixed;\n  border-radius: 20px;\n  background-color: #2e2d2d;\n  bottom: 20px;\n  color: white;\n  padding: 10px;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.cl-date-label {\n  margin-top: 20px;\n  background-color: #a19c9c;\n  border-radius: 15px;\n  font-size: 10px;\n  width: 70px;\n  padding: 8px;\n  margin: auto;\n}\n\n.cl-debit-button {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 30px;\n  color: white;\n  z-index: 10;\n  background-color: #2e2d2d;\n}\n\n.cl-credit-button {\n  position: fixed;\n  bottom: 20px;\n  left: 20px;\n  border-radius: 30px;\n  color: white;\n  z-index: 10;\n  background-color: #2e2d2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9zaG93YmFsYW5jZXJlY29yZC9zaG93YmFsYW5jZXJlY29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nob3diYWxhbmNlcmVjb3JkL3Nob3diYWxhbmNlcmVjb3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0RKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDRCxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNGSDs7QURLQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFHQSxhQUFBO0FDSko7O0FET0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQyxtQkFBQTtFQUNBLGVBQUE7RUFDQyxXQUFBO0VBQ0MsWUFBQTtFQUNILFlBQUE7QUNKSjs7QURPQTtFQUdHLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ05IOztBRFFBO0VBR0csZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDUEgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG93YmFsYW5jZXJlY29yZC9zaG93YmFsYW5jZXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFibGViYWNrZ3JvdW5ke1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwOyBcbiAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICB3aWR0aDogOTAlO1xufVxuXG4udGFibGViYWNre1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7IFxuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIHdpZHRoOiA5MCU7XG59XG5cblxuLkZpeGVkQnV0dG9ue1xuICAgIHdpZHRoOjY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgYm90dG9tOiAyMHB4O1xuICAgcmlnaHQ6IDIwcHg7XG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgIGNvbG9yOndoaXRlO1xuICAgei1pbmRleDogMTA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI2OTFlO1xufVxuXG4uY2wtZml4ZWQtcG9zaXRpb24tdG90YWwtYW1vdW50LWJvdHRvbXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIC8vIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwYWRkaW5nOjEwcHg7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY2wtZGF0ZS1sYWJlbHtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTU2LCAxNTYpO1xuICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICBmb250LXNpemU6MTBweDtcbiAgICAgIHdpZHRoOjcwcHg7XG4gICAgICAgcGFkZGluZzo4cHg7IFxuICAgIG1hcmdpbjphdXRvO1xufVxuXG4uY2wtZGViaXQtYnV0dG9ue1xuICAgIC8vIHdpZHRoOjY1cHg7XG4gICAgLy8gaGVpZ2h0OiA2NXB4O1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgYm90dG9tOiAyMHB4O1xuICAgcmlnaHQ6IDIwcHg7XG4gICBib3JkZXItcmFkaXVzOjMwcHg7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIHotaW5kZXg6IDEwO1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbn1cbi5jbC1jcmVkaXQtYnV0dG9ue1xuICAgIC8vIHdpZHRoOjY1cHg7XG4gICAgLy8gaGVpZ2h0OiA2NXB4O1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgYm90dG9tOiAyMHB4O1xuICAgbGVmdDogMjBweDtcbiAgIGJvcmRlci1yYWRpdXM6MzBweDtcbiAgIGNvbG9yOndoaXRlO1xuICAgei1pbmRleDogMTA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xufVxuIiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhYmxlYmFja2dyb3VuZCB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnRhYmxlYmFjayB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uRml4ZWRCdXR0b24ge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyNjkxZTtcbn1cblxuLmNsLWZpeGVkLXBvc2l0aW9uLXRvdGFsLWFtb3VudC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG4gIGJvdHRvbTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNsLWRhdGUtbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTE5YzljO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNsLWRlYml0LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbn1cblxuLmNsLWNyZWRpdC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/showbalancerecord/showbalancerecord.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/showbalancerecord/showbalancerecord.page.ts ***!
  \*******************************************************************/
/*! exports provided: ShowbalancerecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowbalancerecordPage", function() { return ShowbalancerecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/apicall/apicall.service */ "./src/app/service/apicall/apicall.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/loader/loaderservice.service */ "./src/app/service/loader/loaderservice.service.ts");










var ShowbalancerecordPage = /** @class */ (function () {
    function ShowbalancerecordPage(router, activatedRoute, toastController, callNumber, sms, loader, apiCall, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.callNumber = callNumber;
        this.sms = sms;
        this.loader = loader;
        this.apiCall = apiCall;
        this.dialog = dialog;
        this.balanceRecord = {
            "totalAmount": "2000",
            "history": [
                {
                    "date": "Today",
                    "list": [
                        {
                            "amount": "2000",
                            "comment": "first record",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "second record",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "third record",
                            "balance": "1000",
                            "type": 1,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "fourth record",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 1,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        }
                    ]
                },
                {
                    "date": "Yesterday",
                    "list": [
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 1,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 1,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 1,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        }
                    ]
                },
                {
                    "date": "10 Feb 2020",
                    "list": [
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 1,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 1,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 1,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        },
                        {
                            "amount": "2000",
                            "comment": "advance",
                            "balance": "1000",
                            "type": 2,
                            "time": "10:30 AM"
                        }
                    ]
                }
            ]
        };
        this.totalAmountStatus = "Due";
        this.getNewRecords = [];
    }
    ShowbalancerecordPage.prototype.ngOnInit = function () {
        var getdetail = this.activatedRoute.snapshot.params['detailData'];
        this.detailArray = JSON.parse(getdetail);
        this.customerId = this.detailArray['id'];
        this.customerName = this.detailArray['name'] + " " + this.detailArray['lname'];
        this.customerNumber = this.detailArray['mobile'];
        this.getBalanceRecord();
        this.getHistoryArray = this.balanceRecord.history;
        this.displayList = this.getHistoryArray['list'];
    };
    ShowbalancerecordPage.prototype.goBackword = function () {
        this.router.navigate(['home']);
    };
    ShowbalancerecordPage.prototype.clickMenuItem = function (getStatus) {
        if (getStatus == "1") {
            this.creditDebitAmount(1);
        }
        else if (getStatus == "2") {
            this.creditDebitAmount(2);
        }
        else if (getStatus == "3") {
            this.sentMessage();
        }
        else if (getStatus == "4") {
            this.makeCall();
        }
        else {
            this.presentToast("others");
        }
    };
    ShowbalancerecordPage.prototype.creditDebitAmount = function (value) {
        var balanceObject = {
            customerName: this.customerName,
            amountState: value,
            customerId: this.customerId,
            customerMobile: this.customerNumber
        };
        this.router.navigate(['/updatebalance', { balanceObject: JSON.stringify(balanceObject) }]);
    };
    ShowbalancerecordPage.prototype.sentMessage = function () {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT'
            }
        };
        this.sms.send(this.customerNumber, '', options)
            .then(function () {
        }, function () {
        });
    };
    ShowbalancerecordPage.prototype.makeCall = function () {
        this.callNumber.callNumber(this.customerNumber, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ShowbalancerecordPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
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
    ShowbalancerecordPage.prototype.customerDetail = function () {
        this.router.navigate(['customerdetil', { customerId: this.customerId }]);
    };
    ShowbalancerecordPage.prototype.getBalanceRecord = function () {
        var _this = this;
        this.loader.presentLoading();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url + "customers/" + this.customerId + "/passbook";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.getNewRecords = (MyResponse['result']['history']);
            if (_this.getNewRecords.length > 0) {
                _this.showRecordsData = 0;
            }
            else {
                _this.showRecordsData = 1;
            }
            _this.totalAmount = MyResponse['result']['totalAmount'];
            if (_this.totalAmount == null) {
                _this.totalAmount = 0;
            }
            else {
                _this.totalAmount = MyResponse['result']['totalAmount'];
            }
            _this.loader.stopLoading();
        }, function (error) {
            _this.loader.stopLoading();
            _this.presentToast("Something went wrong");
        });
    };
    ShowbalancerecordPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"] },
        { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"] },
        { type: src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_9__["LoaderserviceService"] },
        { type: src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    ShowbalancerecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showbalancerecord',
            template: __webpack_require__(/*! raw-loader!./showbalancerecord.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html"),
            styles: [__webpack_require__(/*! ./showbalancerecord.page.scss */ "./src/app/pages/showbalancerecord/showbalancerecord.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"],
            src_app_service_loader_loaderservice_service__WEBPACK_IMPORTED_MODULE_9__["LoaderserviceService"],
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ShowbalancerecordPage);
    return ShowbalancerecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-showbalancerecord-showbalancerecord-module-es5.js.map