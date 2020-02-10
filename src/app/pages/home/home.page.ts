import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  getCusstomers = [

    {
      "name": "llllllllll jjjjjjjjjjj",
      "mobile": "",
      "amount": "2500",
      "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      "email": "lllll@gmail.com",
         },
    {
      "name": "smitaaa belhekar",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "email": "smitaaa@gmail.com",
    },
    {
      "name": "asmita belhekar",
      "mobile": "9527902622",
      "amount": "5000",
      "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      "email": "asmita@gmail.com",
     
    },
    {
      "name": "sejal belhekar",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email": "",
     
    },

    {
      "name": "priya abc",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Mumbai",
      "email": "priya@gmail.com",
   
    },
    {
      "name": "asmi belhekar",
      "mobile": "9527902622",
      "amount": "1000",
      "address": "Ahmednagar",
      "email": "asmi@gmail.com",
     
    },
    {
      "name": "kiran kokate",
      "mobile": "9096467346",
      "amount": "5000",
      "address": "Pune",
      "email": "kiran@gmail.com",
    
    },
    {
      "name": "ccccc dddd",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email": "ccccc@gmail.com",
    },

    {
      "name": "dhananjay raut",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Mumbai",
      "email": "dhananjay@gmail.com",

    },
    {
      "name": "cccc ppppp",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "email": "ccc@gmail.com",
    },
    {
      "name": "cccc hhhhhhh ",
      "mobile": "1234567890",
      "amount": "5000",
      "address": "Pune",
      "email": "chchch@gmail.com",
    },
    {
      "name": "aaaaaaa zzzz",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "",
      "email": "azazazaz@gmail.com",

    },
    {
      "name": "smitaaa belhekar",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "email": "smitaaa@gmail.com",
    },
    {
      "name": "aaaaaaaa   zzzz",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email": "azazazaz@gmail.com",

    },
    {
      "name": "smitaaa belhekar",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "email": "smitaaa@gmail.com",
    },
    {
      "name": "asmita belhekar",
      "mobile": "9527902622",
      "amount": "5000",
      "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      "email": "asmita@gmail.com",
     
    },
    {
      "name": "sejal belhekar",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email": "",
     
    },

    {
      "name": "priya abc",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Mumbai",
      "email": "priya@gmail.com",
   
    },
    {
      "name": "asmi belhekar",
      "mobile": "9527902622",
      "amount": "1000",
      "address": "Ahmednagar",
      "email": "asmi@gmail.com",
     
    },
    {
      "name": "kiran kokate",
      "mobile": "9096467346",
      "amount": "5000",
      "address": "Pune",
      "email": "kiran@gmail.com",
    
    },
    {
      "name": "ccccc dddd",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email": "ccccc@gmail.com",
    }
  ]
  constructor(public menuCntrl : MenuController,
    public router: Router)
   {
    this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));
    this.menuCntrl.enable(true);
  }

  addCustomer(){
    this.router.navigate(['addcustomer']);
  }

}
