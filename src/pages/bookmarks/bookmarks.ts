import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { bookmarkService } from '../../services/bookmark.service';
import { ViewPage } from '../view/view';


@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html'
})

export class Bookmarks {
  items: any;

  constructor(public navCtrl: NavController, private hnService:hnService, private bookmarkService:bookmarkService) {

  }

  ngOnInit() {
    this.items = this.bookmarkService.getSavedPosts();
  }

  getSavedPosts() {

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
