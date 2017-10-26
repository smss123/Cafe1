import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
//pages
    //select languge here
    import { SelectLangPage } from "../pages/select-lang/select-lang";
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
    import {RegisterHomePage} from'../pages/register-home/register-home';
    import {RegiterOrgnizationPage} from '../pages/regiter-orgnization/regiter-orgnization';

//components
import {Spinner} from '../components/spinner/spinner';
import {SplashScreenLayout1} from '../components/splash-screen/layout-1/splash-screen-layout-1';
import {SplashScreenLayout2} from '../components/splash-screen/layout-2/splash-screen-layout-2';
import {SplashScreenLayout3} from '../components/splash-screen/layout-3/splash-screen-layout-3';
import {SearchBarLayout1} from '../components/search-bar/layout-1/search-bar-layout-1';
import {SearchBarLayout2} from '../components/search-bar/layout-2/search-bar-layout-2';
import {SearchBarLayout3} from '../components/search-bar/layout-3/search-bar-layout-3';
import {CheckBoxLayout1} from '../components/check-box/layout-1/check-box-layout-1';
import {CheckBoxLayout2} from '../components/check-box/layout-2/check-box-layout-2';
import {CheckBoxLayout3} from '../components/check-box/layout-3/check-box-layout-3';
import {WizardLayout1} from '../components/wizard/layout-1/wizard-layout-1';
import {WizardLayout2} from '../components/wizard/layout-2/wizard-layout-2';
import {WizardLayout3} from '../components/wizard/layout-3/wizard-layout-3';
import {TabsLayout1} from '../components/tabs/layout-1/tabs-layout-1';
import {TabsLayout2} from '../components/tabs/layout-2/tabs-layout-2';
import {TabsLayout3} from '../components/tabs/layout-3/tabs-layout-3';

import {LoginLayout1} from '../components/login/layout-1/login-layout-1';
import {LoginLayout2} from '../components/login/layout-2/login-layout-2';
import {RegisterLayout1} from '../components/register/layout-1/register-layout-1';
import {RegisterLayout2} from '../components/register/layout-2/register-layout-2';
import {Layout0Component} from '../components/register/layout0/layout0';
import {AppearanceAnimationLayout1} from '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1';
import {AppearanceAnimationLayout2} from '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2';
import {AppearanceAnimationLayout3} from '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3';
import {AppearanceAnimationLayout4} from '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4';
import {AppearanceAnimationLayout5} from '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5';
import {DragAndDropLayout1} from '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1';
import {DragAndDropLayout2} from '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2';
import {DragAndDropLayout3} from '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3';
import {ExpandableLayout1} from '../components/list-view/expandable/layout-1/expandable-layout-1';
import {ExpandableLayout2} from '../components/list-view/expandable/layout-2/expandable-layout-2';
import {ExpandableLayout3} from '../components/list-view/expandable/layout-3/expandable-layout-3';
import {GoogleCardLayout1} from '../components/list-view/google-card/layout-1/google-card-layout-1';
import {GoogleCardLayout2} from '../components/list-view/google-card/layout-2/google-card-layout-2';
import {GoogleCardLayout3} from '../components/list-view/google-card/layout-3/google-card-layout-3';
import {SwipeToDismissLayout1} from '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1';
import {SwipeToDismissLayout2} from '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2';
import {SwipeToDismissLayout3} from '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3';
import {ParallaxLayout1} from '../components/parallax/layout-1/parallax-layout-1';
import {ParallaxLayout2} from '../components/parallax/layout-2/parallax-layout-2';
import {ParallaxLayout3} from '../components/parallax/layout-3/parallax-layout-3';
import {ParallaxLayout4} from '../components/parallax/layout-4/parallax-layout-4';
import {ElasticHeader} from '../components/parallax/elastic-header';

import {FullScreenGallery} from '../components/full-screen-gallery/full-screen-gallery';
import {ImageGalleryLayout1} from '../components/image-gallery/layout-1/image-gallery-layout-1';
import {ImageGalleryLayout2} from '../components/image-gallery/layout-2/image-gallery-layout-2';
import {ImageGalleryLayout3} from '../components/image-gallery/layout-3/image-gallery-layout-3';
import {SubImageGalleryLayout1} from '../components/sub-image-gallery/layout-1/sub-image-gallery-layout-1';
import {SubImageGalleryLayout3} from '../components/sub-image-gallery/layout-3/sub-image-gallery-layout-3';

import {MapsLayout1} from '../components/maps/layout-1/maps-layout-1';
import {MapsLayout2} from '../components/maps/layout-2/maps-layout-2';
import {MapsLayout3} from '../components/maps/layout-3/maps-layout-3';

import {QRcodeLayout1} from '../components/qrcode/layout-1/qrcode-layout-1';
import { AgmCoreModule } from '@agm/core';
// import { AgmCoreModule } from 'angular2-google-maps/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { AuthProvider } from '../providers/auth/auth';
import { ServiceSettingProvider } from '../providers/service-setting/service-setting';
import { IonicStorageModule } from '@ionic/storage';
import { PexelFrameworkProvider } from '../providers/pexel-framework/pexel-framework';
import { OrgTypeComponant } from '../components/OrgTypeComponant/layout-1/OrgTypeComponant';
import { OrginizeProvider } from '../providers/orginize/orginize';
import { OrgListComponant } from '../components/OrgTypeComponant/layout-2/OrgListComponant';
import { OrgCommentsPage } from '../pages/org-comments/org-comments';
import { ImgSlidersPage } from '../pages/img-sliders/img-sliders';
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    ElasticHeader,
    //pages
SelectLangPage,
   ArloginPage,
    ArhomePage,
ArregisterPage,
ArfavoritePage,
ArMypagePage,
ArAboutusPage,
ArAlarmsPage,
HomeDetailsPage,
HomeDetails2Page,
HomeProfilePage,
RegisterHomePage,
RegiterOrgnizationPage,
Layout0Component,

    //nd pages
    MyApp,
    Spinner, MapsLayout1, MapsLayout2, MapsLayout3,
    SplashScreenLayout1, SplashScreenLayout2, SplashScreenLayout3,
    SearchBarLayout1, SearchBarLayout2, SearchBarLayout3,
    CheckBoxLayout1, CheckBoxLayout2, CheckBoxLayout3,
    WizardLayout1, WizardLayout2, WizardLayout3,
    TabsLayout1, TabsLayout2, TabsLayout3,
    QRcodeLayout1,
    LoginLayout1, LoginLayout2, RegisterLayout1, RegisterLayout2,
    AppearanceAnimationLayout1, AppearanceAnimationLayout2,
    AppearanceAnimationLayout3, AppearanceAnimationLayout4, AppearanceAnimationLayout5,
    DragAndDropLayout1, DragAndDropLayout2, DragAndDropLayout3,
    ExpandableLayout1, ExpandableLayout2, ExpandableLayout3,
    GoogleCardLayout1, GoogleCardLayout2, GoogleCardLayout3,
    SwipeToDismissLayout1, SwipeToDismissLayout2, SwipeToDismissLayout3,
    ParallaxLayout1, ParallaxLayout2, ParallaxLayout3, ParallaxLayout4,
    SubImageGalleryLayout1, SubImageGalleryLayout3,
    OrgTypeComponant,
    OrgListComponant,
    OrgCommentsPage,
    ImgSlidersPage,
    FullScreenGallery, ImageGalleryLayout1, ImageGalleryLayout2, ImageGalleryLayout3
    ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['sqlite', 'websql', 'indexeddb']
      })

,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),

    [AgmCoreModule.forRoot({
      apiKey: 'GOOGLE MAPS KEY'
    })] ,
    IonicModule.forRoot(MyApp),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //add pages
       SelectLangPage,
       ArloginPage,
       ArhomePage,
       ArregisterPage,
       ArfavoritePage,
ArMypagePage,
ArAboutusPage,
ArAlarmsPage,
HomeDetailsPage,
HomeDetails2Page,
HomeProfilePage,
RegisterHomePage,
RegiterOrgnizationPage,
    //end pages
    Spinner, MapsLayout1, MapsLayout2, MapsLayout3,
    SplashScreenLayout1, SplashScreenLayout2, SplashScreenLayout3,
    SearchBarLayout1, SearchBarLayout2, SearchBarLayout3,
    CheckBoxLayout1, CheckBoxLayout2, CheckBoxLayout3,
    WizardLayout1, WizardLayout2, WizardLayout3,
    TabsLayout1, TabsLayout2, TabsLayout3,
    QRcodeLayout1,
    OrgTypeComponant,
    OrgListComponant,
    OrgCommentsPage,
    ImgSlidersPage,
    LoginLayout1, LoginLayout2, RegisterLayout1, RegisterLayout2,
    AppearanceAnimationLayout1, AppearanceAnimationLayout2,
    AppearanceAnimationLayout3, AppearanceAnimationLayout4, AppearanceAnimationLayout5,
    DragAndDropLayout1, DragAndDropLayout2, DragAndDropLayout3,
    ExpandableLayout1, ExpandableLayout2, ExpandableLayout3,
    GoogleCardLayout1, GoogleCardLayout2, SwipeToDismissLayout1, SwipeToDismissLayout2,
    ParallaxLayout1, ParallaxLayout2, ParallaxLayout3, ParallaxLayout4,
    SubImageGalleryLayout1, SubImageGalleryLayout3,
    FullScreenGallery, ImageGalleryLayout1, ImageGalleryLayout2, ImageGalleryLayout3
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    ElasticHeader,
    TranslateModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthProvider,
      InAppBrowser,
      CallNumber,
    ServiceSettingProvider,
    PexelFrameworkProvider,
    OrginizeProvider]
})
export class AppModule {
}
