import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tanker',
  templateUrl: './tanker.page.html',
  styleUrls: ['./tanker.page.scss'],
})
export class TankerPage implements OnInit {

  

  tankerModel: any = {};
  checkFuelType: any;
  today: any;
  buttonsArray = [
    {
      "fuelType": "Petrol",
      "indexFuel": "0",
      "type": "0"
    },
    {
      "fuelType": "Diesel",
      "indexFuel": "1",
      "type": "1"
    }];


  constructor(public dateAdapter: DateAdapter<Date>,
    public toastcontroller: ToastController) {
    this.dateAdapter.setLocale("en-GB");
  }

  ngOnInit() {
    this.tankerModel['type'] =2;
    this.tankerModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];
  }

  fuelType(fuelType) {
    this.checkFuelType = fuelType;
    if (fuelType == 0) {

      this.tankerModel['type'] = 0;
      this.tankerModel['perliture'] = 70;
    } else {
      this.tankerModel['type'] = 1;
      this.tankerModel['perliture'] = 80;
    }
  }

  tankerBalanceSubmit() {
    if( this.tankerModel['type'] ==2){
      this.presentToast("Please select fuel type.")
    }else{
      this.presentToast("submited.")
    }
  }

  async presentToast(msg) {
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 4000
    });
    toast.present();
  }
}
