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
}
