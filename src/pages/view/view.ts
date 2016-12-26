import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { AlertController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

@Pipe({name: 'escapeHtml', pure: false})
class EscapeHtmlPipe implements PipeTransform {
   transform(value: any, args: any[] = []) {
        // Naive detection!
        if(value.indexOf('<p>') != -1) {
          return value.replace('<p>', '').replace('<\/p>', '');
        }
   }
}

@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
  styleUrls: ['/view.scss'],
})
export class ViewPage {
  item: any;
  commentParent: any;
  values: any;

  constructor(public popoverCtrl: PopoverController, public alertCtrl: AlertController, public navCtrl: NavController, private hnService:hnService, public params:NavParams) {
    this.item = params.get('item');
    this.values = params.get('item');
  }

  ngOnInit() {
    //this.getComments((this.item.objectID).toString());
    if (this.item.objectID) {
      // Check to see if using the Unofficia node HN API
      this.getItemValues(this.item.objectID);
    } else {
      // Else using the search API
      this.getItemValues((this.item.id).toString());

    }

  }

  // Call service and get additional post info thru node api
  getItemValues(itemID) {
    this.hnService.getItem(itemID).subscribe(response => {
      console.log(response);
      this.values = response;
    });
  }

  getComments(postID) {
    this.hnService.getComments(postID).subscribe(response => {
      console.log(response.comments);
      this.commentParent = response.comments;
    })
  }

  openLink() {
    window.open((this.item.url).toString(), '_blank');
  }

  showMore() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
