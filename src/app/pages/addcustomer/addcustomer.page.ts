import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  goBackword(){
    this.router.navigate(['home']);
  }
}
