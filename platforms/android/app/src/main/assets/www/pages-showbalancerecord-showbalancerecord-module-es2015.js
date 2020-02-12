(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showbalancerecord-showbalancerecord-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/showbalancerecord/showbalancerecord.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">{{customerName}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let item of balaceRecord\" style=\"margin-top:5%\">\n    <label fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"cl-date-label\">{{item.date}}</label>\n    <!-- <div *ngFor=\"let creditedItem of credited\"> -->\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngIf=\"item.credited != '' || item.credited != null\"\n      style=\"margin-top:10px; margin-left:20px;\">\n      <mat-card>\n        <mat-card-content>\n          <label style=\"color:red; font-size:20px;\"\n            *ngIf=\"item.credited != '' || item.credited != null\"><b>₹{{item.credited}}</b></label>\n          <label>\n            12:35 AM\n          </label>\n        </mat-card-content>\n      </mat-card>\n      <!-- ₹400 Due -->\n    </div>\n    <!-- </div> -->\n\n    <!-- <div *ngFor=\"let debitedItem of debited\"> -->\n    <div fxLayout=\"row\" fxLayoutAlign=\"end end\" *ngIf=\"item.debited != '' || item.debited != null\"\n      style=\"margin-top:10px; margin-right:20px;\">\n      <mat-card>\n        <mat-card-content>\n          <label style=\"color:#20571b; font-size:20px\"\n            *ngIf=\"item.debited != '' || item.debited != null\"><b>₹{{item.debited}}</b></label>\n          <label>\n            12:35 AM\n          </label>\n        </mat-card-content>\n      </mat-card>\n      <!-- ₹4,600 Advance -->\n    </div>\n    <!-- </div> -->\n  </div>\n  <!-- <table class=\"tableback\" align=\"center\">\n    <tr class=\"tablebackground\">\n      <th class=\"tablebackground\">Date</th>\n      <th class=\"tablebackground\">Credited</th>\n      <th class=\"tablebackground\">Debited</th>\n      \n    </tr>\n    <tr *ngFor=\"let lg of getBalanceDetail\">\n      <td class=\"tablebackground\" align=\"center\">{{lg.date}}</td>\n      <td tooltip=\"lg.credited\" class=\"tablebackground\" align=\"center\">{{lg.credited}}</td>\n      <td class=\"tablebackground\" align=\"center\">\n          <span  style=\"color: black;\" >{{lg.debited}}</span> \n      </td>\n     \n    </tr>\n    </table> -->\n\n    <ion-row class=\"cl-credit-debit-button\" fxLayout=\"row\" fxLayoutAlign=\"center\" style=\"padding: 15px;\">\n      <ion-col size=\"\" style=\"border-right: 1px solid white\">\n        <label style=\"font-size: 16px;padding: 10px;\">Credit</label>\n      </ion-col>\n      <ion-col size=\"5\">\n        <label style=\"font-size: 16px;\">Debit</label>\n      </ion-col>\n     </ion-row>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <ion-row class=\"cl-credit-debit-button\" >\n      <ion-col size=\"6\" style=\"border-right: 1px solid white;\">\n        <label style=\"font-size: 16px;margin:10px\">Credit</label>\n\n        <!-- <ion-row>\n          <ion-col size=\"7\">\n            <label style=\"font-size: 16px;padding:20px\">Credit</label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon name=\"arrow-round-down\" style=\"width:25px; height: 25px;border: 1px solid white; border-radius: 50%;margin-top:10px \"></ion-icon>\n          </ion-col>\n        </ion-row> -->\n\n      </ion-col>\n\n      <ion-col size=\"6\" style=\"padding:5px\">\n        <label style=\"font-size: 16px;\">Debit</label>\n\n        <!-- <ion-row>\n          <ion-col size=\"7\">\n        <label style=\"font-size: 16px;padding:20px\">Debit</label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon name=\"arrow-round-up\" style=\"width:25px; height: 25px;border: 1px solid white; border-radius: 50%; margin-top:10px\"></ion-icon>\n          </ion-col>\n        </ion-row> -->\n\n      </ion-col>\n\n    </ion-row>\n</div>\n   \n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _showbalancerecord_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showbalancerecord.page */ "./src/app/pages/showbalancerecord/showbalancerecord.page.ts");




const routes = [
    {
        path: '',
        component: _showbalancerecord_page__WEBPACK_IMPORTED_MODULE_3__["ShowbalancerecordPage"]
    }
];
let ShowbalancerecordPageRoutingModule = class ShowbalancerecordPageRoutingModule {
};
ShowbalancerecordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowbalancerecordPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showbalancerecord_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showbalancerecord-routing.module */ "./src/app/pages/showbalancerecord/showbalancerecord-routing.module.ts");
/* harmony import */ var _showbalancerecord_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showbalancerecord.page */ "./src/app/pages/showbalancerecord/showbalancerecord.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let ShowbalancerecordPageModule = class ShowbalancerecordPageModule {
};
ShowbalancerecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _showbalancerecord_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowbalancerecordPageRoutingModule"]
        ],
        declarations: [_showbalancerecord_page__WEBPACK_IMPORTED_MODULE_6__["ShowbalancerecordPage"]]
    })
], ShowbalancerecordPageModule);



/***/ }),

/***/ "./src/app/pages/showbalancerecord/showbalancerecord.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/showbalancerecord/showbalancerecord.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tablebackground {\n  margin-top: 20%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.tableback {\n  margin-top: 5%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.FixedButton {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #d2691e;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.cl-date-label {\n  margin-top: 20px;\n  background-color: #a19c9c;\n  border-radius: 15px;\n  font-size: 10px;\n  width: 70px;\n  padding: 8px;\n  margin: auto;\n}\n\n.cl-credit-debit-button {\n  position: fixed;\n  bottom: 20px;\n  border-radius: 30px;\n  color: white;\n  z-index: 10;\n  background-color: #2e2d2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzbWl0YS9wcm9qZWN0L3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvc2hvd2JhbGFuY2VyZWNvcmQvc2hvd2JhbGFuY2VyZWNvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaG93YmFsYW5jZXJlY29yZC9zaG93YmFsYW5jZXJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNESjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0QsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDRkg7O0FES0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQyxtQkFBQTtFQUNBLGVBQUE7RUFDQyxXQUFBO0VBQ0MsWUFBQTtFQUNILFlBQUE7QUNGSjs7QURLQTtFQUdHLGVBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDTEgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG93YmFsYW5jZXJlY29yZC9zaG93YmFsYW5jZXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFibGViYWNrZ3JvdW5ke1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwOyBcbiAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICB3aWR0aDogOTAlO1xufVxuXG4udGFibGViYWNre1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7IFxuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIHdpZHRoOiA5MCU7XG59XG5cblxuLkZpeGVkQnV0dG9ue1xuICAgIHdpZHRoOjY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgYm90dG9tOiAyMHB4O1xuICAgcmlnaHQ6IDIwcHg7XG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgIGNvbG9yOndoaXRlO1xuICAgei1pbmRleDogMTA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI2OTFlO1xufVxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNsLWRhdGUtbGFiZWx7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE1NiwgMTU2KTtcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgZm9udC1zaXplOjEwcHg7XG4gICAgICB3aWR0aDo3MHB4O1xuICAgICAgIHBhZGRpbmc6OHB4OyBcbiAgICBtYXJnaW46YXV0bztcbn1cblxuLmNsLWNyZWRpdC1kZWJpdC1idXR0b257XG4gICAgLy8gd2lkdGg6NjVweDtcbiAgICAvLyBoZWlnaHQ6IDY1cHg7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBib3R0b206IDIwcHg7XG4vLyAgICByaWdodDogMjBweDtcbiAgIGJvcmRlci1yYWRpdXM6MzBweDtcbiAgIGNvbG9yOndoaXRlO1xuICAgei1pbmRleDogMTA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xufVxuIiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhYmxlYmFja2dyb3VuZCB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnRhYmxlYmFjayB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uRml4ZWRCdXR0b24ge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyNjkxZTtcbn1cblxuLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5jbC1kYXRlLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExOWM5YztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jbC1jcmVkaXQtZGViaXQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ShowbalancerecordPage = class ShowbalancerecordPage {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.balaceRecord = [
            {
                "date": "01/02/2020",
                "credited": "",
                "debited": "2500",
            }, {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
            {
                "date": "01/02/2020",
                "credited": "2000",
                "debited": "2500",
            },
        ];
    }
    ngOnInit() {
        this.customerName = this.activatedRoute.snapshot.params['customerName'];
    }
    goBackword() {
        this.router.navigate(['home']);
    }
};
ShowbalancerecordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ShowbalancerecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showbalancerecord',
        template: __webpack_require__(/*! raw-loader!./showbalancerecord.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html"),
        styles: [__webpack_require__(/*! ./showbalancerecord.page.scss */ "./src/app/pages/showbalancerecord/showbalancerecord.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ShowbalancerecordPage);



/***/ })

}]);
//# sourceMappingURL=pages-showbalancerecord-showbalancerecord-module-es2015.js.map