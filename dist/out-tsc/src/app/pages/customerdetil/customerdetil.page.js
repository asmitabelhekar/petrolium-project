import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ToastController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { Location } from '@angular/common';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
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
        let url = environment.base_url + "customers/" + this.customerId;
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
            "customerId": this.customerId
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 4000
            });
            toast.present();
        });
    }
};
CustomerdetilPage = tslib_1.__decorate([
    Component({
        selector: 'app-customerdetil',
        templateUrl: './customerdetil.page.html',
        styleUrls: ['./customerdetil.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router,
        Location,
        CallNumber,
        ToastController,
        LoaderserviceService,
        ApicallService,
        SMS])
], CustomerdetilPage);
export { CustomerdetilPage };
//# sourceMappingURL=customerdetil.page.js.map