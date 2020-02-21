import { Component, OnInit } from '@angular/core';

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
     "amount" : "10000"
    },
    {
     "recordName" : "Tankerwise",
     "progress" : "0.1",
     "amount" : "60000"
    },
    {
     "recordName" : "Usagewise",
     "progress" : "0.4",
     "amount" : "30000"
    },
    {
     "recordName" : "Customerwise",
     "progress" : "0.9",
     "amount" : "90000"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
