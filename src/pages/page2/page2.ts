import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { ViewPage } from '../view/view';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

export class Page2 {
  items: any;

  constructor(public navCtrl: NavController, private hnService:hnService) {

  }
  ngOnInit() {
    this.getPosts(1);
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
