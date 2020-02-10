import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

userModel: any ={}
  constructor(public router : Router) { }

  ngOnInit() {
  }

  addCustomer(){
    this.router.navigate(["home"]);
  }
  goBackword(){
    this.router.navigate(['home']);
  }
}
