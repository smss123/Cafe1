import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the ServiceSettingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceSettingProvider {
public BaseUrl = 'http://tazzinac.com/';
  constructor(private storage: Storage,public http: Http) {
    console.log('Hello ServiceSettingProvider Provider');
  }
public preperRequest(url){
  return new Promise(reslove => {

              this.http.get(url)
                .subscribe(res => reslove(res.json()));
            });
}

public LoadCity(){
  let url =this.BaseUrl+"api/Cities/";
  return this.preperRequest(url);
}
public LoadOrgTypes(){
  let url =this.BaseUrl+"api/OrgTypes/";
  return this.preperRequest(url);
}
public StoreItem(key ,item){
  // set a key/value
  this.storage.set(key, item);

}
public GetUserInfo() {
    return this.storage.get("UserInfo");
}
}
