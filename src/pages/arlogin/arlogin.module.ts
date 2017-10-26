import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ArloginPage } from './arlogin';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    ArloginPage,
  ],
  imports: [
    TranslateModule.forChild()
  ],
  exports: [
    ArloginPage
  ]
})
export class ArloginPageModule {}
