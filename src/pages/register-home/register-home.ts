import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ArregisterPage} from '../arregister/arregister';
import{RegiterOrgnizationPage} from '../regiter-orgnization/regiter-orgnization';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the RegisterHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register-home',
  templateUrl: 'register-home.html',
})

export class RegisterHomePage {
  loginasuser: any;

  constructor(private iab: InAppBrowser ,private translate: TranslateService,public navCtrl: NavController, public navParams: NavParams) {
    

  }

  ionViewDidLoad() {
    this.translate.get('loginasuser').subscribe(
      value => {
         this.loginasuser = value;

      }
    )
    console.log('ionViewDidLoad RegisterHomePage');
  }
  gotologin(){
   
    this.navCtrl.push(ArregisterPage);
  }
  gotologinen(){
      this.iab.create('http://tazzinac.com/').show();
    //this.navCtrl.push(RegiterOrgnizationPage);
  }
}
