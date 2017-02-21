import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BookPage } from '../pages/book/book';
import { VersePage } from '../pages/verse/verse';
import { PopoverPage } from '../pages/popover/popover';
import { BookSearchPage } from '../pages/book-search/book-search';

@NgModule({
  declarations: [
    MyApp,
    PopoverPage,
    BookPage,
    VersePage,
    BookSearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
        backButtonText: 'Voltar'
      }, {}
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    BookPage,
    VersePage,
    BookSearchPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
