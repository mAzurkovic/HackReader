import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class About {
  constructor(public navCtrl: NavController, private hnService:hnService) {

  }
  ngOnInit() {
  }
}
