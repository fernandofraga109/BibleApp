import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BookPage } from '../pages/book/book';
import { VersePage } from '../pages/verse/verse';
import { PopoverPage } from '../pages/popover/popover';

@NgModule({
  declarations: [
    MyApp,
    PopoverPage,
    BookPage,
    VersePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    BookPage,
    VersePage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
