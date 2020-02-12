import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router,
    public menuController : MenuController) { }
  loginModel:any={}

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/home'])
  }
  ionViewWillEnter(){
    this.menuController.enable(false);
  }
userModel:any={}
  
}
