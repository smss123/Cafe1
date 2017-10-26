import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FullScreenGallery } from '../../components/full-screen-gallery/full-screen-gallery';
import { HomeDetails2Page } from "../home-details2/home-details2";
import { ServiceSettingProvider } from '../../providers/service-setting/service-setting';
import {PexelFrameworkProvider} from '../../providers/pexel-framework/pexel-framework';

@IonicPage()
@Component({
  selector: 'page-home-details',
  templateUrl: 'home-details.html',
})
export class HomeDetailsPage {
  params: any = {};
  info: any;
  SelectedCountry:any;
  constructor(private p :PexelFrameworkProvider,private serv: ServiceSettingProvider, public navCtrl: NavController, public navParams: NavParams) {

this.SelectedCountry = navParams.get('items');
console.clear();
console.log(this.SelectedCountry);
    let that = this;
    this.params.data=[];
    this.params.events = {
      OpenSubGellay: function (item) {

        console.log(item);
         let p={
             items:item,
             selectedCountry:that.SelectedCountry
         };
         that.navCtrl.push(HomeDetails2Page,p);


      }

    };
    console.log(this.params);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDetailsPage');
    this.inilizeitms();

  }

  async inilizeitms() {
   this.p.StartLoading();

    this.serv.LoadOrgTypes().then(data=>{
      let items:any = data;
      console.log(items);
      for (let c of items) {
        this.params.data.push({
          id: c.Id,
          title: c.OrgTypeName,
          image: c.Image,
          favorite: true,

        });

      this.p.EndLoading();
    }


  });
}

}


