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
  userModel : any = {};

  constructor(public router: Router,
    public menuController: MenuController,
    public preloader: LoaderserviceService,
    public apicall: ApicallService,
    public toastcontroller: ToastController) { }
  

  ngOnInit() {
  }


  login(data) {
    this.router.navigate(['home']);


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

}
