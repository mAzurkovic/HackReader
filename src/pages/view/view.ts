import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {
  item: any;
  commentParent: any;
  values: any;

  constructor(public navCtrl: NavController, private hnService:hnService, public params:NavParams) {
    this.item = params.get('item');
    this.values = params.get('item');
  }

  ngOnInit() {
    //this.getComments((this.item.objectID).toString());
    this.getItemValues((this.item.objectID).toString());
  }

  // Call service and get additional post info thru node api
  getItemValues(itemID) {
    this.hnService.getItem(itemID).subscribe(response => {
      console.log(response);
      this.values = response;
    });
  }

  getComments(postID) {
    this.hnService.getComments(postID).subscribe(response => {
      console.log(response.comments);
      this.commentParent = response.comments;
    })
  }

  openLink() {
    window.open((this.item.url).toString(), '_blank');
  }

}
