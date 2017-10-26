
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrginizeProvider } from '../../providers/orginize/orginize';
import { PexelFrameworkProvider } from '../../providers/pexel-framework/pexel-framework';
@IonicPage()
@Component({
  selector: 'page-home-profile',
  templateUrl: 'home-profile.html',
})
export class HomeProfilePage {
  params: any = {}
  items: any;
  workTime: any = [];
  service: any = [];
  slideImages: any;
  id:any;
  constructor(private p: PexelFrameworkProvider, public serv: OrginizeProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.items = navParams.get('items');
this.id  = this.items.id;

    console.log(this.items);
    this.map();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeProfilePage');
  }
  async GetService() {
    this.p.StartLoading();
    let u: any = await this.serv.LoadService(this.items.id);
    console.log(u);
    for (let c of u) {
      this.service.push({
        ServiceName: c.ServiceName,
        Icon: c.Icon
      });
    }
    this.p.EndLoading();

  }
  async GetWorkTime() {
    this.p.StartLoading();
    let u: any = await this.serv.LoadWorkTime(this.items.id);
    console.log(u);
    for (let c of u) {
      this.workTime.push({
        day: c.Day,
        Time: c.From + "-" + c.To
      });
    }
    this.p.EndLoading();
  }
  public RateCalc(likeCount) {
    if (likeCount < 100) {
      return 1
    } else if (likeCount < 200) {
      return 2
    } else if (likeCount < 300) {
      return 3
    } else if (likeCount < 400) {
      return 4
    } else {
      return 5
    }
  }

  public FormateRate(Likes) {
    //console.clear();
    switch (Likes) {
      case 1: {
        let s: any = [
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
        ];
        console.log("case 1");
        console.log(s);
        return s;

      }

      case 2: {
        let s: any = [
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
        ];
        console.log("case 2");
        console.log(s);
        return s;

      }

      case 3: {
        let s: any = [
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
        ];
        console.log("case 3");
        console.log(s);
        return s;

      }
      case 4: {
        let s: any = [
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }
        ];
        console.log("case 4");
        console.log(s);
        return s;

      }
      case 5: {
        let s: any = [
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
          ,
          {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }
        ];
        console.log("case 5");
        console.log(s);
        return s;

      }
      default:
        return null;

    }
  }
  back() {
    this.navCtrl.pop();
  }


   map() {

    this.GetWorkTime();
    this.GetService();



    this.params.data = {
      Info:{
        imageSlide : this.slideImages,
        id:this.items.id
      },
      iconLike: 'icon-thumb-up',
      iconFavorite: 'icon-heart',
      iconShare: 'icon-share-variant',
      title: this.items.fullInfo.Name,
      titleDescription: this.items.fullInfo.Address,
      reviews: '(' + this.items.fullInfo.Likes + ' معجب)',
      contentTitle: this.items.fullInfo.Other,
      snapchat: this.items.fullInfo.SanpchatUrl,
      twitter: this.items.fullInfo.TwitterUrl,
      website: this.items.fullInfo.WebSiteUrl,
      phone: this.items.fullInfo.PhoneNumber,
      contentDescription: this.items.fullInfo.Description,
      iconLoacation: 'icon-map-marker-radius',
      iconLoacationText: 'Design Street, New York, USA',
      iconWatch: 'icon-alarm',
      iconWatchText: '8:00 to 16:00 working days',
      iconPhone: 'icon-phone',
      iconPhoneText: this.items.fullInfo.PhoneNumber,
      iconEarth: 'icon-earth',
      iconEarthText: this.items.fullInfo.WebSiteUrl,
      iconEmail: 'icon-email-outline',
      iconEmailText: this.items.fullInfo.Email,
      //  Snapchat: this.items.fullInfo.end,
      iconsStars: this.FormateRate(this.RateCalc(this.items.fullInfo.Likes)),
      map: {
        lat: JSON.parse(this.items.fullInfo.Location).lat,
        lng: JSON.parse(this.items.fullInfo.Location).lng,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
      },
      Workime: this.workTime,
      service: this.service

    };
    this.params.events = {
      'onLike': function (item: any) {
        console.log("Like");

      },
      'onFavorite': function (item: any) {
        if (item) {
          item.favorite = !item.favorite;
        }
      },
      'onShare': function (item: any) {
        console.log("Share");
      },
      'onSkipPrevious': function (item: any) {
        console.log("Skip Previous");
      },
      'onPlay': function (item: any) {
        console.log("Play");
      },
      'onSkipNext': function (item: any) {
        console.log("Skip Next");
      },
      'onFab': function (item: any) {
        console.log("Fab");
      },
      'onRates': function (index: number) {
        console.log("Rates " + (index + 1));
      },
      'onItemClick': function (item: any) {
        console.log(item.title);
      },
    }

  }
}
