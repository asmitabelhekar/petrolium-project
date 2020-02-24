import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { ToastController } from '@ionic/angular';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { Router } from '@angular/router';
let TankerPage = class TankerPage {
    constructor(dateAdapter, toastcontroller, apiCall, router, loader) {
        this.dateAdapter = dateAdapter;
        this.toastcontroller = toastcontroller;
        this.apiCall = apiCall;
        this.router = router;
        this.loader = loader;
        this.tankerModel = {};
        this.buttonsArray = [
            {
                "fuelType": "Petrol",
                "indexFuel": "0",
                "type": "0"
            },
            {
                "fuelType": "Diesel",
                "indexFuel": "1",
                "type": "1"
            }
        ];
        this.dateAdapter.setLocale("en-GB");
    }
    ngOnInit() {
        this.tankerModel['type'] = 2;
        this.tankerModel['date'] = new Date().toJSON().split('T')[0];
        this.today = new Date().toJSON().split('T')[0];
    }
    fuelType(fuelType) {
        this.checkFuelType = fuelType;
        if (fuelType == 0) {
            this.tankerModel['type'] = 0;
        }
        else {
            this.tankerModel['type'] = 1;
        }
    }
    tankerBalanceSubmit() {
        this.loader.presentLoading();
        if (this.tankerModel['type'] == 2) {
            this.presentToast("Please select fuel type.");
            this.loader.stopLoading();
        }
        else {
            this.loader.presentLoading();
            this.tankerModel['perliture'] = "10.20";
            let send_date = {};
            send_date['type'] = this.tankerModel['type'];
            send_date['amount'] = this.tankerModel['tankerbalance'];
            send_date['date'] = this.tankerModel['date'];
            send_date['perLitrePrice'] = this.tankerModel['perliture'];
            let url = environment.base_url + "tanker";
            this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
                let msg = MyResponse['message'];
                this.presentToast(msg);
                this.router.navigate(['/tanker']);
                // this.tankerModel['type'] = "";
                // this.tankerModel['tankerbalance'] = "";
                this.loader.stopLoading();
            }, error => {
                ;
                this.loader.stopLoading();
                this.presentToast("Something went wrong");
                console.log(error.error.message);
            });
        }
    }
    presentToast(msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastcontroller.create({
                message: msg,
                duration: 4000
            });
            toast.present();
        });
    }
};
TankerPage = tslib_1.__decorate([
    Component({
        selector: 'app-tanker',
        templateUrl: './tanker.page.html',
        styleUrls: ['./tanker.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DateAdapter,
        ToastController,
        ApicallService,
        Router,
        LoaderserviceService])
], TankerPage);
export { TankerPage };
//# sourceMappingURL=tanker.page.js.map