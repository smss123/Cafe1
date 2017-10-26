import { Component} from '@angular/core';
 import {ArhomePage} from "../arhome/arhome";
 import{RegisterHomePage} from "../register-home/register-home";
 import { NavController, NavParams } from 'ionic-angular';
 import { TranslateService } from '@ngx-translate/core';
 import { AlertController } from 'ionic-angular';
 import { LoadingController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import  {ServiceSettingProvider} from '../../providers/service-setting/service-setting';
@Component({
  selector: 'page-arlogin',
  templateUrl: 'arlogin.html',

})
export class ArloginPage {

  public params: any = {};

  public username: string;
  public password: string;

    loader = this.loadingCtrl.create({
    content: ""

  });
  gomy:any;
  constructor(public setting: ServiceSettingProvider,public loadingCtrl: LoadingController,public alertCtrl: AlertController,public serv:AuthProvider,private translate: TranslateService,public  navCtrl: NavController, public Params: NavParams) {

      this.params.data = {
      "username"        : "اسم المستخدم",
      "password"        : "كلمة المرور",
      "register"        : "تسجيل",
      "login"           : "دخول",
      "skip"            : "تخطي",
      "logo"            : "assets/images/logo/login.png",
      "backgroundImage" : "icon-account",
      "iconAccount"     : "icon-key",
      "iconKey"         : "",
      "iconLock"        : "./assets/images/background/loginlight.jpg"
   };
let me = this;
   this.params.events = {
      onLogin: function(params) {

       me.Auth(params);
         console.log('onLogin:' + JSON.stringify(params));
      },
      onRegister: function(params) {
         console.log('onRegister:' + JSON.stringify(params));
         navCtrl.push(RegisterHomePage);
      },
      onSkip: function(params) {
         console.log('onSkip:' + JSON.stringify(params));
         navCtrl.setRoot(ArhomePage);
      },
      onFacebook: function(params) {
  	 console.log('onFacebook:' + JSON.stringify(params));
      },
      onTwitter: function(params) {
         console.log('onTwitter:' + JSON.stringify(params));
      },
      onGoogle: function(params) {
         console.log('onGoogle:' + JSON.stringify(params));
      },
      onPinterest: function(params) {
         console.log('onPinterest:' + JSON.stringify(params));
      },
   }
  }
  ionViewDidLoad() {
    this.translate.get('LoginForm').subscribe(
        value => {
           this.params.data.login = value.Login;
                    this.params.data.password = value.password;
                    this.params.data.username = value.username;
                    this.params.data.register = value.register;
                    this.params.data.skip = value.skip;


        }
      )
    console.log('ionViewDidLoad SelectLangPage');
  }
public Auth(parms){
  this.presentLoading();
  this.serv.UserLogin(parms.username,parms.password).then(data=>{
let d:any = data;
let User :UserInfo;
if(d==='NotFound'){
this.showAlert('البيانات غير صحيحة',"قد يكون المستخدم غير نشط او غير مسجل");
this.dismissLoading();
}else{

console.log(d);
  this.setting.StoreItem('UserInfo',d);
  this.dismissLoading();
 this. navCtrl.setRoot(ArhomePage);
}

console.log(d);


  });
}

showAlert(title,messages) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: messages,
    buttons: ['موافق']
  });
  alert.present();
}

presentLoading() {

  this.loader.present();
}
dismissLoading() {

   this.loader.dismiss();
 }

}
interface UserInfo {
  CityId: number;
  Email: string;
  SystemStatus: number;
  Name: string;
  CityName: string;
}
