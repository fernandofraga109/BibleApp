import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BookPage } from '../pages/book/book';
import { VersePage } from '../pages/verse/verse';
import { PopoverPage } from '../pages/popover/popover';
import { BookSearchPage } from '../pages/book-search/book-search';
import { VersionsPage } from '../pages/versions/versions';
import { BookVersePage } from '../pages/book-verse/book-verse';

@NgModule({
  declarations: [
    MyApp,
    PopoverPage,
    BookPage,
    VersePage,
    BookSearchPage,
    VersionsPage,
    BookVersePage
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
    BookVersePage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
