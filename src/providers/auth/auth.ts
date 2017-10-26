import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { ServiceSettingProvider } from "../service-setting/service-setting";
import { Storage } from '@ionic/storage';


import { Http, Response, Headers, RequestOptions, URLSearchParams }
from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthProvider {

  constructor(public http: Http,private setting :ServiceSettingProvider) {
    console.log('Hello AuthProvider Provider');
  }
public UserLogin(UserName,password){

 let Url = this.setting.BaseUrl+"/Auth/UserLogin?UserName="+UserName+"&password="+password;
return this.setting.preperRequest(Url);
}
// string Name,
// string Email,
// string Password,
// int CityId
public RegisterUser(Name,Email,Password,CityId){
  let Url = this.setting.BaseUrl+"Auth/RegisterUser?Name="+Name+
  "&Email="+Email+"&Password="+Password+"&CityId="+CityId;
  return this.setting.preperRequest(Url);
}
}
