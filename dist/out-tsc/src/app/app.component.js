import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, Events, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, router, events, alertCtrl) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.userRole = 0;
        this.initializeApp();
    }
    initializeApp() {
        this.userRole = localStorage.getItem('userRole');
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
                this.presentAlert();
                return;
            }
        });
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
        }
        else if (this.userRole == 1) {
            this.appPages = [
                {
                    title: 'Customer',
                    url: '/home',
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
        else if (this.userRole == 2) {
            this.appPages = [
                {
                    title: 'Customer',
                    url: '/home',
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
        else {
            this.appPages = [
                {
                    title: 'Customer',
                    url: '/home',
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
        }
        else if (page === 'Opening/Closing') {
            this.checkOpeningClosing(this.data);
        }
        else {
        }
    }
    checkOpeningClosing(data) {
        let detailData = {
            "name": data.name,
            "mobile": data.mobile,
            "address": data.address,
            "lname": data.lname,
            "amount": data.amount,
            "imagepath": data.imagepath,
            "email": data.email,
            "note": data.note,
            "navigationFlow": "sidemenu"
        };
        this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }]);
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
            }
            else if (this.userRole == 2) {
                this.router.navigate(['/home']);
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
    presentAlert() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
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
                            navigator['app'].exitApp();
                        }
                    }
                ]
            });
            alert.setAttribute('role', 'alert');
            yield alert.present();
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        Router,
        Events,
        AlertController])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map