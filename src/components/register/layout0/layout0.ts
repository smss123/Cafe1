import { Component, Input } from '@angular/core';

/**
 * Generated class for the Layout0Component component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'layout0',
  templateUrl: 'layout0.html'
})
export class Layout0Component {

  
  @Input() data: any;
  @Input() events: any;

  username: string;
  password: string;
  country: string;
  city: string;
  email: string;
  phone : string;
  location : string; 
  snapchat: string;
  websits : string;
  instgram : string;
  facebook : string;
  twitter : string;
  worktime : string;
  Image: string;
  description : string;
  other: string;

  constructor() { }

  onEvent = (event: string): void => {
      if (this.events[event]) {
          this.events[event]({
              'username': this.username,
              'password': this.password,
              //'country': this.country,
              'city': this.city,
              'email': this.email,
              'phone' : this.phone,
              'location' : this.location, 
              'snapchat': this.snapchat,
              'websits' : this.websits,
              'instgram' : this.instgram,
              'facebook' : this.facebook,
              'twitter' : this.twitter,
              'worktime' : this.worktime,
              'Image': this.Image,
              'description' : this.description,
              'other': this.other,
          });
      }
  }

}
