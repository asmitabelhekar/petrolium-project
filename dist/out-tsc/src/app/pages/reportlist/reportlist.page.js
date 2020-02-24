import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let ReportlistPage = class ReportlistPage {
    constructor(router) {
        this.router = router;
        this.recordList = [
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            },
            {
                "name": "asmita belhekar",
                "amount": "20000"
            }
        ];
    }
    ngOnInit() {
    }
    goBackword() {
        this.router.navigate(['/reports']);
    }
};
ReportlistPage = tslib_1.__decorate([
    Component({
        selector: 'app-reportlist',
        templateUrl: './reportlist.page.html',
        styleUrls: ['./reportlist.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], ReportlistPage);
export { ReportlistPage };
//# sourceMappingURL=reportlist.page.js.map