import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ArfavoritePage } from './arfavorite';

@NgModule({
  declarations: [
    ArfavoritePage,
  ],
  imports: [
    //IonicModule.forChild(ArfavoritePage),
  ],
  exports: [
    ArfavoritePage
  ]
})
export class ArfavoritePageModule {}
