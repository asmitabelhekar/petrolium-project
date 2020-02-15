import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  appPages : any;
  loginStatus : any;
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.loginStatus = localStorage.getItem("loginStatus");
    this.login();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      
     
    });
  }

  login(){
    this.loginStatus = localStorage.getItem("loginStatus");
    if(this.loginStatus == "dataentry")
    {
      this.appPages = [
        {
          title: 'Credit',
          url: '/updatebalance',
          icon: 'document'
        },
        {
          title: 'Opening',
          url: '/dataentryopening',
          icon: 'person'
        },
        {
          title: 'Log Out',
          url: '/login',
          icon: 'log-out'
        }
      ];
    }else if(this.loginStatus == "manager") {
      this.appPages = [
        {
          title: 'Customer Records',
          url: '/home',
          icon: 'document'
        },
        {
          title: 'Debit/Credit',
          url: '/addcustomer',
          icon: 'person'
        },
        {
          title: 'Opening/Closing',
          url: '/showbalancerecord',
          icon: 'person'
        },
        {
          title: 'Log Out',
          url: '',
          icon: 'log-out'
        }
      ];
    }else{
      this.appPages = [
       
        {
          title: 'Log Out',
          url: '',
          icon: 'log-out'
        }
      ];
    }
  }

  sideMenuClicked(page) {
    if (page === 'Log Out') {
      localStorage.removeItem("loginStatus");
      localStorage.clear();
      this.router.navigate(['/login']);
    } else {
      }
    }
  
}
