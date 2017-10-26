import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ArMypagePage } from './ar-mypage';

@NgModule({
  declarations: [
    ArMypagePage,
  ],
  imports: [
    //IonicModule.forChild(ArMypagePage),
  ],
  exports: [
    ArMypagePage
  ]
})
export class ArMypagePageModule {}
