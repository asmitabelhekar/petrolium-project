(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showbalancerecord-showbalancerecord-module"],{

/***/ "./node_modules/@ionic-native/call-number/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/call-number/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: CallNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallNumber", function() { return CallNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var CallNumber = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CallNumber, _super);
    function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumber.prototype.isCallSupported = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCallSupported", {}, arguments); };
    CallNumber.pluginName = "CallNumber";
    CallNumber.plugin = "call-number";
    CallNumber.pluginRef = "plugins.CallNumber";
    CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumber.platforms = ["Android", "iOS"];
    CallNumber = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CallNumber);
    return CallNumber;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbnVtYmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCeEMsc0NBQWlCOzs7O0lBVS9DLCtCQUFVLGFBQUMsWUFBb0IsRUFBRSxnQkFBeUI7SUFTMUQsb0NBQWU7Ozs7OztJQW5CSixVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBaEN2QjtFQWdDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBDYWxsIE51bWJlclxuICogQGRlc2NyaXB0aW9uXG4gKiBDYWxsIGEgbnVtYmVyIGRpcmVjdGx5IGZyb20geW91ciBDb3Jkb3ZhL0lvbmljIGFwcGxpY2F0aW9uLlxuICogKipOT1RFKio6IFRoZSBpT1MgU2ltdWxhdG9yIChhbmQgbWF5YmUgQW5kcm9pZCBTaW11bGF0b3JzKSBkbyBub3QgcHJvdmlkZSBhY2Nlc3MgdG8gdGhlIHBob25lIHN1YnN5c3RlbS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGxOdW1iZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbGwtbnVtYmVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsTnVtYmVyOiBDYWxsTnVtYmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5jYWxsTnVtYmVyLmNhbGxOdW1iZXIoXCIxODAwMTAxMDEwMVwiLCB0cnVlKVxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2coJ0xhdW5jaGVkIGRpYWxlciEnLCByZXMpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBsYXVuY2hpbmcgZGlhbGVyJywgZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FsbE51bWJlcicsXG4gIHBsdWdpbjogJ2NhbGwtbnVtYmVyJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5DYWxsTnVtYmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Sb2hmb3Noby9Db3Jkb3ZhQ2FsbE51bWJlclBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGxOdW1iZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxscyBhIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbnVtYmVyVG9DYWxsIFRoZSBwaG9uZSBudW1iZXIgdG8gY2FsbCBhcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ5cGFzc0FwcENob29zZXIgU2V0IHRvIHRydWUgdG8gYnlwYXNzIHRoZSBhcHAgY2hvb3NlciBhbmQgZ28gZGlyZWN0bHkgdG8gZGlhbGVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@ionic-native/sms/ngx/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ionic-native/sms/ngx/index.js ***!
  \*****************************************************/
/*! exports provided: SMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMS", function() { return SMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var SMS = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SMS, _super);
    function SMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMS.prototype.send = function (phoneNumber, message, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "send", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    SMS.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasPermission", { "platforms": ["Android"] }, arguments); };
    SMS.pluginName = "SMS";
    SMS.plugin = "cordova-sms-plugin";
    SMS.pluginRef = "sms";
    SMS.repo = "https://github.com/cordova-sms/cordova-sms-plugin";
    SMS.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    SMS = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SMS);
    return SMS;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Ntcy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRC9DLCtCQUFpQjs7OztJQVl4QyxrQkFBSSxhQUNGLFdBQThCLEVBQzlCLE9BQWUsRUFDZixPQUFvQjtJQVl0QiwyQkFBYTs7Ozs7O0lBM0JGLEdBQUc7UUFEZixVQUFVLEVBQUU7T0FDQSxHQUFHO2NBckRoQjtFQXFEeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25zIGZvciBzZW5kaW5nIGFuIFNNU1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNtc09wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVwbGFjZSBcXG4gYnkgYSBuZXcgbGluZS4gRGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHJlcGxhY2VMaW5lQnJlYWtzPzogYm9vbGVhbjtcblxuICBhbmRyb2lkPzogU21zT3B0aW9uc0FuZHJvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU21zT3B0aW9uc0FuZHJvaWQge1xuICAvKipcbiAgICogU2V0IHRvIFwiSU5URU5UXCIgdG8gc2VuZCBTTVMgd2l0aCB0aGUgbmF0aXZlIGFuZHJvaWQgU01TIG1lc3NhZ2luZy4gTGVhdmluZyBpdCBlbXB0eSB3aWxsIHNlbmQgdGhlIFNNUyB3aXRob3V0IG9wZW5pbmcgYW55IGFwcC5cbiAgICovXG4gIGludGVudD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBTTVNcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXNtcy1wbHVnaW4uIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTTVMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXNtcy9jb3Jkb3ZhLXNtcy1wbHVnaW4pLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU01TIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zbXMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNtczogU01TKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIFNlbmQgYSB0ZXh0IG1lc3NhZ2UgdXNpbmcgZGVmYXVsdCBvcHRpb25zXG4gKiB0aGlzLnNtcy5zZW5kKCc0MTYxMjM0NTYnLCAnSGVsbG8gd29ybGQhJyk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBTbXNPcHRpb25zXG4gKiBTbXNPcHRpb25zQW5kcm9pZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NNUycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtc21zLXBsdWdpbicsXG4gIHBsdWdpblJlZjogJ3NtcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1zbXMvY29yZG92YS1zbXMtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU01TIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2VuZHMgc21zIHRvIGEgbnVtYmVyXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciB7c3RyaW5nfHN0cmluZ1tdfSBQaG9uZSBudW1iZXJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7U21zT3B0aW9uc30gT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIFNNUyBoYXMgYmVlbiBzZW50XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDRcbiAgfSlcbiAgc2VuZChcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBTbXNPcHRpb25zXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gbGV0cyB5b3Uga25vdyBpZiB0aGUgYXBwIGhhcyBwZXJtaXNzaW9uIHRvIHNlbmQgU01TXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgd2UgaGF2ZSBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/showbalancerecord/showbalancerecord.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/showbalancerecord/showbalancerecord.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">{{customerName | titlecase}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"width:100%\">\n\n \n    <div style=\"background-color: #414a58;position: fixed; width:100%;z-index: 1; \">\n\n      <ion-row fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"color:white\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(1)\">\n          <ion-icon name=\"arrow-round-up\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\"></ion-icon>\n          <label style=\"font-size: 14px; margin-bottom:15px;\">Debited</label>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(2)\">\n          <ion-icon name=\"arrow-round-down\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\">\n          </ion-icon>\n          <label style=\"font-size: 14px;margin-bottom:15px;\">Credited</label>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(3)\">\n          <ion-icon name=\"mail\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\"></ion-icon>\n          <label style=\"font-size: 14px;margin-bottom:15px;\">Message</label>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"clickMenuItem(4)\">\n          <ion-icon name=\"call\" style=\"width:25px;height:25px; margin-bottom:10px; margin-top:20px\"></ion-icon>\n          <label style=\"font-size: 14px;margin-bottom:15px;\">Call</label>\n        </div>\n      </ion-row>\n      <ion-row style=\"margin-top:10px\">\n        <ion-col size=\"4\">\n          <label style=\"font-size: 15px;color: whitesmoke; margin-left:5px; \">Transactions</label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end end\">\n            <ion-label  style=\"color:white;margin-right:10px;font-size: 15px; \">Balance :\n              ₹{{totalAmount}} {{totalAmountStatus}}</ion-label>\n           </div>\n           \n        </ion-col>\n      </ion-row>\n      <!-- <h5 fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"color:white; margin-bottom:20px\">Balance :\n        ₹{{totalAmount}} {{totalAmountStatus}}</h5> -->\n    </div>\n  \n    <div style=\"width:100%;margin-top:37%\">\n   \n   \n    <div *ngFor=\"let item of getHistoryArray\" style=\"width:100%;\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <label fxLayoutAlign=\"center center\" style=\"font-size: 10px;color: white; background-color: rgb(182, 180, 180);padding:5px;width:22%; border-radius: 15px;margin-top:10px\">{{item.date}}</label>\n      </div>\n      <div *ngFor=\"let listArray of item.list\" style=\"width:100%;margin-top:10px\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" *ngIf=\"listArray.type == '1' \">\n          <ion-card \n            style=\"border: 1px solid grey; width:200px; margin-left:20px; margin-top:5px;padding:4px\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <label style=\"font-size: 17px;color:red\">₹{{listArray.amount}}</label>\n              </ion-col>\n              <ion-col size=\"5\">\n                <label style=\"font-size: 10px;color:grey\">{{listArray.time}}</label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\">\n                <label style=\"font-size: 13px;color:rgb(17, 17, 17)\">{{listArray.comment}}</label>\n              </ion-col>\n            </ion-row>\n  \n          </ion-card>\n          <ion-row style=\"margin-left:20px\">\n            <ion-col size=\"12\">\n              <label style=\"font-size: 13px;color:grey\">₹{{listArray.balance}} Advance</label>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"end end\" *ngIf=\"listArray.type == '2' \">\n          <ion-card \n            style=\"border: 1px solid grey;width:200px;margin-right:20px; margin-top:5px;padding:4px\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <label style=\"font-size: 17px;color:green\">₹{{listArray.amount}}</label>\n              </ion-col>\n              <ion-col size=\"5\">\n                <label style=\"font-size: 10px;color:grey\">{{listArray.time}}</label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\">\n                <label style=\"font-size: 13px;color:rgb(7, 7, 7)\">{{listArray.comment}}</label>\n              </ion-col>\n            </ion-row>\n  \n          </ion-card>\n          <ion-row style=\"margin-right:20px\">\n            <ion-col size=\"12\">\n              <label style=\"font-size: 13px;color:grey\">₹{{listArray.balance}} Due</label>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <ion-label  style=\"position: fixed;bottom: 20px;background-color:#5f5c5c;color:white ;border-radius: 15px;padding:10px;\">Balance :\n    ₹{{totalAmount}} {{totalAmountStatus}}</ion-label>\n </div> -->\n \n\n</ion-content>"

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







var ShowbalancerecordPage = /** @class */ (function () {
    function ShowbalancerecordPage(router, activatedRoute, toastController, callNumber, sms, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.callNumber = callNumber;
        this.sms = sms;
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
    }
    ShowbalancerecordPage.prototype.ngOnInit = function () {
        this.customerName = this.activatedRoute.snapshot.params['customerName'];
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
            amountState: value
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
        this.sms.send("9527902622", '', options)
            .then(function () {
        }, function () {
        });
    };
    ShowbalancerecordPage.prototype.makeCall = function () {
        this.callNumber.callNumber("9527902622", true)
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
    ShowbalancerecordPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"] },
        { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"] },
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
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ShowbalancerecordPage);
    return ShowbalancerecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-showbalancerecord-showbalancerecord-module-es5.js.map