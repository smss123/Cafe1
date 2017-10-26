import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ImgSlidersPage } from './img-sliders';

@NgModule({
  declarations: [
    ImgSlidersPage,
  ],
  imports: [
    //IonicModule.forChild(ImgSlidersPage),
  ],
  exports: [
    ImgSlidersPage
  ]
})
export class ImgSlidersPageModule {}
