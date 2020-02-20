import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ToastController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { Location } from '@angular/common';
import { LoaderserviceService } from 'src/app/service/loader/loaderservice.service';

@Component({
  selector: 'app-customerdetil',
  templateUrl: './customerdetil.page.html',
  styleUrls: ['./customerdetil.page.scss'],
})
export class CustomerdetilPage implements OnInit {

  getCustomerDetail: any;
  customerName: any;
  customerImage = "";
  customerMobile: any;
  customerAddress: any;
  customerEmail: any;
  checkRecordStatus: any;
  customerNote : any;
  customerIndex : any;
  customerDetailInfo : any;
  firstName: any;
  customerId: any

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public location : Location,
    private callNumber: CallNumber,
    public toast: ToastController,
    public loader : LoaderserviceService,
    public apiCall : ApicallService,
    private sms: SMS) { }

 
    ngOnInit() {
     
      this.customerId = JSON.parse(this.activatedRoute.snapshot.params['customerId']);
      this.getCustomerDetailInfo();
     
    }
  
  
  
    goBackword() {
      let detailData =
      {
        "id" : this.customerId,
        "name": this.getCustomerDetail['firstName'],
        "lname": this.getCustomerDetail['lastName'],
        "mobile" : this.customerMobile
      }
  
      this.router.navigate(['showbalancerecord', { detailData: JSON.stringify(detailData) }])
    }
  
    getCustomerDetailInfo(){
      this.loader.presentLoading();
      let url = environment.base_url + "customers/" + this.customerId;
      this.apiCall.get(url).subscribe(MyResponse => {
        this.getCustomerDetail = (MyResponse['result']);

        if(this.getCustomerDetail.firstName != "" || this.getCustomerDetail.firstName != null){
          this.customerName = this.getCustomerDetail['firstName'] + " " +  this.getCustomerDetail['lastName'];
          this.firstName = this.customerName.charAt(0);
         
        }
        else{
          this.customerName = "NA";
        }
       
        if(this.getCustomerDetail['mobile'] != "" || this.getCustomerDetail['mobile'] != null){
          this.customerMobile = this.getCustomerDetail['mobile'];
        }else{
          this.customerMobile = "NA";
        }
       
        if(this.getCustomerDetail['address'] != "" || this.getCustomerDetail['address'] != null){
          this.customerAddress = this.getCustomerDetail['address'];
        }else{
          this.customerAddress = "NA";
        }
    
        if(this.getCustomerDetail['email'] != "" || this.getCustomerDetail['email'] != null){
          this.customerEmail = this.getCustomerDetail['email'];

        }
        else{
          this.customerEmail = "NA";
        }
    
        if(this.getCustomerDetail['note'] != "" || this.getCustomerDetail['note'] != null){
          this.customerNote = this.getCustomerDetail['note'];
          if(this.customerNote == null){
            this.customerNote = "NA";
          }
        }
        else{
          this.customerNote = "NA";
        }
        this.loader.stopLoading();
      },
        error => {
          this.loader.stopLoading();
          this.presentToast("Something went wrong");
          alert("failed:" + error);
        })
    }


    editDetails() {
      this.checkRecordStatus = "update";
  
      let detailCustomerdata = {
        "fname" : this.customerName,
        "mobile" : this.customerMobile,
        "address" : this.customerAddress,
        "email" : this.customerEmail,
        "checkstatus" : this.checkRecordStatus,
        "note" : this.customerNote,
        "customerId" : this.customerId
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
        replaceLineBreaks: false,
        android: {
             intent: 'INTENT' 
          }
  }
  this.sms.send(this.customerMobile, '',options)
    .then(()=>{
    },()=>{
    });
    }
  
  
    async presentToast(message) {
      const toast = await this.toast.create({
        message: message,
        duration: 4000
      });
      toast.present();
    }
  

}
