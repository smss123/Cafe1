import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ArhomePage } from './arhome';

@NgModule({
  declarations: [
    ArhomePage,
  ],
  imports: [
    //IonicModule.forChild(ArhomePage),
  ],
  exports: [
    ArhomePage
  ]
})
export class ArhomePageModule {}
