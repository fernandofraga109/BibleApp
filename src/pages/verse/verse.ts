import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';
import { PopoverPage } from '../popover/popover';
import { RepositoryBookService } from '../../providers/repository-book-service';
import { VersionsPage } from '../versions/versions';
import { BookVersePage } from '../book-verse/book-verse';

@Component( {
    selector: 'page-verse',
    templateUrl: 'verse.html'
})
export class VersePage {

    book: any;
    verse: any;
    numVerse: any;
    arrayVerse = [];
    blibleVersion;

    @ViewChild( 'popoverContent', { read: ElementRef }) content: ElementRef;
    @ViewChild( 'popoverText', { read: ElementRef }) text: ElementRef;

    constructor( public navCtrl: NavController,
        public navParams: NavParams,
        private popoverCtrl: PopoverController,
        public repositoryBookService: RepositoryBookService) {

        this.book = navParams.get( "book" );
        this.verse = navParams.get( "verse" );
        this.numVerse = Object.getOwnPropertyNames( this.verse );
        console.log( this.book, "BOOK ON VERSE" );
        console.log( this.verse, "VERSE ON VERSE" );

    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad 1");
        this.loadVerse();
    }
    
    ionViewDidEnter() {
        console.log("ionViewDidEnter 2");
    }
    ionViewWillEnter() {
        console.log("ionViewWillEnter 3");
    }

    loadVerse() {
        this.arrayVerse = [];
        var nullArray = [];
        for ( let key in this.verse[this.numVerse] ) {
            var item = {};
            item[key] = this.verse[this.numVerse][key];
            this.arrayVerse.push( item );

        }
        this.blibleVersion = localStorage.getItem('bibleVersion');
    }
    
    getNameVersion() {
        return this.repositoryBookService.getNameVersion();
    }


    getArrayVerse() {
        return this.arrayVerse;
    }

    getNumerVersicle( row ) {
        let ret;
        if ( row != null ) {
            ret = Object.getOwnPropertyNames( row );
        }
        return ret;
    }

    getNameBook() {
        return this.book.book + " " + this.numVerse;
    }

    presentPopover( ev ) {

        let popover = this.popoverCtrl.create( PopoverPage, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        popover.present( {
            ev: ev
        });
    }

    privioustVerse() {
        if ( this.numVerse > 1 ) {
            this.numVerse = this.numVerse - 1;
            this.verse = this.book.chapters[this.numVerse - 1];
            this.loadVerse();
        }
    }

    nextVerse() {
        if ( this.numVerse != this.lastVerse() ) {
            this.numVerse = this.numVerse++;
            this.verse = this.book.chapters[this.numVerse++];
            this.loadVerse();
        }
    }

    lastVerse() {
        return this.book.chapters.length;
    }
    
    changeVersion() {
        let page: any = VersionsPage;
        this.navCtrl.push( page );
    }
    
    openBookVerse() {
        let page: any = BookVersePage;
        this.navCtrl.push( page, this.book );
    }

}
