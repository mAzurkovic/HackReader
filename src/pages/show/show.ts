import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-show',
  templateUrl: 'show.html'
})

export class Show {
  items: any;

  constructor(public navCtrl: NavController, private hnService:hnService) {

  }
  ngOnInit() {
    this.getPosts(2);
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
