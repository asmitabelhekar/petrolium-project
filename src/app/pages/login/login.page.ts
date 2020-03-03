import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController, Events } from '@ionic/angular';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginModel: any = {}
  userModel: any = {};
  statusCheck: any;
  userName: any;
  hide = true;
  message;
  loading;
  is_error;
  userRole: any;

  constructor(public router: Router,
    public menuController: MenuController,
    public preloader: LoaderserviceService,
    public apiCall: ApicallService,
    public events: Events,
    public loader: LoaderserviceService,
    public toastcontroller: ToastController) { }


  ngOnInit() {

  }


  Login(data) {
    this.loader.presentLoading();
    let send_date = {};

    send_date['mobile'] = this.loginModel['mobile'];
    send_date['password'] = this.loginModel['password'];

    let url = environment.base_url + "users/login"
    this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
      localStorage.setItem('userRole', MyResponse['result']['userRole']);
      let checkActive = MyResponse['result']['isActive'];
      if (checkActive == '1') {
        this.userRole = MyResponse['result']['userRole'];
        this.userName = MyResponse['result']['name'];
        localStorage.setItem('login', 'yes');
        this.events.publish('Event-SideMenu')

        localStorage.setItem('userName', MyResponse['result']['name']);
        localStorage.setItem('userId', MyResponse['result']['id']);
        localStorage.setItem('userMobileNumber', MyResponse['result']['mobile']);

        if (this.userRole == '0') {
          this.router.navigate(['/dataentrycredit']);
        }
        else if (this.userRole == '1') {
          this.router.navigate(['/home']);
        } else if (this.userRole == '2') {
          this.router.navigate(['/home']);
        } else if (this.userRole == '3') {
          this.router.navigate(['/tankersellsubmit']);
        }
        else {
          this.router.navigate(['/home']);
        }
        let msg = MyResponse['message'];
        this.presentToast("Login Successfully");
      } else {
        alert("check user inactive");
      }

      this.loader.stopLoading();

    },
      error => {
        if (error.error.message == "Profile is Inactive") {
          this.loader.stopLoading();
          this.presentToast("Profile is Inactive");
          console.log(error.error.message);
        } else {
          this.loader.stopLoading();
          this.presentToast("Please try again");
          console.log(error.error.message);
        }
      })


    this.statusCheck = localStorage.getItem('loginStatus');




  }
  ionViewWillEnter() {
    this.menuController.enable(false);
  }
  async presentToast(message) {
    const toast = await this.toastcontroller.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }


  valueEnter() {
    this.is_error = 0;
  }
  ngOnDestroy() {
    this.loginModel = {};

  }
}
