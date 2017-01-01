import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SocialSharing } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import 'rxjs/Rx';

@Injectable()
export class bookmarkService {
  storage: any;
  savedPostsJSON: any;

  constructor (storage: Storage, public toastCtrl: ToastController) {
    this.storage = storage;
  }

  ngOnInit() {
    this.savedPostsJSON = [];
  }

  savePost(post) {
    var postID = post.id.toString();
    this.storage.set(postID, post);
    const toast = this.toastCtrl.create({
      message: 'Post successfully bookmarked!',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  savePostByJSON(post) {
    var postID = post.objectID;
    this.storage.set(postID, post);
    const toast = this.toastCtrl.create({
      message: 'Post successfully bookmarked!',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  getSavedPosts() {
    this.savedPostsJSON = [];
    this.storage.forEach(val => {
      this.savedPostsJSON.push(val);
    });
    console.log(this.savedPostsJSON);
    return this.savedPostsJSON;
  }

  clearSavedPosts() {
    this.storage.clear();
  }

}
