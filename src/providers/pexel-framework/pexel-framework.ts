import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Injectable()
export class PexelFrameworkProvider {
    loader = this.loadingCtrl.create({
    content: "",

  });

  constructor(public alertCtrl: AlertController,public loadingCtrl: LoadingController,public http: Http) {
    console.log('Hello PexelFrameworkProvider Provider');
  }

public StartLoading(){
  this.loader =this.loadingCtrl.create({
    content: "",

  });
 this.loader.present();
}
public EndLoading(){
  this.loader.dismiss().catch(() => {});;
 }
  showAlert(title,messages) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: messages,
      buttons: ['موافق']
    });
    alert.present();
  }
}
