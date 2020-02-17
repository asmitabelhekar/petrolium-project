import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  userModel: any = {}
  savetext: any;
  recordstatus: any;
  checkStatus: any;
  customerId: any;
  url: any;

  constructor(public router: Router,
    public toast: ToastController,
    public apiCall: ApicallService,
    public alertController: AlertController,
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
    this.displayCloseAlert();
    // this.router.navigate(['home']);
  }

  addCustomerData() {
    let send_date = {};

    send_date['firstName'] = this.userModel['fname'];
    send_date['lastName'] = this.userModel['lname'];
    send_date['mobile'] = this.userModel['mobile']
    send_date['address'] = this.userModel['address'];
    send_date['note'] = this.userModel['note'];
    send_date['email'] = this.userModel['email'];
    send_date['isActive'] = 1;

    if (this.checkStatus == "add") {
      this.url = environment.base_url + "customers"

      this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
        console.log("MyResponse ", MyResponse);
        this.router.navigate(['/home']);

        let msg = MyResponse['message'];
        this.presentToast(msg);

      }, error => {
        console.log(error.error.message);

      })
    } else if (this.checkStatus == "update") {
      this.url = environment.base_url + "customers/" + this.customerId;

      this.apiCall.put(this.url, send_date).subscribe(MyResponse => {
        console.log("MyResponse ", MyResponse);
        this.router.navigate(['/home']);

        let msg = MyResponse['message'];
        this.presentToast(msg);

      }, error => {
        console.log(error.error.message);

      })
    } else {

    }


    // this.router.navigate(['/home']);
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
            this.router.navigate(['/home']);
          }
        }]
    });

    await alert.present();
  }
}
