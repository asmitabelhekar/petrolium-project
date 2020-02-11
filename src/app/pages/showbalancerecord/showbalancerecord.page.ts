import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showbalancerecord',
  templateUrl: './showbalancerecord.page.html',
  styleUrls: ['./showbalancerecord.page.scss'],
})
export class ShowbalancerecordPage implements OnInit {


  // balaceRecord = [

  //   {
  //     "date": "01/02/2020",
  //     "credited": ["2500","2500","2500"],
  //     "debited": ["2500","2500","2500"]
     
  //   }, {
  //     "date": "01/02/2020",
  //     "credited": ["2500","2500","2500"],
  //     "debited": ["2500","2500","2500"]
     
  //   },
  //   {
  //     "date": "01/02/2020",
  //     "credited": ["2500","2500","2500"],
  //     "debited": ["2500","2500","2500"]
     
  //   },
  //   {
  //     "date": "01/02/2020",
  //     "credited": ["2500","2500","2500"],
  //     "debited": ["2500","2500","2500"]
     
  //   },
  //   {
  //     "date": "01/02/2020",
  //     "credited": ["2500","2500","2500"],
  //     "debited": ["2500","2500","2500"]
     
  //   },
  //   {
  //     "date": "01/02/2020",
  //     "credited": ["2500","2500","2500"],
  //     "debited": ["2500","2500","2500"]
     
  //   },
    
  // ]
  customerName: any;
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
      "debited": "2500",
     
    },
    
  ]
  constructor(public router : Router,
    public activatedRoute : ActivatedRoute) { }

  ngOnInit() {

     this.customerName = this.activatedRoute.snapshot.params['customerName'];
  }

  goBackword() {
    this.router.navigate(['home']);
  }
}
