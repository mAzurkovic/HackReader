import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Show } from '../pages/show/show';
import { Ask } from '../pages/ask/ask';
import { ViewPage } from '../pages/view/view';
import { Search } from '../pages/search/search';
import { Bookmarks } from '../pages/bookmarks/bookmarks';
import { About } from '../pages/about/about';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Show,
    Ask,
    ViewPage,
    Search,
    Bookmarks,
    About
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Show,
    Ask,
    ViewPage,
    Search,
    Bookmarks,
    About
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
