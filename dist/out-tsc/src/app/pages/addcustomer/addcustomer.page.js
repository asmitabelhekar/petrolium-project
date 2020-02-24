import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, Events } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
let AddcustomerPage = class AddcustomerPage {
    constructor(router, toast, loader, apiCall, alertController, events, route) {
        this.router = router;
        this.toast = toast;
        this.loader = loader;
        this.apiCall = apiCall;
        this.alertController = alertController;
        this.events = events;
        this.route = route;
        this.userModel = {};
    }
    ngOnInit() {
        this.recordstatus = this.route.snapshot.params['detailCustomerdata'];
        console.log("detailCustomerdata" + this.recordstatus);
        let displayArrayValues = JSON.parse(this.recordstatus);
        this.userModel['mobile'] = displayArrayValues.mobile;
        this.userModel['address'] = displayArrayValues.address;
        this.userModel['email'] = displayArrayValues.email;
        this.userModel['note'] = displayArrayValues.note;
        this.customerId = displayArrayValues.customerId;
        let fullname = displayArrayValues.fname;
        if (fullname != "") {
            let names = fullname.split(" ");
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
    }
    goBackword() {
        if (this.checkStatus == "add") {
            this.displayAlert();
        }
        else if (this.checkStatus == "update") {
            this.displayCloseAlert();
        }
        else {
            this.displayAlert();
        }
    }
    addCustomerData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loader.presentLoading();
            let send_date = {};
            this.mobieNumber = this.userModel['mobile'];
            send_date['firstName'] = this.userModel['fname'];
            send_date['lastName'] = this.userModel['lname'];
            send_date['mobile'] = this.mobieNumber.toString();
            send_date['address'] = this.userModel['address'];
            if (this.userModel['note'] != "") {
                send_date['note'] = this.userModel['note'];
            }
            if (this.userModel['email'] != "") {
                send_date['email'] = this.userModel['email'];
            }
            send_date['isActive'] = 1;
            if (this.checkStatus == "add") {
                this.url = environment.base_url + "customers";
                this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
                    console.log("MyResponse ", MyResponse);
                    this.events.publish('Event-AddCustomer');
                    this.router.navigate(['/home']);
                    let msg = MyResponse['message'];
                    this.presentToast(msg);
                    this.loader.stopLoading();
                }, error => {
                    this.presentToast("Something went wrong");
                    console.log(error.error.message);
                });
            }
            else if (this.checkStatus == "update") {
                this.loader.presentLoading();
                this.url = environment.base_url + "customers/" + this.customerId;
                this.apiCall.put(this.url, send_date).subscribe(MyResponse => {
                    console.log("MyResponse ", MyResponse);
                    this.events.publish('Event-AddCustomer');
                    this.router.navigate(['/home']);
                    let msg = MyResponse['message'];
                    this.presentToast(msg);
                    this.loader.stopLoading();
                }, error => {
                    this.loader.stopLoading();
                    this.presentToast("Something went wrong");
                    console.log(error.error.message);
                });
            }
            else {
            }
        });
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 4000
            });
            toast.present();
        });
    }
    displayCloseAlert() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Are you sure want to discard changes',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            alert.dismiss();
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['customerdetil', { customerId: this.customerId }]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    displayAlert() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Are you sure want to discard changes',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            alert.dismiss();
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['/home']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AddcustomerPage = tslib_1.__decorate([
    Component({
        selector: 'app-addcustomer',
        templateUrl: './addcustomer.page.html',
        styleUrls: ['./addcustomer.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ToastController,
        LoaderserviceService,
        ApicallService,
        AlertController,
        Events,
        ActivatedRoute])
], AddcustomerPage);
export { AddcustomerPage };
//# sourceMappingURL=addcustomer.page.js.map