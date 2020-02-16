import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DateAdapter } from '@angular/material';
import { empty, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dataentrycredit',
  templateUrl: './dataentrycredit.page.html',
  styleUrls: ['./dataentrycredit.page.scss'],
})
export class DataentrycreditPage implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  today: any;
  userModel: any = {}
  paymentMethod: any;
  paymentType: any
  getPaymentDetail: any;
  paymentNames: any;
  displayBalnace: any = 0;
  checkFuelType: any;

  customerList: string[] = ['asmita', 'smita', 'asmi', 'sejal', 'pranil', 'dddd', 'ffff', 'ggggggg', 'hhhhh', 'jjjjjj'];
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
    public toast: ToastController,
    public dateAdapter: DateAdapter<Date>,
    public menu : MenuController) {
      this.menu.enable(true);
    this.dateAdapter.setLocale("en-GB");
  }

  ngOnInit() {
    this.userModel['perliture'] = 70;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''),
        map(value => this._filter(value))
      );


    this.today = new Date().toJSON().split('T')[0];
    let loginStatus = localStorage.getItem("loginStatus");

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.customerList.filter(option => option.toLowerCase().includes(filterValue));
  }


  OnInput(event: any) {

    this.userModel['totalamount'] = this.userModel['perliture'] * this.userModel['inlitures'];
    this.userModel['balance'] = this.userModel['totalamount'] - this.userModel['payment'];
    if (this.userModel['balance'] == 0 || this.userModel['balance'] == "" || this.userModel['balance'] == undefined || this.userModel['balance'] == empty) {
      this.displayBalnace = 0;
    }
    else {
      this.displayBalnace = 1;
    }

  }

  goBackword() {
    this.location.back();
    // this.router.navigate(['showbalancerecord']);
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  fuelType(fuelType) {
    this.checkFuelType = fuelType;
    if(fuelType == 0){
      this.userModel['perliture'] = 70;
    }else{
      this.userModel['perliture'] = 80;
    }
  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  creditsubmit(){
    this.presentToast("Credited");
  }
}
