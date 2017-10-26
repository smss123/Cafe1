import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArhomePage } from '../arhome/arhome';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ArMypagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ar-mypage',
  templateUrl: 'ar-mypage.html',
})
export class ArMypagePage {
 public params:any={};

  public username: string;
  public password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArMypagePage');
  }
  back() {
    this.navCtrl.setRoot(ArhomePage);
  }

}
