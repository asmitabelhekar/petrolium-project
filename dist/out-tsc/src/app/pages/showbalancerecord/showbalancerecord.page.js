import * as tslib_1 from "tslib";
import { Component, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, Events } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { MatDialog } from '@angular/material';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { environment } from 'src/environments/environment';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
let ShowbalancerecordPage = class ShowbalancerecordPage {
    constructor(router, activatedRoute, toastController, callNumber, sms, events, loader, apiCall, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.callNumber = callNumber;
        this.sms = sms;
        this.events = events;
        this.loader = loader;
        this.apiCall = apiCall;
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
        this.totalAmountStatus = "Due";
        this.getNewRecords = [];
    }
    ngOnInit() {
        let getdetail = this.activatedRoute.snapshot.params['detailData'];
        this.detailArray = JSON.parse(getdetail);
        this.customerId = this.detailArray['id'];
        this.customerName = this.detailArray['name'] + " " + this.detailArray['lname'];
        this.customerNumber = this.detailArray['mobile'];
        this.getBalanceRecord();
        this.getHistoryArray = this.balanceRecord.history;
        this.displayList = this.getHistoryArray['list'];
        this.events.subscribe('Event-UpdateBalance', () => {
            this.getBalanceRecord();
        });
    }
    transform(value) {
        return Math.abs(value);
    }
    goBackword() {
        this.router.navigate(['home']);
    }
    clickMenuItem(getStatus) {
        if (getStatus == "1") {
            this.creditDebitAmount(1);
        }
        else if (getStatus == "2") {
            this.creditDebitAmount(2);
        }
        else if (getStatus == "3") {
            this.sentMessage();
        }
        else if (getStatus == "4") {
            this.makeCall();
        }
        else if (getStatus == "5") {
            this.router.navigate(['/purchasehistory']);
        }
        else {
        }
    }
    creditDebitAmount(value) {
        let balanceObject = {
            customerName: this.customerName,
            amountState: value,
            customerId: this.customerId,
            customerMobile: this.customerNumber
        };
        this.router.navigate(['/updatebalance', { balanceObject: JSON.stringify(balanceObject) }]);
    }
    sentMessage() {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT'
            }
        };
        this.sms.send(this.customerNumber, '', options)
            .then(() => {
        }, () => {
        });
    }
    makeCall() {
        this.callNumber.callNumber(this.customerNumber, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 4000
            });
            toast.present();
        });
    }
    customerDetail() {
        this.router.navigate(['customerdetil', { customerId: this.customerId }]);
    }
    getBalanceRecord() {
        this.loader.presentLoading();
        let url = environment.base_url + "customers/" + this.customerId + "/passbook";
        this.apiCall.get(url).subscribe(MyResponse => {
            this.getNewRecords = (MyResponse['result']['history']);
            if (this.getNewRecords.length > 0) {
                this.showRecordsData = 0;
            }
            else {
                this.showRecordsData = 1;
                this.totalAmountStatus = "";
            }
            this.totalAmount = MyResponse['result']['totalAmount'];
            if (this.totalAmount == null) {
                this.totalAmount = 0;
            }
            else {
                if (this.totalAmount > 0) {
                    this.totalAmountStatus = "Due";
                }
                else {
                    this.getPlusValue = this.transform(this.totalAmount);
                    this.totalAmountStatus = "Advance";
                }
                this.totalAmount = MyResponse['result']['totalAmount'];
            }
            this.loader.stopLoading();
        }, error => {
            this.loader.stopLoading();
            this.presentToast("Something went wrong");
        });
    }
};
ShowbalancerecordPage = tslib_1.__decorate([
    Component({
        selector: 'app-showbalancerecord',
        templateUrl: './showbalancerecord.page.html',
        styleUrls: ['./showbalancerecord.page.scss'],
    }),
    Pipe({ name: 'negativeNumber' }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute,
        ToastController,
        CallNumber,
        SMS,
        Events,
        LoaderserviceService,
        ApicallService,
        MatDialog])
], ShowbalancerecordPage);
export { ShowbalancerecordPage };
//# sourceMappingURL=showbalancerecord.page.js.map