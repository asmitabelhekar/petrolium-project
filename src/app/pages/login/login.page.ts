import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
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

  hide = true;
  message;
  loading;
  is_error;
  userRole: any;

  constructor(public router: Router,
    public menuController: MenuController,
    public preloader: LoaderserviceService,
    public apiCall: ApicallService,
    public toastcontroller: ToastController) { }


  ngOnInit() {

  }


  Login(data) {

    let send_date = {};

    send_date['mobile'] = this.loginModel['mobile'];
    send_date['password'] = this.loginModel['password'];

    let url = environment.base_url + "users/login"
    this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
      localStorage.setItem('userRole', MyResponse['result']['userRole']);
      localStorage.setItem('login', 'yes');
      if (this.userRole == 0) {
        this.router.navigate(['/dataentrycredit']);
      }
      else if (this.userRole == 1) {
        this.router.navigate(['/home']);
      }
      else {
        this.router.navigate(['/home']);
      }
      let msg = MyResponse['message'];
      this.presentToast(msg);
    }, error => {
      console.log(error.error.message);
    })

    // if (data.mobile == "1234567890" && data.password == "abc") {
    //   this.router.navigate(['/dataentrycredit']);
    //   localStorage.setItem('login','yes');
    //   localStorage.setItem('loginStatus', 'dataentry');
    // } else if (data.mobile == "1234567891" && data.password == "abc"){
    //   localStorage.setItem('loginStatus', 'manager');
    //   localStorage.setItem('login','yes');
    //   this.router.navigate(['/home']);
    // }else{
    //   localStorage.setItem('login','no');
    //   this.presentToast("Please try again.");
    // }

    this.statusCheck = localStorage.getItem('loginStatus');



    // this.preloader.showBlockingLoaderAuth();

    // let operationsUrl = environment.base_url + environment.version + "users/login";
    // this.apicall.postWAu(operationsUrl, data).subscribe(MyResponse => {
    //   console.log(MyResponse);
    //   MyResponse['result']['password'] = data['password'];
    //   this.preloader.hideBlockingLoaderAuth();
    //   this.router.navigate(['home']);

    // }, error => {
    //   this.presentToast("Please try again");
    //   console.log(error)
    // })



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
