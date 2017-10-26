import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImgSlidersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-img-sliders',
  templateUrl: 'img-sliders.html',
})
export class ImgSlidersPage {
  imgprop: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImgSlidersPage');
    let img: any = this.navParams.get('img');
    this.imgprop = img.img;
    console.log(img);
  }
  OnInit() {

  }
}
