import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, Events } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  loading: any;
  userModel: any = {}
  savetext: any;
  recordstatus: any;
  checkStatus: any;
  customerId: any;
  url: any;
  mobieNumber: String;

  constructor(public router: Router,
    public toast: ToastController,
    public loader: LoaderserviceService,
    public apiCall: ApicallService,
    public alertController: AlertController,
    public events: Events,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.recordstatus = this.route.snapshot.params['detailCustomerdata'];
    console.log("detailCustomerdata" + this.recordstatus);
    let displayArrayValues = JSON.parse(this.recordstatus);
    this.userModel['mobile'] = displayArrayValues.mobile;
    this.userModel['address'] = displayArrayValues.address;
    this.userModel['email'] = displayArrayValues.email;
    this.userModel['note'] = displayArrayValues.note;
    this.customerId = displayArrayValues.customerId;

    let fullname = displayArrayValues.fname;
    if (fullname != "") {
      let names = fullname.split(" ");
      this.userModel['fname'] = names[0];
      this.userModel['lname'] = names[(names.length - 1)];
    }

    this.checkStatus = displayArrayValues.checkstatus;

    if (this.checkStatus == "add") {
      this.savetext = "Add Customer";

    }
    else if (this.checkStatus == "update") {
      this.savetext = "Update Customer";
    }
  }


  goBackword() {
    if (this.checkStatus == "add") {
      this.displayAlert();
    } else if (this.checkStatus == "update") {
      this.displayCloseAlert();
    } else {
      this.displayAlert();
    }
  }

  async addCustomerData() {
    this.loader.presentLoading();
    let send_date = {};
    this.mobieNumber = this.userModel['mobile'];

    send_date['firstName'] = this.userModel['fname'];
    send_date['lastName'] = this.userModel['lname'];
    send_date['mobile'] = this.mobieNumber.toString();
    send_date['address'] = this.userModel['address'];
    if (this.userModel['note'] != "") {
      send_date['note'] = this.userModel['note'];
    }
    if (this.userModel['email'] != "") {
      send_date['email'] = this.userModel['email'];
    }
    send_date['isActive'] = 1;

    if (this.checkStatus == "add") {

      this.url = environment.base_url + "customers"

      this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
        console.log("MyResponse ", MyResponse);
        this.events.publish('Event-AddCustomer')
        this.router.navigate(['/home']);

        let msg = MyResponse['message'];
        this.presentToast(msg);
        this.loader.stopLoading();
      }, error => {
        this.presentToast("Something went wrong");
        console.log(error.error.message);

      })
    } else if (this.checkStatus == "update") {
      this.loader.presentLoading();
      this.url = environment.base_url + "customers/" + this.customerId;

      this.apiCall.put(this.url, send_date).subscribe(MyResponse => {
        console.log("MyResponse ", MyResponse);
        this.events.publish('Event-AddCustomer')
        this.router.navigate(['/home']);

        let msg = MyResponse['message'];
        this.presentToast(msg);
        this.loader.stopLoading();
      }, error => {
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
        console.log(error.error.message);

      })
    } else {

    }


  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }



  async displayCloseAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Are you sure want to discard changes',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'OK',
          handler: () => {
            this.router.navigate(['customerdetil', { customerId: this.customerId }])
          }
        }]
    });

    await alert.present();
  }

  async displayAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Are you sure want to discard changes',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/home'])
          }
        }]
    });

    await alert.present();
  }
}
