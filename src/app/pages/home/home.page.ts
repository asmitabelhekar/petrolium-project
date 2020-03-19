import { Component } from '@angular/core';
import { MenuController, Events, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { environment } from 'src/environments/environment';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userModel : any = {};
  getSearchKey: any;
  checkRecordStatus: any;
  getData: any;
  showNoRecordsFound: any;
  serchKey: String;
  autocomplete: any;
  getCusstomers: any = [];
  url = environment.base_url + "customers?" + "size=" + 1000;
  


  constructor(
    public menuCntrl: MenuController,
    public router: Router,
    public events: Events,
    public loader: LoaderserviceService,
    public toast: ToastController,
    public apiCall: ApicallService) {
    this.getCustomerList(this.url);
    this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));
    this.menuCntrl.enable(true);
  }
  ngOnInit() {
    this.getCustomerList(this.url);
    this.getPetrolAmount();
    this.getDieselAmount();
    this.events.subscribe('Event-AddCustomer', () => {
      this.getCustomerList(this.url);
    });
  }

  addCustomer() {
    this.checkRecordStatus = "add";

    let detailCustomerdata = {
      "fname": "",
      "mobile": "",
      "address": "",
      "email": "",
      "checkstatus": this.checkRecordStatus,
      "note": "",
      "vehicles" : []

    }
    this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
  }

  getBalanceDetail(data) {


    let detailData =
    {
      "id": data.id,
      "name": data.firstName,
      "lname": data.lastName,
      "mobile": data.mobile,
      "vehicles" : data.vehicles
    }

    this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }])
  }



  getCustomerList(url) {
   
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getCusstomers = MyResponse['result']['list'];
      if (this.getCusstomers.length > 0) {
        this.showNoRecordsFound = 1;
      } else {
        this.showNoRecordsFound = 0;
      }
      console.log("success:" + this.getCusstomers);
      // this.loader.stopLoading();
    },
      error => {
        // this.loader.stopLoading();
        this.presentToast("Something went wrong");

      })
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  OnInput(event: any) {
    this.serchKey = (event)
    if (this.serchKey.length > 3) {
      this.url = environment.base_url + "customers?" + "search=" + this.serchKey;
      this.getCustomerList(this.url);
    } else {
      this.url = environment.base_url + "customers?" + "size=" + 1000;
      this.getCustomerList(this.url);
    }
  }

  getItems() {
    console.log("get events:" + this.autocomplete);
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
