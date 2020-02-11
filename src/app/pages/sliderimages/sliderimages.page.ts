import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sliderimages',
  templateUrl: './sliderimages.page.html',
  styleUrls: ['./sliderimages.page.scss'],
})
export class SliderimagesPage implements OnInit {

getImageArray = [
  {
    "image" : "../../assets/logoapp.jpg"
  },
  {
    "image" : "../../../assets/logoapp.jpg"
  },
  {
    "image" : "../assets/logoapp.jpg"
  }
]
  getCusstomers = [

    {
      "title": "llllllllll jjjjjjjjjjj",
      "summery": "",
      "image": "../../assets/sliseone.jpg"
    
    },
    {
      "title": "smitaaa belhekar",
      "summery": "1234567890",
      "image": "../../assets/slidetwo.jpg"
   
    },
    {
      "title": "asmita belhekar",
      "summery": "9527902622",
      "image": "../../assets/slidethree.jpg"
     
    },
    
 
  ]
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };
  constructor(public router : Router,
    public menuCntrl : MenuController) { }

  ngOnInit() {
    this.menuCntrl.enable(false);
  }

  loginPage(){
    this.router.navigate(['/login']);
  }
}
