import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  userModel: any = {}
  savetext: any;
  recordstatus : any;
  checkStatus : any;

  constructor(public router: Router,
    public toast: ToastController,
    public alertController: AlertController,
    public route : ActivatedRoute) { }

  ngOnInit() {
    this.recordstatus = this.route.snapshot.params['detailCustomerdata'];
    console.log("detailCustomerdata" + this.recordstatus);
    let displayArrayValues = JSON.parse(this.recordstatus);
    this.userModel['mobile'] = displayArrayValues.mobile;
    this.userModel['address'] = displayArrayValues.address;
    this.userModel['email'] = displayArrayValues.email;
    this.userModel['note'] = displayArrayValues.note;

    let fullname = displayArrayValues.fname;
    if(fullname != ""){
      let names = fullname.split(" ");
      this.userModel['fname'] = names[0];
      this.userModel['lname'] = names[(names.length -1)];  
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
