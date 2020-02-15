import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DateAdapter } from '@angular/material';
import { empty, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-updatebalance',
  templateUrl: './updatebalance.page.html',
  styleUrls: ['./updatebalance.page.scss'],
})
export class UpdatebalancePage implements OnInit {
  customerList: string[] = ['asmita', 'smita', 'asmi','sejal','pranil','dddd','ffff','ggggggg','hhhhh','jjjjjj'];

  showDateNoteDiv: any = 1;
  customerName: any;
  payment: any;
  isValidInput: boolean;
  userModel: any = {}
  paymentMethod: any;
  paymentType: any
  getPaymentDetail: any;
  paymentNames: any;
  today: any;
  displayBalnace: any = 0;
  checkFuelType: any;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  buttonsArray = [
    {
      "fuelType": "Petrol",
      "indexFuel": "0",
      "type": "1"
    },
    {
      "fuelType": "Diesel",
      "indexFuel": "1",
      "type": "2"
    }];
  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public location: Location,
    public dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale("en-GB");
  }

  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges
    .pipe(startWith(''),
      map(value => this._filter(value))
    );


    this.today = new Date().toJSON().split('T')[0];
    let loginStatus = localStorage.getItem("loginStatus");

    if(loginStatus == "manager"){
     
      this.getPaymentDetail = JSON.parse(this.activatedRoute.snapshot.params['balanceObject']);
      this.userModel['perliture'] = 70;
      this.customerName = this.getPaymentDetail.customerName;
      this.paymentType = this.getPaymentDetail.amountState;
      if (this.paymentType == "1") {
        this.paymentMethod = "Payment";
        this.paymentNames = "Debit Payment";
      } else if (this.paymentType == "2") {
        this.paymentMethod = "Credit"
        this.paymentNames = "Credit Payment";
      } else {
  
      }
  
    }else{

    }
   
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.customerList.filter(option => option.toLowerCase().includes(filterValue));
  }
  OnInput(event: any) {
    if (this.paymentMethod == "Credit") {
      this.userModel['totalamount'] = this.userModel['perliture'] * this.userModel['inlitures'];
      this.userModel['balance'] = this.userModel['totalamount'] - this.userModel['payment'];
      if (this.userModel['balance'] == 0 || this.userModel['balance'] == "" || this.userModel['balance'] == undefined || this.userModel['balance'] == empty) {
        this.displayBalnace = 0;
      }
      else {
        this.displayBalnace = 1;
      }
    } else {

    }

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

  fuelType(fuelType) {   
      this.checkFuelType = fuelType;
  }

}
