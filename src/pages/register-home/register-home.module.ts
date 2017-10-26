import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RegisterHomePage } from './register-home';

@NgModule({
  declarations: [
    RegisterHomePage,
  ],
  imports: [
   // IonicModule.forChild(RegisterHomePage),
  ],
  exports: [
    RegisterHomePage
  ]
})
export class RegisterHomePageModule {}
