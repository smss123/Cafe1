import { async } from 'rxjs/scheduler/async';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FullScreenGallery } from '../../components/full-screen-gallery/full-screen-gallery';
import{HomeDetailsPage} from '../home-details/home-details';
 import {ServiceSettingProvider  } from "../../providers/service-setting/service-setting";
 import {PexelFrameworkProvider} from '../../providers/pexel-framework/pexel-framework';
@IonicPage()
@Component({
  selector: 'page-arhome',
  templateUrl: 'arhome.html',
})
export class ArhomePage {
params:any={};
ListOfCity:any=[];
//subGallery:any;
  constructor(public pexel:PexelFrameworkProvider,public setting:ServiceSettingProvider,public navCtrl: NavController, public navParams: NavParams) {
     this.inilizeitms();
    // this.params.data.subGallery = HomeDetailsPage;

     let that=this;
      this.params.events = {
        OpenSubGellay: function(item){

            let p={
                items:item
            };
            that.navCtrl.push(HomeDetailsPage,p);


      }



   };
   this.params.data=[];
     console.log(this.params);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArhomePage');
  }
async inilizeitms(){
this.pexel.StartLoading();
 this.ListOfCity = await this.setting.LoadCity();
 console.log(this.ListOfCity);
  // this.params.data = {
  //     toolBarTitle: 'City',
  //     items: []

  //     };
      for (let c of this.ListOfCity) {
        this.params.data.push( {
          id: c.Id,
          title: c.CityName,
          image: c.Image,
          favorite: false
        } );
      console.log(this.params.data.items);
    }
    this.pexel.EndLoading();
}
}
