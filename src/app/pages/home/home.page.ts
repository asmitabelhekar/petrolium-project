import { Component } from '@angular/core';
import { MenuController, Events, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { environment } from 'src/environments/environment';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  getSearchKey: any;
  // keyvalue = "Arti";
  checkRecordStatus: any;
  getData: any;
  showNoRecordsFound: any;
  serchKey: String;
  autocomplete: any;
  getCusstomers: any = [];
  url = environment.base_url + "customers";

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
      "note": ""
    }
    this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
  }

  getBalanceDetail(data) {


    let detailData =
    {
      "id": data.id,
      "name": data.firstName,
      "lname": data.lastName,
      "mobile": data.mobile
    }

    this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }])
  }



  getCustomerList(url) {
    // this.loader.presentLoading();

    // let url = environment.base_url + "customers";
    // this.url = environment.base_url + "customers?" + "search=" + this.keyvalue ;
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
      this.url = environment.base_url + "customers";
      this.getCustomerList(this.url);
    }
  }

  getItems() {
    console.log("get events:" + this.autocomplete);
  }
}
