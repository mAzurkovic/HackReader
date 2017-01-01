import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { bookmarkService } from '../../services/bookmark.service';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1 {
  items: any;
  constructor(public navCtrl: NavController, private hnService:hnService, private bookmarkService:bookmarkService) {

  }

  ngOnInit() {
    this.getPosts('new');
  }

  refresh(refresher) {
    this.ngOnInit();
    console.log("@refresh");
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }


  getPosts(orderBy) {
    this.hnService.getPosts(orderBy).subscribe(response => {
      this.items = response.hits;
    });
  }

  viewPost(item) {
    this.navCtrl.push(ViewPage, {
      item:item
    });
  }

  viewLink(object) {
    if (object.url) {
      console.log(object.url);
      window.open(object.url, '_blank');
    }
  }

}
