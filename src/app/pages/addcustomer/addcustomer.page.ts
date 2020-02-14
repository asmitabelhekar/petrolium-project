import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  userModel: any = {}
  savetext: any;
  constructor(public router: Router,
    public toast: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
  }


  goBackword() {
    this.displayCloseAlert();
    // this.router.navigate(['home']);
  }

  addCustomerData() {
    alert("display customer data:" + JSON.stringify(this.userModel));
    this.presentToast("Customer added successfully");
    this.router.navigate(['/home']);
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
      },{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/home']);
        }
      }]
    });

    await alert.present();
  }
}
