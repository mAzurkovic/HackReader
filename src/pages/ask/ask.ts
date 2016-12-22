import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';


@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html'
})

export class Ask {
  items: any;

  constructor(private hnService:hnService) {

  }
  ngOnInit() {
    this.getPosts(3);
  }

  getPosts(orderBy) {
    this.hnService.getPosts(orderBy).subscribe(response => {
      this.items = response.hits;
    });
  }
}
