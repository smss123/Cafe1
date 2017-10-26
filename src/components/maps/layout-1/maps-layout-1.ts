import { Component, Input,OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import { OrginizeProvider } from '../../../providers/orginize/orginize';
import {PexelFrameworkProvider } from '../../../providers/pexel-framework/pexel-framework';
import { ServiceSettingProvider} from '../../../providers/service-setting/service-setting';
import {ImgSlidersPage} from '../../../pages/img-sliders/img-sliders';
declare var window:any;
@Component({
    selector: 'maps-layout-1',
    templateUrl: 'maps.html'
})

export class MapsLayout1  {
    @Input() data: any;
    @Input() events: any;
isOpen:any=true;
OrgId:any;
clickflag:number=1;
icon:any="arrow-down";
slideImages:any;
//arrow-up  arrow-down
slideWorkTime(){
    if(this.clickflag===1){
        //show
this.icon = "arrow-up";
    this.isOpen =false;
        this.clickflag =2;
    }else{
        //hide
        this.icon="arrow-down";
        this.isOpen=true;
        this.clickflag=1;
    }

}
    GoToSnapchat(url) {
        console.log("snapchat clicked");
        this.platform.ready().then(() => {

            this.iab.create(url).show();
        });

}
    GoToTwitter(url) {
        this.iab.create(url).show();
        console.log(" twitter clicked");
    }
    GoToWebSite(url) {
        this.iab.create(url).show();
        console.log(" WebSite clicked");
    }
    GoToPhoneNumber(phone) {
        this.launchDialer(phone);
        console.log(" PhoneNumber clicked");
    }

    async Fav() {
        this.p.StartLoading()
        try {

            let orgid: any = this.OrgId;
            let userid: any = await this.setting.GetUserInfo();
            let result: any = this.serv.AddToFav(orgid, userid.id);
            if (result === "done") {
                this.p.EndLoading();
                this.p.showAlert("تم", "");
            }
            this.p.EndLoading();
        } catch (ex) {
            this.p.EndLoading();
            this.p.showAlert("خطأ", "يرجى تسجيل الدخول اولا");
        }
    }
    ionViewDidLoad(){


    }
  LoadImgSlide(id) {
    this.p.StartLoading();
    this.slideImages = [];
    this.serv.LoadOrgSlideImage(id).then(data => {
      let d: any = data;
      for (let c of d) {
        this.slideImages.push({
          img: c.Image
        });
      }

      console.log("img from maps :", this.slideImages);
      this.p.EndLoading();
    });
console.log(this.data);
  }
    constructor(private navctrl:NavController, private p:PexelFrameworkProvider,private setting:ServiceSettingProvider,private serv:OrginizeProvider,private callNumber: CallNumber,public platform: Platform,private iab: InAppBrowser ) {
      console.log("hello from the Maps :");

      console.log(this.data);

     }
    launchDialer(n: string) {
        this.callNumber.callNumber(n, true)
            .then(() => console.log('Launched dialer!'))
            .catch(() => console.log('Error launching dialer'));
    }
    onEvent(event: string, index: number, e: any) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    }

     onStarClass(items: any, index: number, e: any) {
        for (var i = 0; i < items.length; i++) {
        items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };

    ngOnInit(){
      this.OrgId = this.data.Info.id ;
      console.log('Hi am ini');
      console.log(this.data.Info.id);


      this.LoadImgSlide(this.data.Info.id);
    }
    ShowImg(c){
      let parms = {
        img :c
      }
      this.navctrl.push(ImgSlidersPage,parms);
      }

      GoToNav(){
        console.log("nav clicked");
        window.location = `geo:${this.data.map.lat},${this.data.map.lng};u=35`;
      }
}
