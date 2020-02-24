import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { environment } from 'src/environments/environment';
let PetroldieselamountPage = class PetroldieselamountPage {
    // url = "http://www.mocky.io/v2/5e4fc5ef3000005100226b7f";
    constructor(toasController, loader, apiCall) {
        this.toasController = toasController;
        this.loader = loader;
        this.apiCall = apiCall;
        this.userModel = {};
        this.url = "http://www.mocky.io/v2/5e4fc0663000009000226b53";
    }
    ngOnInit() {
        this.getPetrolDieselAmount();
        if (this.userModel['petrolamount'] != null || this.userModel['petrolamount'] != "" || this.userModel['petrolamount'] != undefined ||
            this.userModel['dieselamount'] != null || this.userModel['dieselamount'] != "" || this.userModel['dieselamount'] != undefined) {
            this.checkStatus = "update";
        }
        else {
            this.checkStatus = "add";
        }
    }
    submit() {
        if (this.checkStatus == "add") {
        }
        else if (this.checkStatus == "update") {
        }
        else {
        }
        this.presentToast("Amount submited");
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
    getPetrolDieselAmount() {
        this.loader.presentLoading();
        let geturl = environment.base_url + "price";
        this.apiCall.get(geturl).subscribe(MyResponse => {
            this.getData = MyResponse['result']['list'];
            for (let k = 0; k < this.getData.length; k++) {
                if (this.getData[k]['type'] == 0) {
                    this.userModel['petrolamount'] = this.getData[k]['price'];
                }
                else if (this.getData[k]['type'] == 1) {
                    this.userModel['dieselamount'] = this.getData[k]['price'];
                }
                else {
                }
            }
            this.loader.stopLoading();
        }, error => {
            alert("display data:" + error);
            this.loader.stopLoading();
            this.presentToast("Something went wrong");
        });
    }
    fuelTypeBalanceSubmit() {
        this.loader.presentLoading();
        let send_date = {};
        send_date['petrolamount'] = this.userModel['petrolamount'];
        send_date['dieselamount'] = this.userModel['dieselamount'];
        if (this.checkStatus == "add") {
            let url = environment.base_url + "balance";
            this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
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
            let url = environment.base_url + "balance/" + this.userModel['id'];
            this.apiCall.put(url, send_date).subscribe(MyResponse => {
                let msg = MyResponse['message'];
                this.presentToast(msg);
                this.loader.stopLoading();
            }, error => {
                this.loader.stopLoading();
                this.presentToast("Something went wrong");
                console.log(error.error.message);
            });
        }
    }
};
PetroldieselamountPage = tslib_1.__decorate([
    Component({
        selector: 'app-petroldieselamount',
        templateUrl: './petroldieselamount.page.html',
        styleUrls: ['./petroldieselamount.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ToastController,
        LoaderserviceService,
        ApicallService])
], PetroldieselamountPage);
export { PetroldieselamountPage };
//# sourceMappingURL=petroldieselamount.page.js.map