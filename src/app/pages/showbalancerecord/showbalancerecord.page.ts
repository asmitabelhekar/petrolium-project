import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showbalancerecord',
  templateUrl: './showbalancerecord.page.html',
  styleUrls: ['./showbalancerecord.page.scss'],
})
export class ShowbalancerecordPage implements OnInit {

  balaceRecord = [

    {
      "date": "01/02/2020",
      "credited": "",
      "debited": "2500",
     
    }, {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    
  ]
  constructor(public router : Router) { }

  ngOnInit() {
  }

  goBackword() {
    this.router.navigate(['sites']);
  }
}
