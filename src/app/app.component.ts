import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//pages
import { BookPage } from '../pages/book/book';
import { BookSearchPage } from '../pages/book-search/book-search';
import { VersePage } from '../pages/verse/verse';
import { PopoverPage } from '../pages/popover/popover';

//prividers
import { RepositoryBookService } from '../providers/repository-book-service';


@Component( {
    templateUrl: 'app.html',
    providers: [RepositoryBookService]
})
export class MyApp {
    @ViewChild( Nav ) nav: Nav;

    rootPage: any = BookSearchPage;

    pages: Array<{ title: string, component: any }>;

    constructor( public platform: Platform ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage( page ) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot( page.component );
    }

    openBook( book ) {
        let page: any = BookPage;
        this.nav.setRoot( page, book );
        console.log( book, "ABRINDO LIVRO" );
    }

}
