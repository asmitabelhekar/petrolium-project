import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DateAdapter } from '@angular/material';
import { empty, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { ToastController, Events } from '@ionic/angular';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';

@Component({
  selector: 'app-updatebalance',
  templateUrl: './updatebalance.page.html',
  styleUrls: ['./updatebalance.page.scss'],
})
export class UpdatebalancePage implements OnInit {
  customerList: string[] = ['asmita', 'smita', 'asmi', 'sejal', 'pranil', 'dddd', 'ffff', 'ggggggg', 'hhhhh', 'jjjjjj'];

  showDateNoteDiv: any = 1;
  customerName: any;
  customerMobile: any;
  payment: any;
  isValidInput: boolean;
  userModel: any = {}
  paymentMethod: any;
  paymentType: any
  getPaymentDetail: any;
  paymentNames: any;
  today: any;
  fname: any;
  lname: any;
  displayBalnace: any = 0;
  checkFuelType: any;
  myControl = new FormControl();
  customerId: any;
  filteredOptions: Observable<string[]>;
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
    public events: Events,
    public loader: LoaderserviceService,
    public apiCall: ApicallService,
    public toastcontroller: ToastController,
    public dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale("en-GB");
  }

  ngOnInit() {
    this.userModel['type'] = 2;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''),
        map(value => this._filter(value))
      );


    this.userModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];
    this.getPaymentDetail = JSON.parse(this.activatedRoute.snapshot.params['balanceObject']);
    this.userModel['perliture'] = 70;
    this.customerMobile = this.getPaymentDetail.customerMobile;
    this.customerName = this.getPaymentDetail.customerName;

    if (this.customerName != "") {
      let names = this.customerName.split(" ");
      this.fname = names[0];
      this.lname = names[(names.length - 1)];
    }
    this.customerId = this.getPaymentDetail.customerId;
    this.paymentType = this.getPaymentDetail.amountState;
    if (this.paymentType == "1") {
      this.paymentMethod = "Payment";
      this.paymentNames = "Debit Payment";
    } else if (this.paymentType == "2") {
      this.paymentMethod = "Credit"
      this.paymentNames = "Credit Payment";
    } else {

    }


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.customerList.filter(option => option.toLowerCase().includes(filterValue));
  }


  OnInput(event: any) {
    if (this.paymentMethod == "Credit") {
      this.userModel['totalamount'] = this.userModel['perliture'] * this.userModel['inlitures'];
      this.userModel['balance'] = this.userModel['totalamount'] - this.userModel['payment'];
      if (this.userModel['balance'] == 0 || this.userModel['balance'] == "" || this.userModel['balance'] == undefined || this.userModel['balance'] == empty) {
        this.displayBalnace = 0;
      }
      else {
        this.displayBalnace = 1;
      }
    } else {

    }

  }

  goBackword() {
    this.location.back();
  }

  getPaymentDetailInfo(detail) {
    let getDate = this.convert(detail.date);
    this.router.navigate(['/showbalancerecord']);
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

  creditAmount() {
    this.loader.presentLoading();
    if(this.userModel['type'] == 2){
      this.presentToast("Please select fuel type.");
    }else{
      let send_date = {};
      send_date['type'] = this.userModel['type'];
      send_date['amountInLitre'] = this.userModel['inlitures'];
      send_date['pricePerLitre'] = this.userModel['perliture']
      send_date['finalAmount'] = this.userModel['totalamount'];
      send_date['amountPaid'] = this.userModel['payment']
      send_date['date'] = this.userModel['date'];
      if (this.userModel['note'] != "") {
        send_date['message'] = this.userModel['note']
      }
  
      let url = environment.base_url + "customers/" + this.customerId + "/purchase"
      this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
        let msg = MyResponse['message'];
        this.presentToast(msg);
        this.events.publish('Event-UpdateBalance');
        let detailData =
        {
          "id": this.customerId,
          "name": this.fname,
          "lname": this.lname,
          "mobile": this.customerMobile
        }
  
        this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }])
        this.loader.stopLoading();
      }, error => {
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
        console.log(error.error.message);
      })
    }
    this.loader.stopLoading();

  }

  debitAmount() {
    this.loader.presentLoading();
    let send_date = {};

    send_date['date'] = this.userModel['date'];
    send_date['amount'] = this.userModel['payment'] * -1;

    send_date['message'] = this.userModel['note']
    let url = environment.base_url + "customers/" + this.customerId + "/passbook"
    this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
      let msg = MyResponse['message'];
      this.presentToast(msg);
      this.events.publish('Event-UpdateBalance');
      let detailData =
      {
        "id": this.customerId,
        "name": this.fname,
        "lname": this.lname,
        "mobile": this.customerMobile
      }

      this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }])
      this.loader.stopLoading();
    }, error => {
      this.loader.stopLoading();

      this.presentToast("Something went wrong");
      console.log(error.error.message);
    })
  }

  async presentToast(message) {
    const toast = await this.toastcontroller.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
}
