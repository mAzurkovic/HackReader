import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

export class Page2 {
  items: any;

  constructor(private hnService:hnService) {

  }
  ngOnInit() {
    this.getPosts(1);
  }

  getPosts(orderBy) {
    this.hnService.getPosts(orderBy).subscribe(response => {
      this.items = response.hits;
    });
  }
}
