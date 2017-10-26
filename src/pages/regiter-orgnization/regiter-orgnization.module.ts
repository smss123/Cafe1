import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RegiterOrgnizationPage } from './regiter-orgnization';

@NgModule({
  declarations: [
    RegiterOrgnizationPage,
  ],
  imports: [
    //IonicModule.forChild(RegiterOrgnizationPage),
  ],
  exports: [
    RegiterOrgnizationPage
  ]
})
export class RegiterOrgnizationPageModule {}
