import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall/apicall.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  getUserDetail: any;
  userName : any;
  firstName : any;
  userMobile: any;
  userEmail: any;
  userRole: any;
  userId: any;
  logoutStatus: any;

  constructor(public apiCall: ApicallService,
    public router : Router,
    public activatedRoute : ActivatedRoute) { }

  ngOnInit()
   {
    this.userId = (this.activatedRoute.snapshot.params['userId']);
    if(this.userId == undefined || this.userId == "" || this.userId == null){
      let userId = localStorage.getItem('userId');
      alert("localstorage:"+userId);
      this.getProfileDetail(userId);
      this.logoutStatus = 0;
    }else{
      alert("particular user:"+this.userId);
      this.getProfileDetail(this.userId);
      this.logoutStatus =1;
    }
    alert("check:"+this.userId);
   
  }

  getProfileDetail(id) {
    let url = environment.base_url + "users/" + id;
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getUserDetail = (MyResponse['result']);
      this.userName = this.getUserDetail.name;
      this.userMobile = this.getUserDetail.mobile;
      this.userRole = this.getUserDetail.userRole;
      this.userEmail = this.getUserDetail.email;
      this.firstName = this.userName.charAt(0);
    },
      error => {
      })
  }

  logOut(){
    localStorage.removeItem("userRole");
    localStorage.removeItem('userId');
    localStorage.clear();
    localStorage.setItem('login', 'no');
    this.router.navigate(['/login']);
  }

  updateProfile(){
    this.router.navigate(['/addusers']);
  }
}
