import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SocialSharing } from 'ionic-native';
import { Storage } from '@ionic/storage';
import 'rxjs/Rx';

@Injectable()
export class bookmarkService {
  storage: any;
  savedPostsJSON: any;

  constructor (storage: Storage) {
    this.storage = storage;
  }

  ngOnInit() {
    this.savedPostsJSON = [];
  }

  savePost(post) {
    var postID = post.id.toString();
    this.storage.set(postID, post);
  }

  getSavedPosts() {
    this.savedPostsJSON = [];
    this.storage.forEach(val => {
      this.savedPostsJSON.push(val);
    });
    console.log(this.savedPostsJSON);
    return this.savedPostsJSON;
  }

}
