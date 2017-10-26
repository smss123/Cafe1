import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { ArregisterPage } from './arregister';

@NgModule({
  declarations: [
    ArregisterPage,
  ],
  imports: [
  //  IonicModule.forChild(ArregisterPage),
  ],
  exports: [
    ArregisterPage
  ]
})
export class ArregisterPageModule {}
