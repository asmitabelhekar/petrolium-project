import { Component, OnInit } from '@angular/core';
import { MenuController, Events, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { environment } from 'src/environments/environment';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

  userModel: any = {};
  getSearchKey: any;
  // keyvalue = "Arti";
  checkUserStatus: any;
  getData: any;
  showNoRecordsFound: any;
  serchKey: String;
  autocomplete: any;
  getCusstomers: any = [];
  url = environment.base_url + "users?" + "size=" + 1000;

  constructor(public menuCntrl: MenuController,
    public router: Router,
    public events: Events,
    public loader: LoaderserviceService,
    public toast: ToastController,
    public apiCall: ApicallService
  ) {
    this.getUserList(this.url);
    this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));
    this.menuCntrl.enable(true);
  }

  ngOnInit() {
    this.getUserList(this.url);

    this.events.subscribe('Event-AddUser', () => {
      this.getUserList(this.url);
    });

    
  }

  OnInput(event: any) {
    this.serchKey = (event)
    if (this.serchKey.length > 3) {
      this.url = environment.base_url + "users?" + "search=" + this.serchKey;
      this.getUserList(this.url);
    } else {
      this.url = environment.base_url + "users?" + "size=" + 1000;
      this.getUserList(this.url);
    }
  }
  

  getUserList(url) {

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


  addCustomer() {
    this.checkUserStatus = "add";

    let detailUserData = {
      "fname": "",
      "lname": "",
      "mobile": "",
      "email": "",
      "userrole": undefined,
      "checkstatus": this.checkUserStatus,
      "password" : "",
      "userid" : ""
    }
    this.router.navigate(['/addusers', { detailUserData: JSON.stringify(detailUserData) }]);
  }

  getUserDetail(data) {
    this.router.navigate(['/userprofile', { userId : data }]);
    // alert("display data:" + (data));
  }
}


