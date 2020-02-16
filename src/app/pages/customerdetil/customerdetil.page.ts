import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ToastController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-customerdetil',
  templateUrl: './customerdetil.page.html',
  styleUrls: ['./customerdetil.page.scss'],
})
export class CustomerdetilPage implements OnInit {

  customerName: any;
  customerImage = "";
  customerMobile: any;
  customerAddress: any;
  customerEmail: any;
  checkRecordStatus: any;
  customerNote : any;
  customerIndex : any;
  customerDetailInfo : any;

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    private callNumber: CallNumber,
    public toast: ToastController,
    private sms: SMS) { }

 
    ngOnInit() {
     
      let parseArray = JSON.parse(this.activatedRoute.snapshot.params['detailData']);
      // alert("data:"+parseArray);
      if(parseArray.name != ""){
        this.customerName = parseArray.name;
      }
      else{
        this.customerName = "NA";
      }
     
      if(parseArray.mobile != ""){
        this.customerMobile = parseArray.mobile;
      }else{
        this.customerMobile = "NA";
      }
     
      if(parseArray.address != ""){
        this.customerAddress = parseArray.address;
      }else{
        this.customerAddress = "NA";
      }
  
      if(parseArray.email != ""){
        this.customerEmail = parseArray.email;
      }
      else{
        this.customerEmail = "NA";
      }
  
      if(parseArray.note != ""){
        this.customerNote = parseArray.note;
      }
      else{
        this.customerNote = "NA";
      }
     
      this.customerIndex = parseArray.getIndex;
      // this.customerImage = parseArray.imagepath;
      
      // console.log("display detail data:" + JSON.parse(getdetail));
    }
  
  
  
    goBackword() {
      this.router.navigate(['/home']);
    }
  
    editDetails() {
      this.checkRecordStatus = "update";
  
      let detailCustomerdata = {
        "fname" : this.customerName,
        "mobile" : this.customerMobile,
        "address" : this.customerAddress,
        "email" : this.customerEmail,
        "checkstatus" : this.checkRecordStatus,
        "note" : this.customerNote
      }
      this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
    }
  
  
    makeCall() {
      if (this.customerMobile != "" || this.customerMobile != null || this.customerMobile != undefined) {
        this.callNumber.callNumber(this.customerMobile, true);
      } else {
        this.presentToast("You don''t have mobile number");
      }
  
    }
  
    sendMessage(){
  
  
      var options={
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
             intent: 'INTENT'  // Opens Default sms app
          }
  }
  this.sms.send(this.customerMobile, '',options)
    .then(()=>{
      // alert("success");
    },()=>{
    // alert("failed");
    });
  
  
      // this.sms.send(this.customerMobile, 'Hello world!');
    }
  
  
    async presentToast(message) {
      const toast = await this.toast.create({
        message: message,
        duration: 4000
      });
      toast.present();
    }
  

}
