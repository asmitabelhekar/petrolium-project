import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
let SliderimagesPage = class SliderimagesPage {
    constructor(router, menuCntrl) {
        this.router = router;
        this.menuCntrl = menuCntrl;
        this.getImageArray = [
            {
                "image": "../../assets/logoapp.jpg"
            },
            {
                "image": "../../../assets/logoapp.jpg"
            },
            {
                "image": "../assets/logoapp.jpg"
            }
        ];
        this.getCusstomers = [
            {
                "title": "llllllllll jjjjjjjjjjj",
                "summery": "",
                "image": "../../assets/sliseone.jpg"
            },
            {
                "title": "smitaaa belhekar",
                "summery": "1234567890",
                "image": "../../assets/slidetwo.jpg"
            },
            {
                "title": "asmita belhekar",
                "summery": "9527902622",
                "image": "../../assets/slidethree.jpg"
            },
        ];
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
    }
    ngOnInit() {
        this.menuCntrl.enable(false);
    }
    loginPage() {
        this.router.navigate(['/login']);
    }
};
SliderimagesPage = tslib_1.__decorate([
    Component({
        selector: 'app-sliderimages',
        templateUrl: './sliderimages.page.html',
        styleUrls: ['./sliderimages.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        MenuController])
], SliderimagesPage);
export { SliderimagesPage };
//# sourceMappingURL=sliderimages.page.js.map