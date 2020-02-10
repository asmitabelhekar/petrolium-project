import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

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
  constructor(public menuCntrl: MenuController,
    public router: Router) {
    this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));
    this.menuCntrl.enable(true);
    // this.makePdf();
  }

  addCustomer() {
    this.router.navigate(['addcustomer']);
  }

  getBalanceDetail() {
    this.router.navigate(['showbalancerecord']);
  }

  makePdf() {
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    var docDefinition = {
      content: [
        {
          columns: [
            {
              image: '<img src="data:image/png;base64,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',
              fit: [100, 100]
            },
            [
              { text: 'BITCOIN', style: 'header' },
              { text: 'Cryptocurrency Payment System', style: 'sub_header' },
              { text: 'WEBSITE: https://bitcoin.org/', style: 'url' },
            ]
          ]
        }
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 20,
          alignment: 'right'
        },
        sub_header: {
          fontSize: 18,
          alignment: 'right'
        },
        url: {
          fontSize: 16,
          alignment: 'right'
        }
      },
      pageSize: 'A4',
      pageOrientation: 'portrait'
    };
    pdfmake.createPdf(docDefinition).open();
  }
}
