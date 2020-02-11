(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showbalancerecord-showbalancerecord-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/showbalancerecord/showbalancerecord.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">{{customerName}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let item of balaceRecord\" style=\"margin-top:5%\">\n    <label fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"cl-date-label\">{{item.date}}</label>\n    <!-- <div *ngFor=\"let creditedItem of credited\"> -->\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngIf=\"item.credited != '' || item.credited != null\"\n      style=\"margin-top:10px; margin-left:20px;\">\n      <mat-card>\n        <mat-card-content>\n          <label style=\"color:red; font-size:20px;\"\n            *ngIf=\"item.credited != '' || item.credited != null\"><b>₹{{item.credited}}</b></label>\n          <label>\n            12:35 AM\n          </label>\n        </mat-card-content>\n      </mat-card>\n      <!-- ₹400 Due -->\n    </div>\n    <!-- </div> -->\n\n    <!-- <div *ngFor=\"let debitedItem of debited\"> -->\n    <div fxLayout=\"row\" fxLayoutAlign=\"end end\" *ngIf=\"item.debited != '' || item.debited != null\"\n      style=\"margin-top:10px; margin-right:20px;\">\n      <mat-card>\n        <mat-card-content>\n          <label style=\"color:#20571b; font-size:20px\"\n            *ngIf=\"item.debited != '' || item.debited != null\"><b>₹{{item.debited}}</b></label>\n          <label>\n            12:35 AM\n          </label>\n        </mat-card-content>\n      </mat-card>\n      <!-- ₹4,600 Advance -->\n    </div>\n    <!-- </div> -->\n  </div>\n  <!-- <table class=\"tableback\" align=\"center\">\n    <tr class=\"tablebackground\">\n      <th class=\"tablebackground\">Date</th>\n      <th class=\"tablebackground\">Credited</th>\n      <th class=\"tablebackground\">Debited</th>\n      \n    </tr>\n    <tr *ngFor=\"let lg of getBalanceDetail\">\n      <td class=\"tablebackground\" align=\"center\">{{lg.date}}</td>\n      <td tooltip=\"lg.credited\" class=\"tablebackground\" align=\"center\">{{lg.credited}}</td>\n      <td class=\"tablebackground\" align=\"center\">\n          <span  style=\"color: black;\" >{{lg.debited}}</span> \n      </td>\n     \n    </tr>\n    </table> -->\n  <ion-row class=\"cl-credit-debit-button\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n    <ion-col size=\"5\">\n      <ion-icon name=\"arrow-round-down\"></ion-icon>\n      <label>Accept Payment</label>\n      <!-- <button mat-raised-button (click)=\"updateBalance()\"> Accept Payment </button> -->\n    </ion-col>\n    <ion-col size=\"5\">\n\n      <ion-icon name=\"arrow-round-up\"></ion-icon>\n      <label>\n        Give Credit \n      </label>\n      <!-- <button mat-raised-button (click)=\"updateBalance()\"> Give Credit </button> -->\n    </ion-col>\n\n  </ion-row>\n</ion-content>"

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
                _showbalancerecord_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowbalancerecordPageRoutingModule"]
            ],
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

module.exports = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.tablebackground {\n  margin-top: 20%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.tableback {\n  margin-top: 5%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.FixedButton {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #d2691e;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.cl-date-label {\n  margin-top: 20px;\n  background-color: #a19c9c;\n  border-radius: 15px;\n  font-size: 10px;\n  width: 70px;\n  padding: 8px;\n  margin: auto;\n}\n\n.cl-credit-debit-button {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 30%;\n  color: white;\n  z-index: 10;\n  background-color: #2e2d2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvcGV0cm9saXVtLXByb2plY3Qvc3JjL2FwcC9wYWdlcy9zaG93YmFsYW5jZXJlY29yZC9zaG93YmFsYW5jZXJlY29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nob3diYWxhbmNlcmVjb3JkL3Nob3diYWxhbmNlcmVjb3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0RKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDRCxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNGSDs7QURLQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtFQUNDLFdBQUE7RUFDQyxZQUFBO0VBQ0gsWUFBQTtBQ0ZKOztBREtBO0VBR0csZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDSkgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG93YmFsYW5jZXJlY29yZC9zaG93YmFsYW5jZXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFibGViYWNrZ3JvdW5ke1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwOyBcbiAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICB3aWR0aDogOTAlO1xufVxuXG4udGFibGViYWNre1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7IFxuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIHdpZHRoOiA5MCU7XG59XG5cblxuLkZpeGVkQnV0dG9ue1xuICAgIHdpZHRoOjY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgYm90dG9tOiAyMHB4O1xuICAgcmlnaHQ6IDIwcHg7XG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgIGNvbG9yOndoaXRlO1xuICAgei1pbmRleDogMTA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI2OTFlO1xufVxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNsLWRhdGUtbGFiZWx7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE1NiwgMTU2KTtcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgZm9udC1zaXplOjEwcHg7XG4gICAgICB3aWR0aDo3MHB4O1xuICAgICAgIHBhZGRpbmc6OHB4OyBcbiAgICBtYXJnaW46YXV0bztcbn1cblxuLmNsLWNyZWRpdC1kZWJpdC1idXR0b257XG4gICAgLy8gd2lkdGg6NjVweDtcbiAgICAvLyBoZWlnaHQ6IDY1cHg7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBib3R0b206IDIwcHg7XG4gICByaWdodDogMjBweDtcbiAgIGJvcmRlci1yYWRpdXM6MzAlO1xuICAgY29sb3I6d2hpdGU7XG4gICB6LWluZGV4OiAxMDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XG59XG4iLCIuVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFibGViYWNrZ3JvdW5kIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4udGFibGViYWNrIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5GaXhlZEJ1dHRvbiB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI2OTFlO1xufVxuXG4uY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNsLWRhdGUtbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTE5YzljO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNsLWNyZWRpdC1kZWJpdC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbn0iXX0= */"

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



var ShowbalancerecordPage = /** @class */ (function () {
    function ShowbalancerecordPage(router, activatedRoute) {
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
    ShowbalancerecordPage.prototype.ngOnInit = function () {
        this.customerName = this.activatedRoute.snapshot.params['customerName'];
    };
    ShowbalancerecordPage.prototype.goBackword = function () {
        this.router.navigate(['home']);
    };
    ShowbalancerecordPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ShowbalancerecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showbalancerecord',
            template: __webpack_require__(/*! raw-loader!./showbalancerecord.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html"),
            styles: [__webpack_require__(/*! ./showbalancerecord.page.scss */ "./src/app/pages/showbalancerecord/showbalancerecord.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ShowbalancerecordPage);
    return ShowbalancerecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-showbalancerecord-showbalancerecord-module-es5.js.map