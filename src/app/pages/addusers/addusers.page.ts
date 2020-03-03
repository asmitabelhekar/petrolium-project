import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.page.html',
  styleUrls: ['./addusers.page.scss'],
})
export class AddusersPage implements OnInit {

  userModel : any = {};
  checkStatus: any;
  myControl = new FormControl();
  userRoles : any = [
    {
    "role" : "Data Entry",
    "roleId" : '0'
  },{
    "role" : "Manager",
    "roleId" : '1'
  },{
    "role" : "Admin",
    "roleId" : '2'
  }
];

  constructor(public alertController : AlertController,
    public router : Router) { }

  ngOnInit() {
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

  selectUserRoleDetail(userId){
    this.userModel['userRole'] = userId;
  alert(this.userModel['userRole']);
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
            // this.router.navigate(['customerdetil', { customerId: this.customerId }])
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
            // this.router.navigate(['/home'])
          }
        }]
    });

    await alert.present();
  }
}
