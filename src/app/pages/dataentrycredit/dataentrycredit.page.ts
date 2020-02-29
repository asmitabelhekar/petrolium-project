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


  item = [ 1,2,3,4,5,6,7]
 str = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20";
 temp = new Array();
displayString : any = "asmita";
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  serchKey: any;
  today: any;
  userModel: any = {}
  paymentMethod: any;
  paymentType: any
  getPaymentDetail: any;
  paymentNames: any;
  displayBalnace: any = 0;
  checkFuelType: any = 0;
  getCusstomers: any;
  autoCompleteArray: any = [];
  customerList: any = [];
  url: any;
  userName : any;
  userId : any;
  userMobile : any;
  petrolPrice: any;
  dieselPrice: any;
  checkRecordStatus: any;
  recordNotPresent = 0;
  type: any;
  getData: any;
  userObject : any = {};
  checkDriverDiv: any = 1;
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

    food = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

    vehicleNumber = [
      {"vihiclenumber" : "Select vehicle number"},
      {"vihiclenumber" : "MH67GH4567"},
      {"vihiclenumber" : "MH67GH4566"},
      {"vihiclenumber" : "MH67GH4565"},
      {"vihiclenumber" : "MH67GH4564"},
      {"vihiclenumber" : "MH67GH4563"},
      {"vihiclenumber" : "MH67GH4562"},

      
    ];

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public location: Location,
    public toast: ToastController,
    public apiCall: ApicallService,
    public loader: LoaderserviceService,
    public dateAdapter: DateAdapter<Date>,
    public menu: MenuController)
     {
    this.menu.enable(true);
    this.dateAdapter.setLocale("en-GB");
  }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.userId = localStorage.getItem('userId');
    this.userMobile = localStorage.getItem('userMobileNumber');

    this.userObject = {
      "name" : this.userName,
      "id" : this.userId,
      "mobile" : this.userMobile
    }
    const arr = [1,2,3,4,5];
    const newArray = arr.map(i => i*10);
    
    alert("new Array:"+ newArray);
  // console.log("display array:"+this.checkArray);
    this.petrolPrice = localStorage.getItem('petrolPrice');
    this.dieselPrice = localStorage.getItem('dieselPrice');
    this.getPetrolAmount();
    this.getDieselAmount();
    this.userModel['perliture'] = this.userModel['petrolamount'];
    
    this.getCustomerList();
    this.userModel['type'] = 0;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''),
        map(value => this._filter(value))
      );

      if(this.userModel['customerName'] == "" || this.userModel['customerName'] == null || this.userModel['customerName'] == undefined){
        this.checkDriverDiv = 1;
      }else{
        this.checkDriverDiv = 0;

      }

    this.userModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];
    let loginStatus = localStorage.getItem("loginStatus");

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (this.customerList.filter(option => option.toLowerCase().includes(filterValue)) == undefined || this.customerList.filter(option => option.toLowerCase().includes(filterValue)) == "" || this.customerList.filter(option => option.toLowerCase().includes(filterValue)) == null) {
      this.recordNotPresent = 1;
      this.checkDriverDiv = 1;
    }else{

      this.checkDriverDiv = 0;
      for (let i = 0; i < this.getCusstomers.length; i++) {
        let fullName = this.getCusstomers[i]['firstName'] + " " + this.getCusstomers[i]['lastName'];
        if(fullName == this.userModel['customername']){

        }
       
      }
    }
    return this.customerList.filter(option => option.toLowerCase().includes(filterValue));
  }

  addCustomer() {
    this.recordNotPresent = 0;
    this.checkRecordStatus = "add";

    let detailCustomerdata = {
      "fname": "",
      "mobile": "",
      "address": "",
      "email": "",
      "checkstatus": this.checkRecordStatus,
      "note": ""
    }
    this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
  }

  ionViewWillLeave() {
    this.recordNotPresent = 0;
  }

  // getInput(event: any) {
  //   this.serchKey = (event)
  //   if (this.serchKey.length > 3) {
  //     let getUrl = environment.base_url + "customers?" + "search=" + this.serchKey;
  //     this.getCustomerList(getUrl);
  //   } else {
  //     let checkUrl = environment.base_url + "customers?" + "size=" + 1000;
  //     this.getCustomerList(checkUrl);
  //   }
  // }

  ionViewDidLeave() {
    this.recordNotPresent = 0;
  }
  getCustomerList() {

    let url = environment.base_url + "customers?"+ "size=" + 1000;
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

  selectVehicleDetail(name) {
   this.userModel['dname'] = name;
}
  getPosts(value){
    for (let i = 0; i < this.getCusstomers.length; i++) {
      let fullName = this.getCusstomers[i]['firstName'] + " " + this.getCusstomers[i]['lastName'];
     if(fullName == value){
       this.vehicleNumber = this.getCusstomers[i]['vehicles'];
       this.userModel['dname'] = this.vehicleNumber[0]['driverName'];
     }
    }
  }
  goBackword() {
    this.location.back();
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
      this.userModel['perliture'] =this.userModel['petrolamount'];
    } else {
      this.userModel['type'] = 1;
      this.userModel['perliture'] =this.userModel['dieselamount'] ;
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
    if(this.userModel['type'] == 2){
      this.presentToast("Please select fuel type.");
    }
    else{
      for (let j = 0; j < this.autoCompleteArray.length; j++) {
        if (this.userModel['customername'] == this.autoCompleteArray[j]['name']) {
          this.userModel['id'] = this.autoCompleteArray[j]['id'];
        }
      }
      if (this.userModel['id'] == undefined || this.userModel['id'] == "" || this.userModel['id'] == null) {
        this.presentToast("Customer of this name is not present .Please add customer first.")
        return;
      }
      let send_date = {};
  
      send_date['type'] = this.userModel['type'];
      send_date['amountInLitre'] = this.userModel['inlitures'];
      send_date['pricePerLitre'] = this.userModel['perliture']
      send_date['finalAmount'] = this.userModel['totalamount'];
      send_date['amountPaid'] = this.userModel['payment']
      send_date['date'] = this.userModel['date'];
      send_date['driverName'] = this.userModel['dname']
      send_date['vehicleNumber'] = this.userModel['vehiclenumber'];
      send_date['createdBy'] = this.userObject;
      if (this.userModel['note'] == "" || this.userModel['note'] == null || this.userModel['note'] == undefined ) {      
        send_date['message'] = "Credited with  " + this.userModel['payment'];
      }else{
        send_date['message'] = this.userModel['note']
     
      }
  
  
      this.url = environment.base_url + "customers/" + this.userModel['id'] + "/purchase"
  
      this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
  
        let msg = MyResponse['message'];
        this.presentToast(msg);
        let userRole = localStorage.getItem('userRole');
        if (userRole == '0') {
        } else if (userRole == '1') {
          this.router.navigate(['/home']);
        }
        else {
          this.router.navigate(['/home']);
        }
        this.loader.stopLoading();
      }, error => {
        this.loader.stopLoading();
       
        this.presentToast("Something went wrong");
        console.log(error.error.message);
  
      })
    }
    this.loader.stopLoading();
  }


  getDieselAmount() {
    this.loader.presentLoading();
    let geturl = environment.base_url + "price"
    this.apiCall.get(geturl).subscribe(MyResponse => {
      this.getData = MyResponse['result']['list'];
      for(let k=0; k< this.getData.length; k++){
          
          if(this.getData[k]['type'] == 1){
            this.userModel['dieselamount'] = this.getData[k]['price'];
            localStorage.setItem("dieselPrice",this.getData[k]['price']);
          console.log("diesel price:"+this.getData[k]['price']);

            return;
          }
        

      }
     
      this.loader.stopLoading();
    },
      error => {
        alert("display data:" + error);
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
      })
  }
  getPetrolAmount() {
    this.loader.presentLoading();
    let geturl = environment.base_url + "price"
    this.apiCall.get(geturl).subscribe(MyResponse => {
      this.getData = MyResponse['result']['list'];
      for(let k=0; k< this.getData.length; k++){
          if(this.getData[k]['type'] == 0){
            this.userModel['petrolamount'] = this.getData[k]['price'];
            this.userModel['perliture'] = this.getData[k]['price'];
            localStorage.setItem("petrolPrice",this.getData[k]['price']);
          console.log("petrol price:"+this.getData[k]['price']);
            return;
          }
          
      }
     
      this.loader.stopLoading();
    },
      error => {
        alert("display data:" + error);
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
      })
  }

}
