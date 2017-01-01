import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SocialSharing } from 'ionic-native';
import 'rxjs/Rx';

@Injectable()
export class hnService {
  http:any;
  baseCommentUrl: string;

  constructor (http:Http) {
    this.http = http;
    this.baseCommentUrl = 'https://hn.algolia.com/api/v1/search?tags=comment,story_';
  }
  getPosts(orderBy) {
    if (orderBy == 'new') {
      return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story').map(res => res.json());
    } else if (orderBy == 1) {
      return this.http.get('https://hn.algolia.com/api/v1/search?tags=front_page').map(res => res.json());
    } else if (orderBy == 2) {
      return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=show_hn').map(res => res.json());
    } else if (orderBy == 3) {
      return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=ask_hn').map(res => res.json());
    } else if (orderBy == 4) {
      return this.http.get('https://node-hnapi.herokuapp.com/news?page=1').map(res => res.json());
    }
  }

  getItem(postID) {
    return this.http.get('http://node-hnapi.herokuapp.com/item/' + postID).map(res => res.json());
  }

  getUser(userName) {
    return this.http.get('https://hacker-news.firebaseio.com/v0/user/' + userName + '.json').map(res => res.json());
  }

  getComments(postID) {
    return this.http.get('http://node-hnapi.herokuapp.com/item/' + postID).map(res => res.json());
  }

  getComment(commentID) {
    return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + commentID + '.json').map(res => res.json());
  }

  share(id) {
    var json = this.http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json').map(res => res.json());
    SocialSharing.share(json.text, ('Comment by ' + json.by), null, null);
  }

  // Searches API for STORIES ONLY
  query(query) {
    console.log('http://hn.algolia.com/api/v1/search?tags=story&query=' + query);
    return this.http.get('http://hn.algolia.com/api/v1/search?tags=story&query=' + query).map(res => res.json());
  }

  extractDomain(url) {
      var domain;
      //find & remove protocol (http, ftp, etc.) and get domain
      if (url.indexOf("://") > -1) {
          domain = url.split('/')[2];
      }
      else {
          domain = url.split('/')[0];
      }
      //find & remove port number
      domain = domain.split(':')[0];
      console.log(domain);
      return domain;
  }

}
