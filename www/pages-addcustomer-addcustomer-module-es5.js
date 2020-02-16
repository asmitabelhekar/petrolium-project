(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addcustomer-addcustomer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addcustomer/addcustomer.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addcustomer/addcustomer.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-icon name=\"close\" style=\"width:30px; height:30px; margin:10px ;color : #ffffff\" (click)=\"goBackword()\">\n        </ion-icon>\n        <!-- <checkRecordStatus ion-button class=\"BackButton\" (click)=\"goBackword()\" style=\"margin:10px\"></button> -->\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label class=\"TitleHeader TitleText\" style=\"font-size: 17px;\">\n          Add Customer\n        </ion-label>\n      </ion-col>\n     \n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <form #userForm=\"ngForm\">\n    <!-- <button style=\"width:55px; height: 55px; background-color: #bfc0c9;font-size:20px\" class=\"centerImg\">+</button> -->\n    <ion-row style=\"width:100%;margin-top:10%\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"person\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row >\n          <mat-form-field style=\"width:95%; margin-right:5%\">\n            <input matInput class=\"form-control \" name=\"fname\" required [(ngModel)]=\"userModel.fname\" #fname=\"ngModel\"\n              pattern=\"[a-zA-z]+$\" placeholder=\"First Name\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\">\n                  First Name Is Requird\n                </div>\n              </div>\n            </mat-error>\n\n          </mat-form-field>\n        </ion-row>\n      \n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-10px\">\n      <ion-col size=\"2\">\n        <!-- <ion-icon name=\"person\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon> -->\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row >\n        <mat-form-field style=\"width:95%; margin-right:5%\">\n          <input matInput class=\"form-control \" name=\"lname\" required [(ngModel)]=\"userModel.lname\" #lname=\"ngModel\"\n            pattern=\"[a-zA-z]+$\" placeholder=\"Last Name\" />\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\">\n                Last Name Is Requird\n              </div>\n            </div>\n          </mat-error>\n  \n        </mat-form-field>\n        </ion-row>\n      </ion-col>\n      \n    </ion-row>\n\n\n<ion-row style=\"margin-top:-10px\">\n  <ion-col size=\"2\">\n    <ion-icon name=\"call\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n    </ion-icon>\n  </ion-col>\n  <ion-col size=\"10\">\n    <ion-row >\n    <mat-form-field style=\"width:95%; margin-right:5%\">\n      <input matInput class=\"form-control \" name=\"mobile\" minlength=\"10\" maxlength=\"10\" required [(ngModel)]=\"userModel.mobile\" #mobile=\"ngModel\"\n        pattern=\"[0-9]+$\" placeholder=\"Mobile\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n            Mobile Number Is Requird\n          </div>\n        </div>\n      </mat-error>\n\n    </mat-form-field>\n    </ion-row>\n  </ion-col>\n</ion-row>\n    \n<ion-row style=\"margin-top:-10px\">\n  <ion-col size=\"2\">\n    <ion-icon name=\"mail\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n    </ion-icon>\n  </ion-col>\n\n  <ion-col size=\"10\">\n    <ion-row >\n    <mat-form-field style=\"width:95%; margin-right:5%\">\n      <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"userModel.email\" #email=\"ngModel\"\n        pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" placeholder=\"Email\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n            Email Is Requird\n          </div>\n        </div>\n      </mat-error>\n\n    </mat-form-field>\n    </ion-row>\n  </ion-col>\n</ion-row>\n\n   \n\n    <ion-row style=\"margin-top:-10px\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"home\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row >\n        <mat-form-field style=\"width:95%; margin-right:5%\">\n          <textarea matInput class=\"form-control \" name=\"address\"  [(ngModel)]=\"userModel.address\" #address=\"ngModel\"\n            pattern=\"[a-zA-z]+$\" placeholder=\"Address\" ></textarea>\n        </mat-form-field>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-10px\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"document\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n    \n      <ion-col size=\"10\">\n        <ion-row >\n        <mat-form-field style=\"width:95%; margin-right:5%\">\n          <textarea matInput class=\"form-control \" name=\"note\" [(ngModel)]=\"userModel.note\" #note=\"ngModel\"\n            pattern=\"[a-zA-z]+$\" placeholder=\"Note\" ></textarea>\n        \n        </mat-form-field>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n   \n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:15px\">\n      <button mat-raised-button\n        [disabled]=\"mobile.invalid || address.invalid || fname.invalid || lname.invalid \"\n        class=\"submitButton\" (click)=\"addCustomerData()\">Save</button>\n\n    </div>\n  </form>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddcustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPageRoutingModule", function() { return AddcustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcustomer.page */ "./src/app/pages/addcustomer/addcustomer.page.ts");




var routes = [
    {
        path: '',
        component: _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__["AddcustomerPage"]
    }
];
var AddcustomerPageRoutingModule = /** @class */ (function () {
    function AddcustomerPageRoutingModule() {
    }
    AddcustomerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddcustomerPageRoutingModule);
    return AddcustomerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer.module.ts ***!
  \*********************************************************/
/*! exports provided: AddcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPageModule", function() { return AddcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcustomer-routing.module */ "./src/app/pages/addcustomer/addcustomer-routing.module.ts");
/* harmony import */ var _addcustomer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addcustomer.page */ "./src/app/pages/addcustomer/addcustomer.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");









var AddcustomerPageModule = /** @class */ (function () {
    function AddcustomerPageModule() {
    }
    AddcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddcustomerPageRoutingModule"]
            ],
            declarations: [_addcustomer_page__WEBPACK_IMPORTED_MODULE_4__["AddcustomerPage"]]
        })
    ], AddcustomerPageModule);
    return AddcustomerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration-main {\n  margin-top: 5%;\n  width: 100%;\n  border: 1px solid red;\n}\n\nmat-card {\n  min-width: 80%;\n}\n\n.submitButton {\n  height: 48px;\n  width: 70%;\n  margin-left: 15%;\n  margin-right: 15%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.new-background-color {\n  --background: #494747;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRG93bmxvYWRzL3BldHJvbGl1bS1wcm9qZWN0L3NyYy9hcHAvcGFnZXMvYWRkY3VzdG9tZXIvYWRkY3VzdG9tZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGRjdXN0b21lci9hZGRjdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0k7RUFDQSxjQUFBO0FDRUo7O0FEQ0k7RUFFSSxZQUFBO0VBQ0EsVUFBQTtFQUNDLGdCQUFBO0VBQ0QsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ0NSOztBRElJO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZSOztBREtJO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ0hSOztBRE9BO0VBQ0kscUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGN1c3RvbWVyL2FkZGN1c3RvbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RyYXRpb24tbWFpbntcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgfVxuICAgIG1hdC1jYXJke1xuICAgIG1pbi13aWR0aDogODAlO1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0QnV0dG9ue1xuICAgXG4gICAgICAgIGhlaWdodDogNDhweDtcdFxuICAgICAgICB3aWR0aDogNzAlOyBcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcdFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcdFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICAgICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAvLyBib3R0b206IDEwcHg7XG4gICAgICAgIC8vIHJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAuVGl0bGVIZWFkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIH1cbiAgICAuVGl0bGVUZXh0e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIHdpZHRoOiA4MSU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBcblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzQ5NDc0NztcbiAgfSIsIi5yZWdpc3RyYXRpb24tbWFpbiB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1pbi13aWR0aDogODAlO1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogIzQ5NDc0Nztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/addcustomer/addcustomer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/addcustomer/addcustomer.page.ts ***!
  \*******************************************************/
/*! exports provided: AddcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPage", function() { return AddcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var AddcustomerPage = /** @class */ (function () {
    function AddcustomerPage(router, toast, alertController, route) {
        this.router = router;
        this.toast = toast;
        this.alertController = alertController;
        this.route = route;
        this.userModel = {};
    }
    AddcustomerPage.prototype.ngOnInit = function () {
        this.recordstatus = this.route.snapshot.params['detailCustomerdata'];
        console.log("detailCustomerdata" + this.recordstatus);
        var displayArrayValues = JSON.parse(this.recordstatus);
        this.userModel['mobile'] = displayArrayValues.mobile;
        this.userModel['address'] = displayArrayValues.address;
        this.userModel['email'] = displayArrayValues.email;
        this.userModel['note'] = displayArrayValues.note;
        var fullname = displayArrayValues.fname;
        if (fullname != "") {
            var names = fullname.split(" ");
            this.userModel['fname'] = names[0];
            this.userModel['lname'] = names[(names.length - 1)];
        }
        this.checkStatus = displayArrayValues.checkstatus;
        if (this.checkStatus == "add") {
            this.savetext = "Add Customer";
        }
        else if (this.checkStatus == "update") {
            this.savetext = "Update Customer";
        }
    };
    AddcustomerPage.prototype.goBackword = function () {
        this.displayCloseAlert();
        // this.router.navigate(['home']);
    };
    AddcustomerPage.prototype.addCustomerData = function () {
        alert("display customer data:" + JSON.stringify(this.userModel));
        this.presentToast("Customer added successfully");
        this.router.navigate(['/home']);
    };
    AddcustomerPage.prototype.presentToast = function (message) {
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
    AddcustomerPage.prototype.displayCloseAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: 'Are you sure want to discard changes',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        alert.dismiss();
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        _this.router.navigate(['/home']);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddcustomerPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AddcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcustomer',
            template: __webpack_require__(/*! raw-loader!./addcustomer.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addcustomer/addcustomer.page.html"),
            styles: [__webpack_require__(/*! ./addcustomer.page.scss */ "./src/app/pages/addcustomer/addcustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddcustomerPage);
    return AddcustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-addcustomer-addcustomer-module-es5.js.map