import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { HomeDetailsPage } from './home-details';

@NgModule({
  declarations: [
    HomeDetailsPage,
  ],
  imports: [
    //IonicModule.forChild(HomeDetailsPage),
  ],
  exports: [
    HomeDetailsPage
  ]
})
export class HomeDetailsPageModule {}
