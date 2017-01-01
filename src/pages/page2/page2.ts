import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { bookmarkService } from '../../services/bookmark.service';
import { ViewPage } from '../view/view';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

export class Page2 {
  items: any;
  domain: any;

  constructor(public navCtrl: NavController, private hnService:hnService, private bookmarkService:bookmarkService) {

  }
  ngOnInit() {
    this.getPosts(4);
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
      // this.items = response.hits;
      this.items = response;
    });
  }

  viewLink(object) {
    if (object.url) {
      console.log(object.url);
      window.open(object.url, '_blank');
    }
  }

  viewPost(item) {
    this.navCtrl.push(ViewPage, {
      item:item
    });
  }
}
