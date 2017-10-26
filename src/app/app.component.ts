import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { Splashscreen,StatusBar } from 'ionic-native';

import { MenuService } from '../services/menu-service';
import {SelectLangPage  } from "../pages/select-lang/select-lang";
import {ArloginPage} from "../pages/arlogin/arlogin";
import {ArhomePage} from "../pages/arhome/arhome";
import{ArregisterPage} from "../pages/arregister/arregister";
import {ArfavoritePage} from "../pages/arfavorite/arfavorite";
import {ArMypagePage} from "../pages/ar-mypage/ar-mypage";
import {ArAboutusPage} from "../pages/ar-aboutus/ar-aboutus";
import {ArAlarmsPage} from "../pages/ar-alarms/ar-alarms";
import {HomeDetailsPage} from '../pages/home-details/home-details';
import {HomeDetails2Page} from '../pages/home-details2/home-details2';
import {HomeProfilePage} from '../pages/home-profile/home-profile';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  templateUrl: 'app.html',
  providers: [MenuService]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = SelectLangPage;
  pages: any;
  leftMenuTitle: string;

  constructor(public platform: Platform,
    public menu: MenuController,
    private translate: TranslateService,
    private iab: InAppBrowser,
    private menuService: MenuService) {
      this.translate.setDefaultLang('en');
       // let status bar overlay webview
//this.statusBar.overlaysWebView(true);

// set status bar to white
//this.statusBar.backgroundColorByHexString('#ffffff');

    this.initializeApp();

    //this.pages = menuService.getAllThemes();
    this.pages = [
      { title: 'الرئيسية', component: ArhomePage,icon:' icon-home',parm:"ArhomePage" },
      { title: 'المفضلة', component: ArfavoritePage,icon:'icon-heart-outline',parm:"ArfavoritePage" },
      { title: 'صفحتي', component: ArMypagePage,icon:'icon-format-list-numbers',parm:"ArMypagePage" },
     // { title: 'تنبيهات', component: ArAlarmsPage,icon:'icon-comment-alert-outline',parm:"ArAlarmsPage" },
      { title: 'راسلنا', component: ArAboutusPage,icon:' icon-email-outline',parm:"ArAboutusPage" },


    ];
    this.leftMenuTitle = menuService.getTitle();
  }
transmenu(pages){
pages.forEach(element => {
  element.title.parm;

});
}
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     StatusBar.styleDefault();

      Splashscreen.hide();
      localStorage.setItem("mailChimpLocal", "true");
    });
  }

  openPage(page) {
    if(page.title==='راسلنا'){

        this.iab.create('http://tazzinac.com/#contact').show();

    }else{
 // close the menu when clicking a link from the menu
 this.menu.close();
 // navigate to the new page if it is not the current page
 this.nav.setRoot(page.component);
    }

  }
}
