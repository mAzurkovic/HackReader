import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { hnService } from '../../services/hn.service';

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {

  constructor(public navCtrl: NavController, private hnService:hnService) {

  }

}
