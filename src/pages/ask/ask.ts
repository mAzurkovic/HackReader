import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html'
})

export class Ask {
  items: any;

  constructor(public navCtrl: NavController, private hnService:hnService) {

  }
  ngOnInit() {
    this.getPosts(3);
  }

  refresh() {
    this.getPosts(3);
    console.log("@refresh");
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
