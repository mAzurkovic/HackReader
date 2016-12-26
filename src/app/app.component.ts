import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { hnService } from '../services/hn.service';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Show } from '../pages/show/show';
import { Ask } from '../pages/ask/ask';

@Component({
  templateUrl: 'app.html',
  providers: [hnService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page2;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "New", component: Page1, icon: 'flame' },
      { title: 'Front Page', component: Page2, icon: 'flame' },
      { title: 'Show', component: Show , icon: 'flame'},
      { title: 'Ask', component: Ask, icon: 'flame' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
