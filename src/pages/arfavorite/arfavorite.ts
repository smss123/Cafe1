import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArhomePage} from '../arhome/arhome';
/**
 * Generated class for the ArfavoritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-arfavorite',
  templateUrl: 'arfavorite.html',
})
export class ArfavoritePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArfavoritePage');
  }
  back() {
    this.navCtrl.setRoot(ArhomePage);
  }

}
