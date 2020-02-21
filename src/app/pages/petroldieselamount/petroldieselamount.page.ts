import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-petroldieselamount',
  templateUrl: './petroldieselamount.page.html',
  styleUrls: ['./petroldieselamount.page.scss'],
})
export class PetroldieselamountPage implements OnInit {

  userModel: any = {};
  checkStatus: any;
  url = "http://www.mocky.io/v2/5e4fc0663000009000226b53";
// url = "http://www.mocky.io/v2/5e4fc5ef3000005100226b7f";
  constructor(
    public toasController: ToastController,
    public loader: LoaderserviceService,
    public apiCall: ApicallService) { }

  ngOnInit() {
    this.getPetrolDieselAmount();
    if (this.userModel['petrolamount'] != null || this.userModel['petrolamount'] != "" || this.userModel['petrolamount'] != undefined ||
      this.userModel['dieselamount'] != null || this.userModel['dieselamount'] != "" || this.userModel['dieselamount'] != undefined) {
      this.checkStatus = "update";
    }
    else {
      this.checkStatus = "add";
    }
  }

  submit() {
    if (this.checkStatus == "add") {
    } else if (this.checkStatus == "update") {
    } else {

    }
    this.presentToast("Amount submited")
  }

  async presentToast(message) {
    const toast = await this.toasController.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  getPetrolDieselAmount() {
    this.loader.presentLoading();
    this.apiCall.get(this.url).subscribe(MyResponse => {
      let getData = MyResponse[0];
      this.userModel['petrolamount'] = getData['petrolamount'];
      this.userModel['dieselamount'] = getData['dieselamount'];
      this.loader.stopLoading();
    },
      error => {
        alert("display data:" + error);
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
      })
  }

  fuelTypeBalanceSubmit() {
    this.loader.presentLoading();
  
      let send_date = {};

      send_date['petrolamount'] = this.userModel['petrolamount'];
      send_date['dieselamount'] = this.userModel['dieselamount'];
  
      if (this.checkStatus == "add") {
  
        let url = environment.base_url + "balance";
        this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
          let msg = MyResponse['message'];
          this.presentToast(msg);
          this.loader.stopLoading();
        }, error => {
          this.loader.stopLoading();
          this.presentToast("Something went wrong");
          console.log(error.error.message);
  
        })
      } else {
  
        let url = environment.base_url + "balance/" + this.userModel['id'];
        this.apiCall.put(url, send_date).subscribe(MyResponse => {
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
}
