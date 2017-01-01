import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { hnService } from '../../services/hn.service';
import { bookmarkService } from '../../services/bookmark.service';
import { AlertController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';
import { ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Pipe({ name: 'escapeHtml', pure: false })
class EscapeHtmlPipe implements PipeTransform {
  transform(value: any, args: any[] = []) {
    // Naive detection!
    if (value.indexOf('<p>') != -1) {
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

  constructor(public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController, public popoverCtrl: PopoverController, public alertCtrl: AlertController, public navCtrl: NavController, private hnService: hnService, private bookmarkService: bookmarkService, public params: NavParams) {
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

  refresh(refresher) {
    this.ngOnInit();
    console.log("@refresh");
    setTimeout(() => {
      refresher.complete();
    }, 2000);
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

  openHN() {
    window.open(('https://news.ycombinator.com/item?id=' + this.values.id), '_system', 'location=yes');
  }

  showMore() {
    this.hnService.getUser((this.values.user).toString()).subscribe(response => {
      let alert = this.alertCtrl.create({
        title: 'About User',
        subTitle: '<ul><li> Name: <span class="user-name">' + response.id + '</span></li>'
        + '<li> Posts: ' + (response.submitted.length).toString() + '</li>'
        + '<li> Karma: ' + (response.karma).toString() + '</li></ul>'
        + '<hr>' + (response.about),
        buttons: ['Done']
      });
      alert.present();
    });
  }


  showUser(userName) {
    this.hnService.getUser((userName).toString()).subscribe(response => {
      let alert = this.alertCtrl.create({
        title: 'About User',
        subTitle: '<ul><li> Name: <span class="user-name">' + response.id + '</span></li>'
        + '<li> Posts: ' + (response.submitted.length).toString() + '</li>'
        + '<li> Karma: ' + (response.karma).toString() + '</li></ul>'
        + '<hr>' + (response.about),
        buttons: ['Done']
      });
      alert.present();
    });
  }

  share() {
    // share(message, subject, file, url)
    SocialSharing.share(this.values.content, 'HackReader Story', null, this.values.url);
  }

  showActionSheet(userName, commentID) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'About Comment',
      buttons: [
        {
          text: 'Commenter info',
          handler: () => {
            this.hnService.getUser((userName).toString()).subscribe(response => {
              let alert = this.alertCtrl.create({
                title: 'About User',
                subTitle: '<ul><li> Name: <span class="user-name">' + response.id + '</span></li>'
                + '<li> Posts: ' + (response.submitted.length).toString() + '</li>'
                + '<li> Karma: ' + (response.karma).toString() + '</li></ul>'
                + '<hr>' + (response.about),
                buttons: ['Done']
              });
              alert.present();
            });
          }
        }, {
          text: 'Share comment',
          handler: () => {
            this.hnService.share(commentID.toString());
            /*this.hnService.getComment((commentID).toString()).subscribe(response => {
              SocialSharing.share(response.text, ('Comment by ' + response.by), null, null);
            });*/
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  bookmark(post) {
    this.bookmarkService.savePost(post);
  }

}
