import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BookPage } from '../pages/book/book';
import { VersePage } from '../pages/verse/verse';
import { PopoverPage } from '../pages/popover/popover';
import { BookSearchPage } from '../pages/book-search/book-search';
import { VersionsPage } from '../pages/versions/versions';
import { BookVersePage } from '../pages/book-verse/book-verse';
import { HomePage } from '../pages/home/home';
import { PromissesPage } from '../pages/promisses/promisses';

@NgModule({
  declarations: [
    MyApp,
    PopoverPage,
    BookPage,
    VersePage,
    BookSearchPage,
    VersionsPage,
    BookVersePage,
    HomePage,
    PromissesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
        backButtonText: '',
        iconMode: 'ios',
        modalEnter: 'modal-slide-in',
        modalLeave: 'modal-slide-out',
        tabsPlacement: 'bottom',
        pageTransition: 'ios'
      }, {}
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    BookPage,
    VersePage,
    BookSearchPage,
    VersionsPage,
    BookVersePage,
    HomePage,
    PromissesPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
