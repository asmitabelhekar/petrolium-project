import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderserviceService {


  loadingStatus = new Subject<boolean>();
  loaderTop = new Subject<boolean>();
  blockingLoader = new Subject<boolean>();
  blockingLoaderAuth = new Subject<boolean>();
  bgGrey = new Subject<boolean>();

  blockingLoaderFlag = false;
  loaderTopFlag = false;
  private subject = new Subject<any>();


  showBlockingLoader(){
    console.log("load");
    this.blockingLoader.next(true);
    this.blockingLoaderFlag = true;
  }

  hideBlockingLoader(){
    this.blockingLoader.next(false);
    this.blockingLoaderFlag = false;
  }

  showBlockingLoaderAuth(){
    this.blockingLoaderAuth.next(true);
  }

  hideBlockingLoaderAuth(){
    this.blockingLoaderAuth.next(false);
  }

  sendMessage(message) {
    // console.log("name",message);
    let set_data = {};
    set_data['message'] = message;
    this.subject.next(set_data);
}
getMessage(): Observable<any> {
  return this.subject.asObservable();
}

  constructor(public loadingController: LoadingController) { }

  async loadingPresent(message: string = null, duration: number = null) {
    const loading = await this.loadingController.create({ message, duration });
    return await loading.present();
}
}
