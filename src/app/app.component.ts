import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, NavController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//pages
import { BookPage } from '../pages/book/book';
import { BookSearchPage } from '../pages/book-search/book-search';
import { VersePage } from '../pages/verse/verse';
import { VersionsPage } from '../pages/versions/versions';
import { PopoverPage } from '../pages/popover/popover';
import { BookVersePage } from '../pages/book-verse/book-verse';
import { HomePage } from '../pages/home/home';
import { PromissesPage } from '../pages/promisses/promisses';

//prividers
import { RepositoryBookService } from '../providers/repository-book-service';


@Component( {
    templateUrl: 'app.html',
    providers: [RepositoryBookService]
})
export class MyApp {
    @ViewChild( Nav ) nav: Nav;

    pages: Array<{ component: any, title: string, icon: string }>;
    rootPage: any = HomePage;
    @ViewChild( 'content' ) navCtrl: NavController;

    constructor( public platform: Platform, private menuCtrl: MenuController ) {
        this.initializeApp();
        
        this.pages = [
                      { component: BookSearchPage, title: 'Bília', icon: 'bookmarks' },
                      { component: VersionsPage, title: 'Verções da Bíblia', icon: 'browsers' },
                      { component: PromissesPage, title: 'Promessas Bíblicas', icon: 'copy' }
                  ];
        
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
          /*  StatusBar.styleDefault();
            Splashscreen.hide();*/
        });
    }

    openPage( page: any ): void {
        console.log( 'Opening ' + page.title );
        this.navCtrl.push( page.component );
        //this.rootPage = page.component;
        this.menuCtrl.close();
    }

    openBook( book ) {
        let page: any = BookPage;
        this.navCtrl.push( page.component );
        this.menuCtrl.close();
        
        console.log( book, "ABRINDO LIVRO" );
    }

}
