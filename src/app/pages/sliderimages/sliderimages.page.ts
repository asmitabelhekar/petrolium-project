import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sliderimages',
  templateUrl: './sliderimages.page.html',
  styleUrls: ['./sliderimages.page.scss'],
})
export class SliderimagesPage implements OnInit {

getImageArray = [
  {
    "image" : "../../../assets/logoapp.png"
  },
  {
    "image" : "../../../assets/logoapp.png"
  },
  {
    "image" : "../../../assets/logoapp.png"
  }
]
  getCusstomers = [

    {
      "title": "llllllllll jjjjjjjjjjj",
      "summery": "",
      "image": "../../../assets/sliseone.png"
    
    },
    {
      "title": "smitaaa belhekar",
      "summery": "1234567890",
      "image": "../../../assets/slidetwo.png"
   
    },
    {
      "title": "asmita belhekar",
      "summery": "9527902622",
      "image": "../../../assets/slidethree.png"
     
    },
    
 
  ]
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };
  constructor(public router : Router) { }

  ngOnInit() {
  }

  loginPage(){
    this.router.navigate(['/login']);
  }
}
