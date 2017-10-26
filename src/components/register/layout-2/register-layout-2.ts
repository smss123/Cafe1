import { Component, Input, OnInit } from '@angular/core';
import {ServiceSettingProvider} from '../../../providers/service-setting/service-setting';
import { LoadingController } from 'ionic-angular';
@Component({
    selector: 'register-layout-2',
    templateUrl: 'register.html'
})

export class RegisterLayout2 {

    @Input() data: any;
    @Input() events: any;
CityList:any=[];
    username: string;
    password: string;
    country: string;
    city: string;
    email: string;
    phone : string;
    location : string;
    snapshat: string;
    websits : string;
    instgram : string;
    facebook : string;
    twitter : string;
    worktime : string;
    Image: string;
    description : string;
    other: string;
    compareFn(e1: string, e2: string): boolean {
      return e1 && e2 ? e1 === e2 : e1 === e2;
    }

      loader = this.loadingCtrl.create({
      content: ""
    });

    constructor(public loadingCtrl: LoadingController,public serv:ServiceSettingProvider) {

     this.loadCity()


    }
   loadCity(){
    this.loader.present();
    this.serv.LoadCity().then(data=>{
      let d:any = data;
      this.CityList = d;
      this.loader.dismiss();
    });

   }
    onEvent = (event: string): void => {
        if (this.events[event]) {
            this.events[event]({
                'username': this.username,
                'password': this.password,
                //'country': this.country,
                'city': this.city,
                'email': this.email,
                'phone' : this.phone,
                'location' : this.location,
                'snapshat': this.snapshat,
                'websits' : this.websits,
                'instgram' : this.instgram,
                'facebook' : this.facebook,
                'twitter' : this.twitter,
                'worktime' : this.worktime,
                'Image': this.Image,
                'description' : this.description,
                'other': this.other,
            });
        }
    }
}
