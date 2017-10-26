import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomeProfilePage } from './home-profile';

@NgModule({
  declarations: [
    HomeProfilePage,
  ],
  imports: [
    //IonicModule.forChild(HomeProfilePage),
  ],
  exports: [
    HomeProfilePage
  ]
})
export class HomeProfilePageModule {}
