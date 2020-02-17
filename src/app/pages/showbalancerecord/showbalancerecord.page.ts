import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { UpdatebalancePageModule } from '../updatebalance/updatebalance.module';
import { MatDialog } from '@angular/material';
import { UpdatebalancePage } from '../updatebalance/updatebalance.page';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-showbalancerecord',
  templateUrl: './showbalancerecord.page.html',
  styleUrls: ['./showbalancerecord.page.scss'],
})
export class ShowbalancerecordPage implements OnInit {

  balanceRecord = {
    "totalAmount": "2000",
    "history":
      [
        {
          "date": "Today",
          "list": [
            {
              "amount": "2000",
              "comment": "first record",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "second record",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "third record",
              "balance": "1000",
              "type": 1,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "fourth record",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 1,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            }
          ]
        },
        {
          "date": "Yesterday",
          "list": [
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 1,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 1,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 1,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            }
          ]
        },
        {
          "date": "10 Feb 2020",
          "list": [
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 1,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 1,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 1,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            },
            {
              "amount": "2000",
              "comment": "advance",
              "balance": "1000",
              "type": 2,
              "time": "10:30 AM"
            }
          ]
        }
      ]
  }

  customerName: any;
  getHistoryArray: any;
  totalAmount = "3000";
  totalAmountStatus = "Due";
  displayList: any;
  detailArray: any;
  getBalanceRecordData: any;
  customerId : any;
  getNewRecords : any = [] ;

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    public callNumber: CallNumber,
    public sms: SMS,
    public apiCall: ApicallService,
    public dialog: MatDialog) { }

  ngOnInit() {

   
    let getdetail = this.activatedRoute.snapshot.params['detailData'];
    this.detailArray = JSON.parse(getdetail);
    this.customerId = this.detailArray['id']
    this.customerName = this.detailArray['name'] +  " " + this.detailArray['lname'];
    this.getBalanceRecord();
    // alert("dusplay customerName:"+this.customerName);
    // this.customerName = this.activatedRoute.snapshot.params['customerName'];
    this.getHistoryArray = this.balanceRecord.history;
    this.displayList = this.getHistoryArray['list'];
  }

  goBackword() {
    this.router.navigate(['home']);
  }

  clickMenuItem(getStatus) {
    if (getStatus == "1") {
      // this.presentToast("Amount Debited Successfully");
      this.creditDebitAmount(1);
    } else if (getStatus == "2") {
      //  this.presentToast("Amount Debited Successfully");
      this.creditDebitAmount(2);

    } else if (getStatus == "3") {
      this.sentMessage();
    } else if (getStatus == "4") {
      this.makeCall();
    } else {
      this.presentToast("others");

    }
  }

  creditDebitAmount(value) {
    let balanceObject = {
      customerName: this.customerName,
      amountState: value,
      customerId : this.customerId

    }
    this.router.navigate(['/updatebalance', { balanceObject: JSON.stringify(balanceObject) }]);
    // let send_data = {};
    // send_data['text'] = "Are you sure you want to discard the changes?";
    // send_data['button2'] = "No";
    // send_data['button1'] = "Yes";

    // const dialogRef = this.dialog.open(UpdatebalancePage, {
    //   width: '450px',
    //   data: send_data
    // });

    // dialogRef.afterClosed().subscribe(result => {

    //   console.log("result", result);
    // });
  }

  sentMessage() {
    var options = {
      replaceLineBreaks: false,
      android: {
        intent: 'INTENT'
      }
    }
    this.sms.send("9527902622", '', options)
      .then(() => {
      }, () => {
      });
  }

  makeCall() {
    this.callNumber.callNumber("9527902622", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  customerDetail() {

    // let detailData =
    // {
    //   "name": data.name,
    //   "mobile": data.mobile,
    //   "address": data.address,
    //   "lname": data.lname,
    //   "amount": data.amount,
    //   "imagepath": data.imagepath,
    //   "email": data.email,
    //   "note": data.note,
    //   "getIndex": i
    // }


    this.router.navigate(['customerdetil', { customerId: this.customerId }])
  }

  getBalanceRecord() {
    // let url = "http://3.6.135.154:20200/api/v1.0.0/balance?page=0&size=10&filters=%7B%7D";
    let url =  environment.base_url + "customers/" + this.customerId + "/passbook" ;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getNewRecords = JSON.stringify(MyResponse['result']['list']);
      console.log("success:" + this.getNewRecords);
    },
      error => {
        alert("failed:" + error);
      })
  }
}
