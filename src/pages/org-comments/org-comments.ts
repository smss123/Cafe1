import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrginizeProvider} from '../../providers/orginize/orginize';

@IonicPage()
@Component({
  selector: 'org-comments',
  templateUrl: 'org-comments.html',
})
export class OrgCommentsPage {
  @Input() Id:any;
 ListOfComments:any;
  constructor(private serv:OrginizeProvider,public navCtrl: NavController, public navParams: NavParams) {




  }

  ngOnInit(){
    console.log("hello from the comment componant:");
    console.log(this.Id);
    this.serv.LoadOrgComments(this.Id).then(data=>{
      let d = data;
      console.log("load comments :",d);
      this.ListOfComments = d;
    });
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad OrgCommentsPage');
  }

}
