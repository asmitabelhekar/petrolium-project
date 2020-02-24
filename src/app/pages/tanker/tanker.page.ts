import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { ToastController } from '@ionic/angular';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tanker',
  templateUrl: './tanker.page.html',
  styleUrls: ['./tanker.page.scss'],
})
export class TankerPage implements OnInit {

  

  tankerModel: any = {};
  checkFuelType: any;
  petrolPrice : any;
  dieselPrice: any;
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
    public toastcontroller: ToastController,
    public apiCall : ApicallService,
    public router : Router,
    public loader : LoaderserviceService) {
    this.dateAdapter.setLocale("en-GB");
  }

  ngOnInit() {
    this.tankerModel['type'] =2;
    this.petrolPrice = localStorage.getItem('petrolPrice');
    this.dieselPrice = localStorage.getItem('dieselPrice');
    this.tankerModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];
  }

  fuelType(fuelType) {
    this.checkFuelType = fuelType;
    if (fuelType == 0) {

      this.tankerModel['type'] = 0;
    } else {
      this.tankerModel['type'] = 1;
    }
  }

  tankerBalanceSubmit() {
    this.loader.presentLoading();
    if( this.tankerModel['type'] ==2){
      this.presentToast("Please select fuel type.")
      this.loader.stopLoading();
    }else{
      this.loader.presentLoading();
      this.tankerModel['perliture'] = "10.20";
      let send_date = {};

      send_date['type'] = this.tankerModel['type'];
      send_date['amount'] = this.tankerModel['tankerbalance'];
      send_date['date'] = this.tankerModel['date'];
      if(this.tankerModel['type'] == 0){
        send_date['perLitrePrice'] = this.petrolPrice;
      }else{
        send_date['perLitrePrice'] = this.dieselPrice;
      }
  
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
        this.loader.stopLoading()
        this.presentToast("Something went wrong");
        console.log(error.error.message);
  
      })

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
