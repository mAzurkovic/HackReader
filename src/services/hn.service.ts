import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class hnService {
  http:any;
  baseUrl: string;

  constructor (http:Http) {
    this.http = http;
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/';
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
    }
  }
}
