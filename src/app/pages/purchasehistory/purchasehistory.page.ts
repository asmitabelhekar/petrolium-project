import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.page.html',
  styleUrls: ['./purchasehistory.page.scss'],
})
export class PurchasehistoryPage implements OnInit {

  getPurchaseHistory: any;
  historyModel : any ={};
  customerId : any;

  constructor(public location: Location,
    public loader: LoaderserviceService,
    public apiCall: ApicallService,
    public activatedRoute : ActivatedRoute,
    public toasController : ToastController
  ) { }

  ngOnInit() {
    this.customerId = this.activatedRoute.snapshot.params['customerId'];
    this.getHistory();
  }

  goBackword() {
    this.location.back();
  }

  getHistory() {
    this.loader.presentLoading();
    let url = environment.base_url + "customers/" + this.customerId +"/purchase";
    // let url = "http://www.mocky.io/v2/5e50b9a23100007b00415896";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getPurchaseHistory = MyResponse['result']['history'];
      this.loader.stopLoading();
    },
      error => {
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
      })
  }

  async presentToast(message) {
    const toast = await this.toasController.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
}
