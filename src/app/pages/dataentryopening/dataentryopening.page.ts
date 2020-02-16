import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

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
    public toast : ToastController
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
  openingBalanceSubmit(){
    this.presentToast("Opening balance submited.");
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

}
