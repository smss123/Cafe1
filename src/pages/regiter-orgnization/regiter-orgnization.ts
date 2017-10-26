import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ArhomePage} from "../arhome/arhome";
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the RegiterOrgnizationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-regiter-orgnization',
  templateUrl: 'regiter-orgnization.html',
})
export class RegiterOrgnizationPage {

  public params:any={};
  
 public username: string;
 public password: string;
 constructor(private translate: TranslateService,public navCtrl: NavController, public navParams: NavParams) {

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
        "phone"               : "ارقام التواصل",
        "location"               : "ادخل رابط موقع المنشأة",
        "website"               :"ادخل رابط ويب سايت المنشأة",
        "facebook"               :"ادخل رابط الفيس بوك",
        "instgram"               :"ادخل رابط الانستقرام المنشأة",
        "twitter"               :"ادخل رابط تويتر المنشأة",
        "description"               :"اكتب وصف عن المنشأة",
        "Image"               :"ارفع صورة  او فيديو",
        "other"               :"ادخل تعريف عن المنشأة",
        "woktime"               :"ادخل اوقات العمل",
        "snapchat"               :"ادخل رابط سناب شات المنشأة",
        "submit"              : "موافق",
        "skip"                : "تخطي"
  };
this.params.events = {

     onLogin: function(params) {
      navCtrl.setRoot(ArhomePage);
        console.log('onLogin:' + JSON.stringify(params));
     },
     onRegister: function(params) {
       
        console.log('onRegister:' + JSON.stringify(params));
        navCtrl.setRoot(ArhomePage);
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
    this.translate.get('arregisterFormorg').subscribe(
      value => {
         this.params.data.username = value.username;
                  this.params.data.password = value.password;
                  this.params.data.submit = value.submit;
                  this.params.data.city = value.city;
                  this.params.data.email = value.email;
                  this.params.data.phone = value.phone;
                  this.params.data.location = value.location;
                  this.params.data.website = value.website;
                  this.params.data.facebook = value.facebook;
                  this.params.data.instgram = value.instgram;
                  this.params.data.twitter = value.twitter;
                  this.params.data.snapchat = value.snapchat;
                  this.params.data.Image = value.Image;
                  this.params.data.description = value.description;
                  this.params.data.other = value.other;
                  this.params.data.worktime = value.worktime;
                  
                  
      }
    )
    console.log('ionViewDidLoad RegiterOrgnizationPage');
  }


  gotohome()
  {
    this.navCtrl.setRoot(ArhomePage);
}
}