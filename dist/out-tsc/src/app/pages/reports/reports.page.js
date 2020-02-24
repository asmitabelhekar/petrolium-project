import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let ReportsPage = class ReportsPage {
    constructor(router) {
        this.router = router;
        this.progress = 0.1;
        this.recordList = [
            {
                "recordName": "Customerwise",
                "progress": "0.5",
                "amount": "60000"
            },
            {
                "recordName": "Tankerwise",
                "progress": "0.1",
                "amount": "10000"
            },
            {
                "recordName": "Usagewise",
                "progress": "0.4",
                "amount": "40000"
            },
            {
                "recordName": "Customerwise",
                "progress": "0.9",
                "amount": "90000"
            }
        ];
    }
    ngOnInit() {
    }
    dislayList() {
        this.router.navigate(['/reportlist']);
    }
};
ReportsPage = tslib_1.__decorate([
    Component({
        selector: 'app-reports',
        templateUrl: './reports.page.html',
        styleUrls: ['./reports.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], ReportsPage);
export { ReportsPage };
//# sourceMappingURL=reports.page.js.map