import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomeDetails2Page } from './home-details2';

@NgModule({
  declarations: [
    HomeDetails2Page,
  ],
  imports: [
    //IonicModule.forChild(HomeDetails2Page),
  ],
  exports: [
    HomeDetails2Page
  ]
})
export class HomeDetails2PageModule {}
