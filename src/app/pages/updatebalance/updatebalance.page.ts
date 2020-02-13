import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updatebalance',
  templateUrl: './updatebalance.page.html',
  styleUrls: ['./updatebalance.page.scss'],
})
export class UpdatebalancePage implements OnInit {

  showDateNoteDiv: any = 0;
  customerName: any;
  payment: any;
  isValidInput: boolean;
  userModel: any = {}
  paymentMethod: any;
  paymentType: any
  getPaymentDetail: any;
  today: any;

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public location: Location) { }

  ngOnInit() {
    this.today = new Date().toJSON().split('T')[0];
    this.getPaymentDetail = JSON.parse(this.activatedRoute.snapshot.params['balanceObject']);

    this.customerName = this.getPaymentDetail.customerName;
    this.paymentType = this.getPaymentDetail.amountState;
    if (this.paymentType == "1") {
      this.paymentMethod = "Payment";
    } else if (this.paymentType == "2") {
      this.paymentMethod = "Credit"
    } else {

    }

  }
  OnInput(event: any) {
    this.payment = event.target.value;
    if (this.payment.length > 0) {
      this.showDateNoteDiv = 1;
    }
    else {
      this.showDateNoteDiv = 0;
    }
    console.log("payment display:::" + this.payment);
  }

  goBackword() {
    this.location.back();
    // this.router.navigate(['showbalancerecord']);
  }

  getPaymentDetailInfo(detail) {
    let getDate = this.convert(detail.date);
    this.router.navigate(['/showbalancerecord']);
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


}
