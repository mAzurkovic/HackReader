import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';


@Component({
  selector: 'page-show',
  templateUrl: 'show.html'
})

export class Show {
  items: any;

  constructor(private hnService:hnService) {

  }
  ngOnInit() {
    this.getPosts(2);
  }

  getPosts(orderBy) {
    this.hnService.getPosts(orderBy).subscribe(response => {
      this.items = response.hits;
    });
  }
}
