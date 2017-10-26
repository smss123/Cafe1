import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ArAboutusPage } from './ar-aboutus';

@NgModule({
  declarations: [
    ArAboutusPage,
  ],
  imports: [
    //IonicModule.forChild(ArAboutusPage),
  ],
  exports: [
    ArAboutusPage
  ]
})
export class ArAboutusPageModule {}
