import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  progress = 0.1;
  recordList = [
    {
     "recordName" : "Customerwise",
     "progress" : "0.5",
     "amount" : "60000"
    },
    {
     "recordName" : "Tankerwise",
     "progress" : "0.1",
     "amount" : "10000"
    },
    {
     "recordName" : "Usagewise",
     "progress" : "0.4",
     "amount" : "40000"
    },
    {
     "recordName" : "Customerwise",
     "progress" : "0.9",
     "amount" : "90000"
    }
  ]
  constructor(public router : Router) { }

  ngOnInit() {
  }

  dislayList(){
    this.router.navigate(['/reportlist']);
  }
}
