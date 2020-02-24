import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { ToastController } from '@ionic/angular';
let PurchasehistoryPage = class PurchasehistoryPage {
    constructor(location, loader, apiCall, toasController) {
        this.location = location;
        this.loader = loader;
        this.apiCall = apiCall;
        this.toasController = toasController;
        this.historyModel = {};
    }
    ngOnInit() {
        this.getHistory();
    }
    goBackword() {
        this.location.back();
    }
    getHistory() {
        this.loader.presentLoading();
        let url = "http://www.mocky.io/v2/5e50b9a23100007b00415896";
        this.apiCall.get(url).subscribe(MyResponse => {
            this.getPurchaseHistory = MyResponse['result']['history'];
            this.loader.stopLoading();
        }, error => {
            alert("display data:" + error);
            this.loader.stopLoading();
            this.presentToast("Something went wrong");
        });
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toasController.create({
                message: message,
                duration: 4000
            });
            toast.present();
        });
    }
};
PurchasehistoryPage = tslib_1.__decorate([
    Component({
        selector: 'app-purchasehistory',
        templateUrl: './purchasehistory.page.html',
        styleUrls: ['./purchasehistory.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Location,
        LoaderserviceService,
        ApicallService,
        ToastController])
], PurchasehistoryPage);
export { PurchasehistoryPage };
//# sourceMappingURL=purchasehistory.page.js.map