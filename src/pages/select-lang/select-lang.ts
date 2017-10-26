import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ArloginPage} from "../arlogin/arlogin";
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the SelectLangPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-select-lang',
  templateUrl: 'select-lang.html',
})
export class SelectLangPage {

  constructor(private translate: TranslateService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLangPage');
  }
gotologin(){
  this.translate.use('ar');
  this.navCtrl.setRoot(ArloginPage);
}
gotologinen(){
  this.translate.use('en');
  this.navCtrl.setRoot(ArloginPage);
}
}
