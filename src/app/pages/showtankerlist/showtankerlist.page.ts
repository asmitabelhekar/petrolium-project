import { Component, OnInit } from '@angular/core';
import { LoaderserviceService } from '../../service/loader/loaderservice.service';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../../service/apicall/apicall.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-showtankerlist',
  templateUrl: './showtankerlist.page.html',
  styleUrls: ['./showtankerlist.page.scss'],
})
export class ShowtankerlistPage implements OnInit {

  getTankerHistory: any;
  customerId: any;
  showTankerRecord: any;


  constructor(
    public loader: LoaderserviceService,
    public apiCall: ApicallService,
    public toasController: ToastController
  ) { }

  ngOnInit() {
    this.getTankerList();
  }

  getTankerList() {
    this.loader.presentLoading();
    // let url = environment.base_url + "customers/" + 2 + "/purchase";
    let url = environment.base_url + "tanker?" + "size=" + 1000;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getTankerHistory = MyResponse['result']['list'];
      if (this.getTankerHistory.length > 0) {
        this.showTankerRecord = 1;
      } else {
        this.showTankerRecord = 0;
      } this.loader.stopLoading();
    },
      error => {
        alert(error);
        this.loader.stopLoading();
        this.presentToast("Something went wrong");
      })
  }

  async presentToast(message) {
    const toast = await this.toasController.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

}
