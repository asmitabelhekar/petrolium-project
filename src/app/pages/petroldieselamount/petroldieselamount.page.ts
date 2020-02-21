import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-petroldieselamount',
  templateUrl: './petroldieselamount.page.html',
  styleUrls: ['./petroldieselamount.page.scss'],
})
export class PetroldieselamountPage implements OnInit {

  userModel: any = {};
  constructor(public toasController: ToastController) { }

  ngOnInit() {
  }

  submit() {
    this.presentToast("Amount submited")
  }

  async presentToast(message) {
    const toast = await this.toasController.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
}
