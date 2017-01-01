import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { bookmarkService } from '../../services/bookmark.service';
import { ToastController } from 'ionic-angular';
import { ViewPage } from '../view/view';


@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html'
})

export class Bookmarks {
  items: any;

  constructor(public toastCtrl: ToastController,public navCtrl: NavController, private hnService:hnService, private bookmarkService:bookmarkService) {

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

  removeBM(item) {
    // case for HN Angolia API
    if (item.objectID) {
      this.bookmarkService.storage.remove(item.objectID.toString());
    } else {
      this.bookmarkService.storage.remove(item.id.toString());
    }
    const toast = this.toastCtrl.create({
      message: 'Bookmark removed',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
    this.ngOnInit();
  }


}
