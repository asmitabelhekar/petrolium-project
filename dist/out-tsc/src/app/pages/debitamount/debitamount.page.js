import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
let DebitamountPage = class DebitamountPage {
    constructor(toast, apiCall, loader, router) {
        this.toast = toast;
        this.apiCall = apiCall;
        this.loader = loader;
        this.router = router;
        this.customerList = [];
        this.userModel = {};
        this.myControl = new FormControl();
        this.autoCompleteArray = [];
        this.recordNotPresent = 0;
    }
    ngOnInit() {
        this.getCustomerList();
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(value => this._filter(value)));
        this.userModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
        let loginStatus = localStorage.getItem("loginStatus");
    }
    getCustomerList() {
        let url = environment.base_url + "customers";
        console.log("url :" + url);
        this.apiCall.get(url).subscribe(MyResponse => {
            this.getCusstomers = MyResponse['result']['list'];
            for (let i = 0; i < this.getCusstomers.length; i++) {
                let fullName = this.getCusstomers[i]['firstName'] + " " + this.getCusstomers[i]['lastName'];
                let id = this.getCusstomers[i]['id'];
                this.customerList.push(fullName);
                let getObject = {
                    "name": fullName,
                    "id": id
                };
                this.autoCompleteArray.push(getObject);
            }
            console.log("success:" + this.getCusstomers);
        }, error => {
            this.presentToast("Something went wrong");
        });
    }
    addCustomer() {
        this.recordNotPresent = 0;
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
    ionViewWillLeave() {
        this.recordNotPresent = 0;
    }
    ionViewDidLeave() {
        this.recordNotPresent = 0;
    }
    convert(str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        if (this.customerList.filter(option => option.toLowerCase().includes(filterValue)) == undefined || this.customerList.filter(option => option.toLowerCase().includes(filterValue)) == "" || this.customerList.filter(option => option.toLowerCase().includes(filterValue)) == null) {
            this.recordNotPresent = 1;
        }
        return this.customerList.filter(option => option.toLowerCase().includes(filterValue));
    }
    debitAmount() {
        this.loader.presentLoading();
        for (let j = 0; j < this.autoCompleteArray.length; j++) {
            if (this.userModel['customername'] == this.autoCompleteArray[j]['name']) {
                this.userModel['id'] = this.autoCompleteArray[j]['id'];
            }
        }
        if (this.userModel['id'] == undefined || this.userModel['id'] == "" || this.userModel['id'] == null) {
            this.presentToast("Customer of this name is not present .Please add customer first.");
            return;
        }
        let send_date = {};
        send_date['date'] = this.userModel['date'];
        send_date['amount'] = this.userModel['payment'] * -1;
        if (this.userModel['note'] == "" || this.userModel['note'] == null || this.userModel['note'] == undefined) {
            send_date['message'] = "Debited with  " + this.userModel['payment'];
        }
        else {
            send_date['message'] = this.userModel['note'];
        }
        this.url = environment.base_url + "customers/" + this.userModel['id'] + "/passbook";
        this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
            this.router.navigate(['/home']);
            let msg = MyResponse['message'];
            this.presentToast(msg);
            this.loader.stopLoading();
        }, error => {
            ;
            this.loader.stopLoading();
            this.presentToast("Something went wrong");
            console.log(error.error.message);
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
};
DebitamountPage = tslib_1.__decorate([
    Component({
        selector: 'app-debitamount',
        templateUrl: './debitamount.page.html',
        styleUrls: ['./debitamount.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ToastController,
        ApicallService,
        LoaderserviceService,
        Router])
], DebitamountPage);
export { DebitamountPage };
//# sourceMappingURL=debitamount.page.js.map