import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Events, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  checkRecordStatus: any;
  getUserDetail: any;
  userName: any;
  firstName: any;
  userMobile: any;
  userEmail: any;
  userRole: any;
  userPassword: any;
  userModel: any = {};
  userId: any;
  logoutStatus: any;

  constructor(public apiCall: ApicallService,
    public router: Router,
    public alertController: AlertController,
    public events: Events,
    public location: Location,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = (this.activatedRoute.snapshot.params['userId']);
    if (this.userId == undefined || this.userId == "" || this.userId == null) {
      this.userId = localStorage.getItem('userId');
      this.getProfileDetail(this.userId);
      this.logoutStatus = 0;
    } else {
      this.getProfileDetail(this.userId);
      this.logoutStatus = 1;
    }

    this.events.subscribe('Event-UpdateProfile', () => {
      this.getProfileDetail(this.userId);
    });
  }

  getProfileDetail(id) {
    let url = environment.base_url + "users/" + id;
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getUserDetail = (MyResponse['result']);
      this.userName = this.getUserDetail.name;
      this.userMobile = this.getUserDetail.mobile;
      this.userRole = this.getUserDetail.userRole;
      this.userEmail = this.getUserDetail.email;
      this.userPassword = this.getUserDetail.password;
      this.firstName = this.userName.charAt(0);
    },
      error => {
      })
  }

  async displayAlert() {
    const alert = await this.alertController.create({
      message: 'Are you sure want to log out?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'OK',
          handler: () => {
            localStorage.removeItem("userRole");
            localStorage.removeItem('userId');
            localStorage.clear();
            localStorage.setItem('login', 'no');
            this.router.navigate(['/login']);
          }
        }]
    });

    await alert.present();
  }

  logOut() {
    this.displayAlert();

  }

  updateProfile() {
    this.checkRecordStatus = "update";
    let fullname = this.userName;
    if (fullname != "") {
      let names = fullname.split(" ");
      this.userModel['fname'] = names[0];
      this.userModel['lname'] = names[(names.length - 1)];
    }
    let detailUserData = {
      "fname": this.userModel['fname'],
      "lname": this.userModel['lname'],
      "mobile": this.userMobile,
      "email": this.userEmail,
      "userrole": this.userRole,
      "checkstatus": this.checkRecordStatus,
      "password": this.userPassword,
      "userid": this.userId,
      

    }
    this.router.navigate(['/addusers', { detailUserData: JSON.stringify(detailUserData) }]);

    // this.router.navigate(['/addusers']);
  }

  goBackword() {
    let checkUser = localStorage.getItem('userRole');
    if (checkUser == '0') {
      this.router.navigate(['/dataentrycredit']);
    } else if (checkUser == '1') {
      this.location.back();
    }
    else if (checkUser == '2') {
      this.location.back();
    } else {
      this.location.back();
    }
    // this.location.back();
  }
}
