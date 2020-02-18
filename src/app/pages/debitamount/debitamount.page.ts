import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DateAdapter } from '@angular/material';
import { empty, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';

@Component({
  selector: 'app-debitamount',
  templateUrl: './debitamount.page.html',
  styleUrls: ['./debitamount.page.scss'],
})
export class DebitamountPage implements OnInit {

  customerList: any = [];
  // customerList: string[] = ['asmita', 'smita', 'asmi', 'sejal', 'pranil', 'dddd', 'ffff', 'ggggggg', 'hhhhh', 'jjjjjj'];
  today: any;
  userModel: any = {}
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  url: any;
  customerId: any;
  getCusstomers: any;
  autoCompleteArray: any = [];

  constructor(public toast: ToastController,
    public apiCall: ApicallService,
    public router: Router) { }

  ngOnInit() {
    this.getCustomerList();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''),
        map(value => this._filter(value))
      );

    this.userModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];
    let loginStatus = localStorage.getItem("loginStatus");

  }

  getCustomerList() {
    let url = environment.base_url + "customers";
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getCusstomers = MyResponse['result']['list'];
      for (let i = 0; i < this.getCusstomers.length; i++) {
        let fullName = this.getCusstomers[i]['firstName'] + " " + this.getCusstomers[i]['lastName'];
        let id = this.getCusstomers[i]['id'];
        this.customerList.push(fullName);
        let getObject = {
          "name": fullName,
          "id": id
        }

        this.autoCompleteArray.push(getObject);

      }
      console.log("success:" + this.getCusstomers);
    },
      error => {
        this.presentToast("Something went wrong");
       
      })
  }
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.customerList.filter(option => option.toLowerCase().includes(filterValue));
  }


  debitAmount() {
    for (let j = 0; j < this.autoCompleteArray.length; j++) {
      if (this.userModel['customername'] == this.autoCompleteArray[j]['name']) {
        this.userModel['id'] = this.autoCompleteArray[j]['id'];
      }
    }
    let send_date = {};

    send_date['date'] = this.userModel['date'];
    send_date['amount'] = this.userModel['payment'];
    send_date['message'] = this.userModel['note']


    this.url = environment.base_url + "customers/" + this.userModel['id'] + "/passbook"

    this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
      this.router.navigate(['/home']);

      let msg = MyResponse['message'];
      this.presentToast(msg);

    }, error => {
      this.presentToast("Something went wrong");
      console.log(error.error.message);

    })
  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
}
