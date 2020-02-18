import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DateAdapter } from '@angular/material';
import { empty, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ToastController, MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';

@Component({
  selector: 'app-dataentrycredit',
  templateUrl: './dataentrycredit.page.html',
  styleUrls: ['./dataentrycredit.page.scss'],
})
export class DataentrycreditPage implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  today: any;
  userModel: any = {}
  paymentMethod: any;
  paymentType: any
  getPaymentDetail: any;
  paymentNames: any;
  displayBalnace: any = 0;
  checkFuelType: any;
  getCusstomers: any;
  autoCompleteArray: any = [];
  customerList: any = [];
  url: any;
  type: any;
  // customerList: string[] = ['asmita', 'smita', 'asmi', 'sejal', 'pranil', 'dddd', 'ffff', 'ggggggg', 'hhhhh', 'jjjjjj'];
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

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public location: Location,
    public toast: ToastController,
    public apiCall: ApicallService,
    public loader: LoaderserviceService,
    public dateAdapter: DateAdapter<Date>,
    public menu: MenuController) {
    this.menu.enable(true);
    this.dateAdapter.setLocale("en-GB");
  }

  ngOnInit() {
    this.getCustomerList();
    this.userModel['type'] = 0;
    this.userModel['perliture'] = 70;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''),
        map(value => this._filter(value))
      );

    this.userModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];
    let loginStatus = localStorage.getItem("loginStatus");

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.customerList.filter(option => option.toLowerCase().includes(filterValue));
  }


  getCustomerList() {

    let url = environment.base_url + "customers";
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getCusstomers = MyResponse['result']['list'];
      for (let i = 0; i < this.getCusstomers.length; i++) {
        let fullName = this.getCusstomers[i]['firstName'] + " " + this.getCusstomers[i]['lastName'];
        let id = this.getCusstomers[i]['id'];
        this.customerList.push(fullName);
        let getObject = {
          "name": fullName,
          "id": id
        }

        this.autoCompleteArray.push(getObject);

      }
      console.log("success:" + this.getCusstomers);
    },
      error => {
        alert("failed:" + error);
      })
  }

  OnInput(event: any) {

    this.userModel['totalamount'] = this.userModel['perliture'] * this.userModel['inlitures'];
    this.userModel['balance'] = this.userModel['totalamount'] - this.userModel['payment'];
    if (this.userModel['balance'] == 0 || this.userModel['balance'] == "" || this.userModel['balance'] == undefined || this.userModel['balance'] == empty) {
      this.displayBalnace = 0;
    }
    else {
      this.displayBalnace = 1;
    }

  }

  goBackword() {
    this.location.back();
    // this.router.navigate(['showbalancerecord']);
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  fuelType(fuelType) {
    this.checkFuelType = fuelType;
    if (fuelType == 0) {

      this.userModel['type'] = 0;
      this.userModel['perliture'] = 70;
    } else {
      this.userModel['type'] = 1;
      this.userModel['perliture'] = 80;
    }
  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  creditsubmit() {
    this.loader.presentLoading();
    for (let j = 0; j < this.autoCompleteArray.length; j++) {
      if (this.userModel['customername'] == this.autoCompleteArray[j]['name']) {
        this.userModel['id'] = this.autoCompleteArray[j]['id'];
      }
    }

    let send_date = {};

    send_date['type'] = this.userModel['type'];
    send_date['amountInLitre'] = this.userModel['inlitures'];
    send_date['pricePerLitre'] = this.userModel['perliture']
    send_date['finalAmount'] = this.userModel['totalamount'];
    send_date['amountPaid'] = this.userModel['payment']


    this.url = environment.base_url + "customers/" + this.userModel['id'] + "/purchase"

    this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
      // this.router.navigate(['/home']);

      let msg = MyResponse['message'];
      this.presentToast(msg);
      this.loader.stopLoading();
    }, error => {
      this.loader.stopLoading();
      this.presentToast("Something went wrong");
      console.log(error.error.message);

    })
  }
}
