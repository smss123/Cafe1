import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FullScreenGallery } from '../../components/full-screen-gallery/full-screen-gallery';
import {HomeProfilePage} from '../home-profile/home-profile';
import { OrginizeProvider } from '../../providers/orginize/orginize';
import { PexelFrameworkProvider } from '../../providers/pexel-framework/pexel-framework';
@IonicPage()
@Component({
  selector: 'page-home-details2',
  templateUrl: 'home-details2.html',
})
export class HomeDetails2Page {
  params:any={};
  info:any;
  countryInfo:any;

  constructor(public p : PexelFrameworkProvider,public serv:OrginizeProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.info = navParams.get('items');
    this.countryInfo = navParams.get('selectedCountry');
    console.clear();
    console.log(this.countryInfo);
    console.log(this.info);

    this.params.data=[];

    let that=this;
     this.params.events = {
       OpenSubGellay: function(item){

           let p={
               items:item
           };
           console.clear();
           console.log(p);
           that.navCtrl.push(HomeProfilePage,p);


     }

  };
    console.log(this.params);

 }
 ionViewDidLoad() {
  console.log('ionViewDidLoad HomeDetails2Page');
  this.inilizeitms();

}


 async inilizeitms() {
     this.p.StartLoading();
let cityId= this.countryInfo.id;
let TypeId = this.info.id;
  let d:any = await this.serv.LoadOrg(cityId,TypeId);
  for(let c of d){
    this.params.data.push({
      id: c.Id,
      title: c.Name,
      image: c.Image,
      favorite: false,
      fullInfo:c
  });

  }
  this.p.EndLoading();
}

}
