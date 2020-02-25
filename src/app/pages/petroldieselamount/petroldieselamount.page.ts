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
  checkStatusDiesel : any;
  getData: any;
  url = "http://www.mocky.io/v2/5e4fc0663000009000226b53";
// url = "http://www.mocky.io/v2/5e4fc5ef3000005100226b7f";
  constructor(
    public toasController: ToastController,
    public loader: LoaderserviceService,
    public apiCall: ApicallService) { }

  ngOnInit() {
    // this.getPetrolDieselAmount();
    this.getPetrolAmount();
    this.getDieselAmount();
    if (this.userModel['petrolamount'] == null || this.userModel['petrolamount'] == "" || this.userModel['petrolamount'] == undefined) {
      this.checkStatus = "add";
    }
    else {
      this.checkStatus = "update";
    }

    if(this.userModel['dieselamount'] == null || this.userModel['dieselamount'] == "" || this.userModel['dieselamount'] == undefined){
      this.checkStatusDiesel = "add";
    }
    else{
      this.checkStatusDiesel = "update";
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

  getDieselAmount() {
    this.loader.presentLoading();
    let geturl = environment.base_url + "price"
    this.apiCall.get(geturl).subscribe(MyResponse => {
      this.getData = MyResponse['result']['list'];
      for(let k=0; k< this.getData.length; k++){
          
          if(this.getData[k]['type'] == 1){
            this.userModel['type'] = 1;
            this.userModel['dieselamount'] = this.getData[k]['price'];
            if(this.getData[k]['price'] == null || this.getData[k]['price'] == "" || this.getData[k]['price'] == undefined){
              this.checkStatusDiesel = "add";
            }
            else{
              this.checkStatusDiesel = "update";
            }
            this.userModel['dId']=this.getData[k]['id'];
            return;
          }
          localStorage.setItem("dieselPrice",this.userModel['dieselamount']);
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
            this.userModel['type'] = 0;
            this.userModel['petrolamount'] = this.getData[k]['price'];
            if ( this.getData[k]['price'] == null ||  this.getData[k]['price'] == "" ||  this.getData[k]['price'] == undefined) {
              this.checkStatus = "add";
            }
            else {
              this.checkStatus = "update";
            }
            this.userModel['pId']=this.getData[k]['id'];
            return;
          }
          localStorage.setItem("petrolPrice",this.userModel['petrolamount']);
      }
     
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
  
    this.submitPetrolAmount();
    this.submitDieselAmount();
  }

  submitPetrolAmount(){
    let send_date = {};

    send_date['type'] = 0;
    send_date['price'] = this.userModel['petrolamount'];

    if (this.checkStatus == "add") {

      let url = environment.base_url + "price";
      this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
        let msg = MyResponse['message'];
        localStorage.setItem("petrolPrice",this.userModel['petrolamount']);
        this.presentToast(msg);
        this.loader.stopLoading();
      }, error => {
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
        console.log(error.error.message);

      })
    } else {

      let url = environment.base_url + "price/" + this.userModel['pId'];
      this.apiCall.put(url, send_date).subscribe(MyResponse => {
        let msg = MyResponse['message'];
        this.presentToast(msg);
        localStorage.setItem("petrolPrice",this.userModel['petrolamount']);
        this.loader.stopLoading();
      }, error => {
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
        console.log(error.error.message);

      })
    }
  }

  submitDieselAmount(){
    let send_date = {};

    send_date['type'] = 1;
    send_date['price'] = this.userModel['dieselamount'];

    if (this.checkStatusDiesel == "add") {

      let url = environment.base_url + "price";
      this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
        let msg = MyResponse['message'];
        localStorage.setItem("dieselPrice",this.userModel['dieselamount']);
        this.presentToast(msg);
        this.loader.stopLoading();
      }, error => {
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
        console.log(error.error.message);

      })
    } else {

      let url = environment.base_url + "price/" + this.userModel['dId'];
      this.apiCall.put(url, send_date).subscribe(MyResponse => {
        let msg = MyResponse['message'];
        localStorage.setItem("dieselPrice",this.userModel['dieselamount']);
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
