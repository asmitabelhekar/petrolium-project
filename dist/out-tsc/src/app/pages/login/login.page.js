import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController, Events } from '@ionic/angular';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
let LoginPage = class LoginPage {
    constructor(router, menuController, preloader, apiCall, events, loader, toastcontroller) {
        this.router = router;
        this.menuController = menuController;
        this.preloader = preloader;
        this.apiCall = apiCall;
        this.events = events;
        this.loader = loader;
        this.toastcontroller = toastcontroller;
        this.loginModel = {};
        this.userModel = {};
        this.hide = true;
    }
    ngOnInit() {
    }
    Login(data) {
        this.loader.presentLoading();
        let send_date = {};
        send_date['mobile'] = this.loginModel['mobile'];
        send_date['password'] = this.loginModel['password'];
        let url = environment.base_url + "users/login";
        this.apiCall.postWAu(url, send_date).subscribe(MyResponse => {
            localStorage.setItem('userRole', MyResponse['result']['userRole']);
            this.userRole = MyResponse['result']['userRole'];
            localStorage.setItem('login', 'yes');
            this.events.publish('Event-SideMenu');
            if (this.userRole == '0') {
                this.router.navigate(['/dataentrycredit']);
            }
            else if (this.userRole == '1') {
                this.router.navigate(['/home']);
            }
            else {
                this.router.navigate(['/home']);
            }
            let msg = MyResponse['message'];
            this.presentToast("Login Successfully");
            this.loader.stopLoading();
        }, error => {
            this.loader.stopLoading();
            this.presentToast("Please try again");
            console.log(error.error.message);
        });
        this.statusCheck = localStorage.getItem('loginStatus');
    }
    ionViewWillEnter() {
        this.menuController.enable(false);
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastcontroller.create({
                message: message,
                duration: 4000
            });
            toast.present();
        });
    }
    valueEnter() {
        this.is_error = 0;
    }
    ngOnDestroy() {
        this.loginModel = {};
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        MenuController,
        LoaderserviceService,
        ApicallService,
        Events,
        LoaderserviceService,
        ToastController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map