(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showbalancerecord-showbalancerecord-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/showbalancerecord/showbalancerecord.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"8\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">{{customerName | titlecase}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n          <ion-icon name=\"person\" style=\"color: white;width:22px; height:22px; margin:10px\" (click)=\"customerDetail()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"width:100%\">\n\n \n    <div style=\"background-color: #414a58;position: fixed; width:100%;z-index: 1; \">\n\n      <ion-row fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"color:white\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(1)\">\n          <ion-icon name=\"arrow-round-up\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\"></ion-icon>\n          <label style=\"font-size: 14px; margin-bottom:15px;\">Debited</label>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(2)\">\n          <ion-icon name=\"arrow-round-down\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\">\n          </ion-icon>\n          <label style=\"font-size: 14px;margin-bottom:15px;\">Credited</label>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(3)\">\n          <ion-icon name=\"mail\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\"></ion-icon>\n          <label style=\"font-size: 14px;margin-bottom:15px;\">Message</label>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(4)\">\n          <ion-icon name=\"call\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\"></ion-icon>\n          <label style=\"font-size: 14px;margin-bottom:15px;\">Call</label>\n        </div>\n      </ion-row>\n      <ion-row style=\"margin-top:10px\">\n        <ion-col size=\"4\">\n          <label style=\"font-size: 15px;color: whitesmoke; margin-left:5px; \">Transactions</label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end end\">\n            <ion-label  style=\"color:white;margin-right:10px;font-size: 15px; \">Balance :\n              ₹{{totalAmount}} {{totalAmountStatus}}</ion-label>\n           </div>\n           \n        </ion-col>\n      </ion-row>\n      <!-- <h5 fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"color:white; margin-bottom:20px\">Balance :\n        ₹{{totalAmount}} {{totalAmountStatus}}</h5> -->\n    </div>\n  \n    <div style=\"width:100%;margin-top:37%\">\n   \n   \n    <div *ngFor=\"let item of getHistoryArray\" style=\"width:100%;\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <label fxLayoutAlign=\"center center\" style=\"font-size: 10px;color: white; background-color: rgb(182, 180, 180);padding:5px;width:22%; border-radius: 15px;margin-top:10px\">{{item.date}}</label>\n      </div>\n      <div *ngFor=\"let listArray of item.list\" style=\"width:100%;margin-top:10px\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" *ngIf=\"listArray.type == '1' \">\n          <ion-card \n            style=\"border: 1px solid grey; width:200px; margin-left:20px; margin-top:5px;padding:4px\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <label style=\"font-size: 17px;color:red\">₹{{listArray.amount}}</label>\n              </ion-col>\n              <ion-col size=\"5\">\n                <label style=\"font-size: 10px;color:grey\">{{listArray.time}}</label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\">\n                <label style=\"font-size: 13px;color:rgb(17, 17, 17)\">{{listArray.comment}}</label>\n              </ion-col>\n            </ion-row>\n  \n          </ion-card>\n          <ion-row style=\"margin-left:20px\">\n            <ion-col size=\"12\">\n              <label style=\"font-size: 13px;color:grey\">₹{{listArray.balance}} Advance</label>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"end end\" *ngIf=\"listArray.type == '2' \">\n          <ion-card \n            style=\"border: 1px solid grey;width:200px; margin-right:20px; margin-top:5px; padding:4px\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <label style=\"font-size: 17px;color:green\">₹{{listArray.amount}}</label>\n              </ion-col>\n              <ion-col size=\"5\">\n                <label style=\"font-size: 10px;color:grey\">{{listArray.time}}</label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\">\n                <label style=\"font-size: 13px;color:rgb(7, 7, 7)\">{{listArray.comment}}</label>\n              </ion-col>\n            </ion-row>\n  \n          </ion-card>\n          <ion-row style=\"margin-right:20px\">\n            <ion-col size=\"12\">\n              <label style=\"font-size: 13px;color:grey\">₹{{listArray.balance}} Due</label>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <ion-label  style=\"position: fixed;bottom: 20px;background-color:#5f5c5c;color:white ;border-radius: 15px;padding:10px;\">Balance :\n    ₹{{totalAmount}} {{totalAmountStatus}}</ion-label>\n </div> -->\n \n\n</ion-content>"

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

module.exports = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tablebackground {\n  margin-top: 20%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.tableback {\n  margin-top: 5%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.FixedButton {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #d2691e;\n}\n\n.cl-fixed-position-total-amount-bottom {\n  position: fixed;\n  border-radius: 20px;\n  background-color: #2e2d2d;\n  bottom: 20px;\n  color: white;\n  padding: 10px;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.cl-date-label {\n  margin-top: 20px;\n  background-color: #a19c9c;\n  border-radius: 15px;\n  font-size: 10px;\n  width: 70px;\n  padding: 8px;\n  margin: auto;\n}\n\n.cl-debit-button {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 30px;\n  color: white;\n  z-index: 10;\n  background-color: #2e2d2d;\n}\n\n.cl-credit-button {\n  position: fixed;\n  bottom: 20px;\n  left: 20px;\n  border-radius: 30px;\n  color: white;\n  z-index: 10;\n  background-color: #2e2d2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRG93bmxvYWRzL3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvc2hvd2JhbGFuY2VyZWNvcmQvc2hvd2JhbGFuY2VyZWNvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaG93YmFsYW5jZXJlY29yZC9zaG93YmFsYW5jZXJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNESjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0QsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDRkg7O0FES0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBR0EsYUFBQTtBQ0pKOztBRE9BO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0VBQ0MsV0FBQTtFQUNDLFlBQUE7RUFDSCxZQUFBO0FDSko7O0FET0E7RUFHRyxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNOSDs7QURRQTtFQUdHLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ1BIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvd2JhbGFuY2VyZWNvcmQvc2hvd2JhbGFuY2VyZWNvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhYmxlYmFja2dyb3VuZHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDsgXG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLnRhYmxlYmFja3tcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwOyBcbiAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICB3aWR0aDogOTAlO1xufVxuXG5cbi5GaXhlZEJ1dHRvbntcbiAgICB3aWR0aDo2NXB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGJvdHRvbTogMjBweDtcbiAgIHJpZ2h0OiAyMHB4O1xuICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIHotaW5kZXg6IDEwO1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2QyNjkxZTtcbn1cblxuLmNsLWZpeGVkLXBvc2l0aW9uLXRvdGFsLWFtb3VudC1ib3R0b217XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzoxMHB4O1xufVxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNsLWRhdGUtbGFiZWx7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE1NiwgMTU2KTtcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgZm9udC1zaXplOjEwcHg7XG4gICAgICB3aWR0aDo3MHB4O1xuICAgICAgIHBhZGRpbmc6OHB4OyBcbiAgICBtYXJnaW46YXV0bztcbn1cblxuLmNsLWRlYml0LWJ1dHRvbntcbiAgICAvLyB3aWR0aDo2NXB4O1xuICAgIC8vIGhlaWdodDogNjVweDtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGJvdHRvbTogMjBweDtcbiAgIHJpZ2h0OiAyMHB4O1xuICAgYm9yZGVyLXJhZGl1czozMHB4O1xuICAgY29sb3I6d2hpdGU7XG4gICB6LWluZGV4OiAxMDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG59XG4uY2wtY3JlZGl0LWJ1dHRvbntcbiAgICAvLyB3aWR0aDo2NXB4O1xuICAgIC8vIGhlaWdodDogNjVweDtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGJvdHRvbTogMjBweDtcbiAgIGxlZnQ6IDIwcHg7XG4gICBib3JkZXItcmFkaXVzOjMwcHg7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIHotaW5kZXg6IDEwO1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbn1cbiIsIi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YWJsZWJhY2tncm91bmQge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi50YWJsZWJhY2sge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLkZpeGVkQnV0dG9uIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjY5MWU7XG59XG5cbi5jbC1maXhlZC1wb3NpdGlvbi10b3RhbC1hbW91bnQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICBib3R0b206IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5jbC1kYXRlLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExOWM5YztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jbC1kZWJpdC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG59XG5cbi5jbC1jcmVkaXQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG59Il19 */"

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









var ShowbalancerecordPage = /** @class */ (function () {
    function ShowbalancerecordPage(router, activatedRoute, toastController, callNumber, sms, apiCall, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.callNumber = callNumber;
        this.sms = sms;
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
        this.totalAmount = "3000";
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
        // alert("dusplay customerName:"+this.customerName);
        // this.customerName = this.activatedRoute.snapshot.params['customerName'];
        this.getHistoryArray = this.balanceRecord.history;
        this.displayList = this.getHistoryArray['list'];
    };
    ShowbalancerecordPage.prototype.goBackword = function () {
        this.router.navigate(['home']);
    };
    ShowbalancerecordPage.prototype.clickMenuItem = function (getStatus) {
        if (getStatus == "1") {
            // this.presentToast("Amount Debited Successfully");
            this.creditDebitAmount(1);
        }
        else if (getStatus == "2") {
            //  this.presentToast("Amount Debited Successfully");
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
        // let send_data = {};
        // send_data['text'] = "Are you sure you want to discard the changes?";
        // send_data['button2'] = "No";
        // send_data['button1'] = "Yes";
        // const dialogRef = this.dialog.open(UpdatebalancePage, {
        //   width: '450px',
        //   data: send_data
        // });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log("result", result);
        // });
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
        // let detailData =
        // {
        //   "name": data.name,
        //   "mobile": data.mobile,
        //   "address": data.address,
        //   "lname": data.lname,
        //   "amount": data.amount,
        //   "imagepath": data.imagepath,
        //   "email": data.email,
        //   "note": data.note,
        //   "getIndex": i
        // }
        this.router.navigate(['customerdetil', { customerId: this.customerId }]);
    };
    ShowbalancerecordPage.prototype.getBalanceRecord = function () {
        var _this = this;
        // let url = "http://3.6.135.154:20200/api/v1.0.0/balance?page=0&size=10&filters=%7B%7D";
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url + "customers/" + this.customerId + "/passbook";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.getNewRecords = JSON.stringify(MyResponse['result']['list']);
            console.log("success:" + _this.getNewRecords);
        }, function (error) {
            alert("failed:" + error);
        });
    };
    ShowbalancerecordPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"] },
        { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"] },
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
            src_app_service_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_7__["ApicallService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ShowbalancerecordPage);
    return ShowbalancerecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-showbalancerecord-showbalancerecord-module-es5.js.map