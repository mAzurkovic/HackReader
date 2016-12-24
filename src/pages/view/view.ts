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

  constructor(public navCtrl: NavController, private hnService:hnService, public params:NavParams) {
    this.item = params.get('item');
  }

  ngOnInit() {
    this.getComments((this.item.objectID).toString());
  }

  getComments(postID) {
    this.hnService.getComments(postID).subscribe(response => {
      this.commentParent = response.hits;
    })
  }

  openLink() {
    window.open((this.item.url).toString(), '_blank');
  }

}
