import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.page.html',
  styleUrls: ['./reportlist.page.scss'],
})
export class ReportlistPage implements OnInit {

  recordList = [
    {
      "name": "asmita belhekar",
      "amount": "20000"
    },
    {
      "name": "asmita belhekar",
      "amount": "20000"
    },
    {
      "name": "asmita belhekar",
      "amount": "20000"
    },
    {
      "name": "asmita belhekar",
      "amount": "20000"
    },
    {
      "name": "asmita belhekar",
      "amount": "20000"
    },
    {
      "name": "asmita belhekar",
      "amount": "20000"
    },
    {
      "name": "asmita belhekar",
      "amount": "20000"
    }
  ]
  constructor(public router: Router) { }

  ngOnInit() {
  }

  goBackword() {
    this.router.navigate(['/reports']);
  }
}
