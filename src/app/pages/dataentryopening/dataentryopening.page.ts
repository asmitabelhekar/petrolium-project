import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';

@Component({
  selector: 'app-dataentryopening',
  templateUrl: './dataentryopening.page.html',
  styleUrls: ['./dataentryopening.page.scss'],
})
export class DataentryopeningPage implements OnInit {

  today: any;
  openingModel: any = {}
  fuelType = [
    { "type": "Petrol" },
    { "type": "Diesel" }
  ]
  constructor(
    public dataAdapter: DateAdapter<Date>,
    public location: Location,
    public toast: ToastController,
    public apiCall: ApicallService
  ) {
    this.dataAdapter.setLocale("en-GB");
  }

  ngOnInit() {
    this.openingModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];
  }

  goBackword() {
    this.location.back();
  }
  openingBalanceSubmit() {

    let send_date = {};

    send_date['date'] = this.openingModel['date'];
    send_date['type'] = this.openingModel['type'];
    send_date['balance'] = this.openingModel['openingbalance']


    let url = environment.base_url + "balance";

    this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {

      let msg = MyResponse['message'];
      this.presentToast(msg);

    }, error => {
      console.log(error.error.message);

    })

  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  changeClient(value){
    if(value == "Petrol"){
      this.openingModel['type'] = 0;
    }else{
      this.openingModel['type'] = 1;
    }
  
  console.log("type : " + this.openingModel['type'] );
  }

}
