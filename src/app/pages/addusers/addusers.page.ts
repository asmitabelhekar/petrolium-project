import { Component, OnInit } from '@angular/core';
import { AlertController, Events, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.page.html',
  styleUrls: ['./addusers.page.scss'],
})
export class AddusersPage implements OnInit {

  userModel: any = {};
  checkStatus: any;
  recordStatus: any;
  myControl = new FormControl();
  mobieNumber: String;
  url: any;
  passwordStatus: any;
  userId: any;
  pageTitle: any = "Add User";
  userRoles: any = [
    {
      "role": "Data Entry",
      "roleId": '0'
    }, {
      "role": "Manager",
      "roleId": '1'
    }, {
      "role": "Admin",
      "roleId": '2'
    }
  ];

  constructor(public alertController: AlertController,
    public router: Router,
    public apiCall: ApicallService,
    public events: Events,
    public location: Location,
    public route: ActivatedRoute,
    public toast: ToastController,
    public loader: LoaderserviceService) { }

  ngOnInit() {

    this.recordStatus = (this.route.snapshot.params['detailUserData']);
    console.log("detailUserData" + this.recordStatus);
    let displayArrayValues = JSON.parse(this.recordStatus);
    this.checkStatus = displayArrayValues.checkstatus;
    if (this.checkStatus == "add") {
      this.passwordStatus = 0;
      this.pageTitle = "Add User";
      this.userModel['password'] = displayArrayValues.password;
    } else {
      this.pageTitle = "Update Profile";
      this.passwordStatus = 1;
    }
    this.userModel['mobile'] = displayArrayValues.mobile;
    this.userModel['address'] = displayArrayValues.address;
    this.userModel['email'] = displayArrayValues.email;
    this.userModel['fname'] = displayArrayValues.fname;
    this.userModel['lname'] = displayArrayValues.lname;
    this.userModel['userRole'] = displayArrayValues.userrole;
    this.userModel['userId'] = displayArrayValues.userid;

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

  selectUserRoleDetail(userId) {
    this.userModel['userRole'] = userId;
    // alert(this.userModel['userRole']);
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
            this.location.back();
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
            this.router.navigate(['/userslist'])
          }
        }]
    });

    await alert.present();
  }

  addUserData() {
    this.loader.presentLoading();
    let send_date = {};
    this.mobieNumber = this.userModel['mobile'];
    let fullName = this.userModel['fname'] + " " + this.userModel['lname'];
    send_date['name'] = fullName;
    send_date['email'] = this.userModel['email'];
    send_date['mobile'] = this.mobieNumber.toString();
    send_date['userRole'] = this.userModel['userRole'];
    send_date['isActive'] = 1;

    if (this.checkStatus == "add") {
      send_date['password'] = this.userModel['password'];
      this.url = environment.base_url + "users"

      this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
        console.log("MyResponse ", MyResponse);

        let checkUser = localStorage.getItem('userRole');
        if (checkUser == '0') {
          this.events.publish('Event-UpdateProfile')
          this.router.navigate(['/userprofile']);
        } else if (checkUser == '1') {
          this.events.publish('Event-UpdateProfile')
        this.router.navigate(['/userprofile']);
        }
        else if (checkUser == '2') {
            this.events.publish('Event-AddUser')
        this.router.navigate(['/userslist']);
        } else {
            this.events.publish('Event-AddUser')
        this.router.navigate(['/userslist']);
        }

        let msg = MyResponse['message'];
        this.presentToast(msg);
        this.loader.stopLoading();
      }, error => {
        this.presentToast("Something went wrong");
        console.log(error.error.message);

      })
    } else if (this.checkStatus == "update") {
      this.loader.presentLoading();
      this.url = environment.base_url + "users/" + this.userModel['userId'];

      this.apiCall.put(this.url, send_date).subscribe(MyResponse => {
        console.log("MyResponse ", MyResponse);
        let checkUser = localStorage.getItem('userRole');
        if (checkUser == '0') {
          this.events.publish('Event-UpdateProfile')
          this.router.navigate(['/userprofile']);
        } else if (checkUser == '1') {
          this.events.publish('Event-UpdateProfile')
        this.router.navigate(['/userprofile']);
        }
        else if (checkUser == '2') {
            this.events.publish('Event-AddUser')
        this.router.navigate(['/userslist']);
        } else {
            this.events.publish('Event-AddUser')
        this.router.navigate(['/userslist']);
        }
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
}
