import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {
  items: any;
  isSearched: boolean;
  constructor(public navCtrl: NavController, private hnService:hnService) {

  }

  ngOnInit() {
    this.isSearched = false;
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

  query(query: any) {
    this.hnService.query(query.target.value).subscribe(response => {
      console.log(response.hits);
      this.items = response.hits;
    });
    this.isSearched = true;
  }

}
