import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ArAlarmsPage } from './ar-alarms';

@NgModule({
  declarations: [
    ArAlarmsPage,
  ],
  imports: [
   // IonicModule.forChild(ArAlarmsPage),
  ],
  exports: [
    ArAlarmsPage
  ]
})
export class ArAlarmsPageModule {}
