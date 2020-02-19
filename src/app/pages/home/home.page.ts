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
  checkRecordStatus: any;
  getData: any;
  getCusstomers : any = [];
  // getCusstomers = [

  //   {
  //     "name": "llllllllll jjjjjjjjjjj",
  //     "mobile": "",
  //     "amount": "2500",
  //     "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
  //     "email": "lllll@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "smitaaa belhekar",
  //     "mobile": "1234567890",
  //     "amount": "1000",
  //     "address": "Ahmednagar",
  //     "email": "smitaaa@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "asmita belhekar",
  //     "mobile": "9527902622",
  //     "amount": "5000",
  //     "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
  //     "email": "asmita@gmail.com",
  //     "note": ""

  //   },
  //   {
  //     "name": "sejal belhekar",
  //     "mobile": "1234567890",
  //     "amount": "2500",
  //     "address": "Pune",
  //     "email": "",
  //     "note": "fgfgf"
  //   },

  //   {
  //     "name": "priya abc",
  //     "mobile": "1234567890",
  //     "amount": "2500",
  //     "address": "Mumbai",
  //     "email": "priya@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "asmi belhekar",
  //     "mobile": "9527902622",
  //     "amount": "1000",
  //     "address": "Ahmednagar",
  //     "email": "asmi@gmail.com",
  //     "note": ""
  //   },
  //   {
  //     "name": "kiran kokate",
  //     "mobile": "9096467346",
  //     "amount": "5000",
  //     "address": "Pune",
  //     "email": "kiran@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "ccccc dddd",
  //     "mobile": "1234567890",
  //     "amount": "2500",
  //     "address": "Pune",
  //     "email": "ccccc@gmail.com",
  //     "note": "fgfgf"
  //   },

  //   {
  //     "name": "dhananjay raut",
  //     "mobile": "1234567890",
  //     "amount": "2500",
  //     "address": "Mumbai",
  //     "email": "dhananjay@gmail.com",
  //     "note": ""
  //   },
  //   {
  //     "name": "cccc ppppp",
  //     "mobile": "1234567890",
  //     "amount": "1000",
  //     "address": "Ahmednagar",
  //     "email": "ccc@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "cccc hhhhhhh ",
  //     "mobile": "1234567890",
  //     "amount": "5000",
  //     "address": "Pune",
  //     "email": "chchch@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "aaaaaaa zzzz",
  //     "mobile": "1234567890",
  //     "amount": "2500",
  //     "address": "",
  //     "email": "azazazaz@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "smitaaa belhekar",
  //     "mobile": "1234567890",
  //     "amount": "1000",
  //     "address": "Ahmednagar",
  //     "email": "smitaaa@gmail.com",
  //     "note": ""
  //   },
  //   {
  //     "name": "aaaaaaaa   zzzz",
  //     "mobile": "1234567890",
  //     "amount": "2500",
  //     "address": "Pune",
  //     "email": "azazazaz@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "smitaaa belhekar",
  //     "mobile": "1234567890",
  //     "amount": "1000",
  //     "address": "Ahmednagar",
  //     "email": "smitaaa@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "asmita belhekar",
  //     "mobile": "9527902622",
  //     "amount": "5000",
  //     "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
  //     "email": "asmita@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "sejal belhekar",
  //     "mobile": "1234567890",
  //     "amount": "2500",
  //     "address": "Pune",
  //     "email": "",
  //     "note": "fgfgf"
  //   },

  //   {
  //     "name": "priya abc",
  //     "mobile": "1234567890",
  //     "amount": "2500",
  //     "address": "Mumbai",
  //     "email": "priya@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "asmi belhekar",
  //     "mobile": "9527902622",
  //     "amount": "1000",
  //     "address": "Ahmednagar",
  //     "email": "asmi@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "kiran kokate",
  //     "mobile": "9096467346",
  //     "amount": "5000",
  //     "address": "Pune",
  //     "email": "kiran@gmail.com",
  //     "note": "fgfgf"
  //   },
  //   {
  //     "name": "ccccc dddd",
  //     "mobile": "1234567890",
  //     "amount": "2500",
  //     "address": "Pune",
  //     "email": "ccccc@gmail.com",
  //     "note": "fgfgf"
  //   }
  // ]
  constructor(
    public menuCntrl: MenuController,
    public router: Router,
    public events : Events,
    public loader : LoaderserviceService,
    public toast : ToastController,
    public apiCall: ApicallService) {
    this.getCustomerList();
    this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));
    this.menuCntrl.enable(true);
  }
  ngOnInit() {
    this.getCustomerList();
    this.events.subscribe('Event-AddCustomer', () => {
      this.getCustomerList();
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
      "id" : data.id,
      "name": data.firstName,
      "lname": data.lastName,
      "mobile" : data.mobile
    }

    this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }])
  }



  getCustomerList() {
    this.loader.presentLoading();
    let url = environment.base_url + "customers";
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getCusstomers = MyResponse['result']['list'];
      console.log("success:" + this.getCusstomers);
      this.loader.stopLoading();
    },
      error => {
        this.loader.stopLoading();
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
}
