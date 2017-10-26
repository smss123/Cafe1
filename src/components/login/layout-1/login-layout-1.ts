import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'login-layout-1',
    templateUrl: 'login.html'
})

export class LoginLayout1 {
  @Input() data: any;
  @Input() events: any;

  public username: string;
  public password: string;

  constructor(private translate: TranslateService) {
   
  }
  ionViewDidLoad() {
    this.translate.get('Login').subscribe(
        value => {
           this.data.login = value;
        }
      )
    console.log('ionViewDidLoad SelectLangPage');
  }

  onEvent = (event: string): void => {
    if (this.events[event]) {
        this.events[event]({
            'username' : this.username,
            'password' : this.password
        });
    }
  }
}
