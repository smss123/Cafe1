import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ArhomePage} from "../arhome/arhome";
import { TranslateService } from '@ngx-translate/core';
 import {AuthProvider } from "../../providers/auth/auth";
 import { PexelFrameworkProvider } from "../../providers/pexel-framework/pexel-framework";
@IonicPage()
@Component({
  selector: 'page-arregister',
  templateUrl: 'arregister.html',
})
export class ArregisterPage {
 public params:any={};

  public username: string;
  public password: string;
  constructor(private pexel:PexelFrameworkProvider, private service :AuthProvider, private translate: TranslateService,public navCtrl: NavController, public navParams: NavParams) {

    this.params.data = {
       "logo"                : "assets/images/logo/login-2.png",
         "iconAccount"         : "icon-account",
         "username"            : "اسم المستخدم",
         "iconHome"            : "icon-home-variant",
         "iconCity"            : "icon-city",
         "city"                : "المدينه",
         "iconWeb"             : "icon-web",
        //  "country"             : "المدينه",
         "iconLock"            : "icon-lock",
         "password"            : "كلمة المرور",
         "iconEmail"           : "icon-email-outline",
         "email"               : "البريد الالكتروني",
         "submit"              : "موافق",
         "skip"                : "تخطي"
   };
   let me = this;
this.params.events = {

      onLogin: function(params) {
       navCtrl.setRoot(ArhomePage);
         console.log('onLogin:' + JSON.stringify(params));
      },
      onRegister: function(params) {
me.RegisterUser(params);
         console.log('onRegister:' + JSON.stringify(params));

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
   };
  }

  ionViewDidLoad() {
    this.translate.get('arregisterForm').subscribe(
      value => {
         this.params.data.username = value.username;
                  this.params.data.password = value.password;
                  this.params.data.submit = value.submit;
                  this.params.data.city = value.city;
                  this.params.data.email = value.email;


      }
    )
    console.log('ionViewDidLoad ArregisterPage');
  }
RegisterUser(parms){
//   string Name,
//   string Email,
//  string Password,
//  int CityId
this.pexel.StartLoading();
this.service.RegisterUser(parms.username,parms.email,parms.password,parms.city,).then(data=>{
 this.pexel.EndLoading();
  let d:any = data;
  if(d==='already Exist'){
this.pexel.showAlert("المستخدم موجود مسبقا","المستخدم مسجل");
  }else{
    this.pexel.showAlert("تم بنجاح","تم التسجيل بنجاح");
    this.navCtrl.setRoot(ArhomePage);
  }
});

}
  gotohome()
{
  this.navCtrl.setRoot(ArhomePage);
}
}
