import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { Router } from '@angular/router';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';

@Component({
  selector: 'app-dataentryopening',
  templateUrl: './dataentryopening.page.html',
  styleUrls: ['./dataentryopening.page.scss'],
})
export class DataentryopeningPage implements OnInit {

  today: any;
  openingModel: any = {}
  openingBalance: any;
  fuelType = [
    { "type": "Petrol" },
    { "type": "Diesel" }
  ]
  constructor(
    public dataAdapter: DateAdapter<Date>,
    public location: Location,
    public loader: LoaderserviceService,
    public toast: ToastController,
    public apiCall: ApicallService,
    public router: Router
  ) {
    this.dataAdapter.setLocale("en-GB");
    this.openingModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];

  }

  ngOnInit() {
    this.openingModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];
  }

  goBackword() {
    this.location.back();
  }
  openingBalanceSubmit() {
    this.loader.presentLoading();
    let send_date = {};

    send_date['date'] = this.openingModel['date'];
    send_date['type'] = this.openingModel['type'];
    send_date['balance'] = this.openingModel['openingbalance']

    if (this.openingModel['openingbalance'] == 0 || this.openingModel['openingbalance'] == "") {

      let url = environment.base_url + "balance";
      this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
        let msg = MyResponse['message'];
        this.presentToast(msg);
        this.router.navigate(['/dataentrycredit']);
        this.loader.stopLoading();
      }, error => {
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
        console.log(error.error.message);

      })
    } else {

      let url = environment.base_url + "balance/" + this.openingModel['id'];
      this.apiCall.put(url, send_date).subscribe(MyResponse => {
        let msg = MyResponse['message'];
        this.presentToast(msg);
        this.router.navigate(['/dataentrycredit']);
        this.loader.stopLoading();
      }, error => {
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
        console.log(error.error.message);

      })
    }


  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  changeClient(value) {
    if (value == "Petrol") {
      this.openingModel['type'] = 0;
      this.getOpeningBalance();
    } else {
      this.openingModel['type'] = 1;
      this.getOpeningBalance();
    }

    console.log("type : " + this.openingModel['type']);
  }


  getOpeningBalance() {
    this.loader.presentLoading();

    let objectt = {};
    objectt['date'] = this.openingModel['date'];
    objectt['type'] = this.openingModel['type'];
    let url = environment.base_url + "balance?" + "filters=" + JSON.stringify(objectt);
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {

      let getData = MyResponse['result']['list'];
      if (getData.length > 0) {
        for (let i = 0; i < getData.length; i++) {
          this.openingModel['id'] = MyResponse['result']['list'][i]['id'];
          this.openingModel['openingbalance'] = MyResponse['result']['list'][i]['balance'];
        }

      } else {
        this.openingModel['id'] = "";
        this.openingModel['openingbalance'] = 0;
      }


      this.loader.stopLoading();
    },
      error => {
        this.loader.stopLoading();
        this.presentToast("Something went wrong");

      })
  }
}
