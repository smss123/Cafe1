import { Component, Input } from '@angular/core';

@Component({
    selector: 'register-layout-1',
    templateUrl: 'register.html'
})

export class RegisterLayout1 {

    @Input() data: any;
    @Input() events: any;

    username: string;
    password: string;
    country: string;
    city: string;
    email: string;
    phone :string ;
    location : string; 
    snapshat:string ;
    websits : string;
    instgram :string ;
    facebook : string;
    twitter: string;
    worktime :string ;
    Image:string ;
    description :string ;
    other:string

    constructor() { 

    }

    onEvent = (event: string): void => {
        if (this.events[event]) {
            this.events[event]({
                'username': this.username,
                'password': this.password,
                'country': this.country,
                'city': this.city,
                'email': this.email,
                'phone' : this.phone,
                'location' : this.location,
                'snapshat': this.snapshat,
                'websits' : this.websits,
                'instgram' : this.instgram,
                'facebook' : this.facebook,
                'twitter' : this.twitter,
                'worktime' : this.worktime,
                'Image': this.Image,
                'description' : this.description,
                'other': this.other
            });
           
        }
    }
}
