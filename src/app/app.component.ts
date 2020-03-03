import { Component } from '@angular/core';

import { Platform, Events, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApicallService } from './service/apicall/apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  appPages: any;
  // loginStatus = "dataentry";
  data: any;
  userRole: any = 0;
  userId: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public events: Events,
    public apiCall: ApicallService,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.userRole = localStorage.getItem('userRole');
    this.userId = localStorage.getItem('userId');
    this.checkUserStatus(this.userId);
  }


  checkUserStatus(id) {
    let url = environment.base_url + "users/" + id;
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.login();
      this.loginSession();
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });

      this.events.subscribe('Event-SideMenu', () => {
        this.userRole = localStorage.getItem('userRole');
        this.login();
        this.loginSession();
      });

      this.platform.backButton.subscribe(() => {
        if (this.router.url === '/home' || this.router.url === '/dataentrycredit') {
          this.presentAlert()
          return
        }
      });

    },
      error => {
        alert("profile is inActive.");
      })
  }


  login() {
    this.userRole = localStorage.getItem('userRole');
    if (this.userRole == 0) {
      this.appPages = [
        {
          title: 'Credit',
          url: '/dataentrycredit',

        },
        {
          title: 'Opening',
          url: '/dataentryopening',

        },
        {
          title: 'Log Out',
          url: '/login',

        }
      ];
    } else if (this.userRole == 1) {
      this.appPages = [
        {
          title: 'Customer',
          url: '/home',
        } ,
        {
          title: 'Profile',
          url: '/userprofile',
        },
        {
          title: 'Credit',
          url: '/dataentrycredit',
        },
        {
          title: 'Debit',
          url: '/debitamount',

        },
        {
          title: 'Opening',
          url: '/dataentryopening',

        },
        {
          title: 'Petrol/Diesel',
          url: '/petroldieselamount',

        },
        {
          title: 'Tanker List',
          url: '/showtankerlist',

        },
        {
          title: 'Tanker',
          url: '/tanker',

        },
        {
          title: 'Log Out',
          url: '',

        }
      ];
    } else if (this.userRole == 2) {
      this.appPages = [
        {
          title: 'Customer',
          url: '/home',

        },
        {
          title: 'Users',
          url: '/addusers',

        }
        ,
        {
          title: 'Profile',
          url: '/userprofile',

        },
        {
          title: 'Credit',
          url: '/dataentrycredit',

        },
        {
          title: 'Debit',
          url: '/debitamount',

        },
        {
          title: 'Opening',
          url: '/dataentryopening',

        },
        {
          title: 'Reports',
          url: '/reports',

        },
        {
          title: 'Petrol/Diesel',
          url: '/petroldieselamount',

        },
        {
          title: 'Tanker',
          url: '/tanker',

        },
        {
          title: 'Log Out',
          url: '',

        }
      ];
    } else if (this.userRole == 3) {
      this.appPages = [
        {
          title: 'Tanker Sell',
          url: '/tankersellsubmit',

        } ,
        {
          title: 'Profile',
          url: '/userprofile',

        },
        {
          title: 'Credit',
          url: '/dataentrycredit',

        },
        {
          title: 'Opening',
          url: '/dataentryopening',

        },
        {
          title: 'Log Out',
          url: '/login',

        }
      ];
    } else {
      this.appPages = [
        {
          title: 'Customer',
          url: '/home',

        } ,
        {
          title: 'Profile',
          url: '/userprofile',

        },
        {
          title: 'Credit',
          url: '/dataentrycredit',

        },
        {
          title: 'Debit',
          url: '/debitamount',

        },
        {
          title: 'Opening',
          url: '/dataentryopening',

        },
        {
          title: 'Reports',
          url: '/reports',

        },
        {
          title: 'Petrol/Diesel',
          url: '/petroldieselamount',

        },
        {
          title: 'Tanker',
          url: '/tanker',

        },
        {
          title: 'Log Out',
          url: '',

        }
      ];
    }
  }


  sideMenuClicked(page) {
    if (page === 'Log Out') {
      localStorage.removeItem("userRole");
      localStorage.clear();
      localStorage.setItem('login', 'no');
      this.router.navigate(['/login']);
    } else if (page === 'Opening/Closing') {
      this.checkOpeningClosing(this.data);
    } else {

    }
  }

  checkOpeningClosing(data) {

    let detailData =
    {
      "name": data.name,
      "mobile": data.mobile,
      "address": data.address,
      "lname": data.lname,
      "amount": data.amount,
      "imagepath": data.imagepath,
      "email": data.email,
      "note": data.note,
      "navigationFlow": "sidemenu"

    }

    this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }])
  }


  loginSession() {
    this.userRole = localStorage.getItem('userRole');
    this.login();
    let loginSession = localStorage.getItem('login');
    if (loginSession == 'yes') {
      this.userRole = localStorage.getItem('userRole');
      if (this.userRole == 0) {

        this.router.navigate(['/dataentrycredit']);
        return;
      }
      else if (this.userRole == 1) {
        this.router.navigate(['/home']);
        return;
      } else if (this.userRole == 2) {
        this.router.navigate(['/home']);
        return;
      } else if (this.userRole == 3) {
        this.router.navigate(['/tankersellsubmit']);
        return;
      }
      else {
        this.router.navigate(['/home']);
        return;
      }
    }
    else {
      this.router.navigate(['/login']);
    }
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: '',
      message: 'Do you want to exit?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            // this.platform.;
            navigator['app'].exitApp()
          }
        }
      ]
    });
    alert.setAttribute('role', 'alert');
    await alert.present();
  }
}
