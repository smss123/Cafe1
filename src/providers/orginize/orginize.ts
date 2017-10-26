import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ServiceSettingProvider} from '../service-setting/service-setting';

@Injectable()
export class OrginizeProvider {


  constructor(public setting:ServiceSettingProvider,public http: Http) {
    console.log('Hello OrginizeProvider Provider');
    }
  public AddToFav(OrgId, UserId) {
      let url = this.setting.BaseUrl + "/api/Orginaizes/AddToFavx/?orgid=" + OrgId + "&userid=" + UserId;
     console.log(url);
      return this.setting.preperRequest(url);
  }

  public LoadOrgComments(OrgId) {
    let url = this.setting.BaseUrl + "/api/Orginaizes/GetCommentsX?orgId=" + OrgId;
    return this.setting.preperRequest(url);
}

public LoadOrgSlideImage(OrgId) {
  let url = this.setting.BaseUrl + "/api/Orginaizes/LoadImgX?OrgId=" + OrgId;
  return this.setting.preperRequest(url);
}

  public LoadOrg(cityId,TypeId){
    let url = this.setting.BaseUrl+"api/Orginaizes/GetOrginaizesByType?TypeId="+TypeId+
    "&CityId="+cityId;
    return this.setting.preperRequest(url);
  }
  public LoadWorkTime(OrgId){
    let url = this.setting.BaseUrl+"api/Orginaizes/GetWorkTimesX?OrgId="+OrgId ;
    return this.setting.preperRequest(url);
  }
  public LoadService(OrgId) {
      let url = this.setting.BaseUrl + "api/Orginaizes/GetServicesX?OrgId=" + OrgId;
      return this.setting.preperRequest(url);
  }

}
