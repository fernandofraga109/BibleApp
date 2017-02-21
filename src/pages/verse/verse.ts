import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';
import { PopoverPage } from '../popover/popover';

@Component( {
    selector: 'page-verse',
    templateUrl: 'verse.html'
})
export class VersePage {

    book: any;
    verse: any;
    numVerse: any;
    arrayVerse = [];

    @ViewChild( 'popoverContent', { read: ElementRef }) content: ElementRef;
    @ViewChild( 'popoverText', { read: ElementRef }) text: ElementRef;

    constructor( public navCtrl: NavController,
        public navParams: NavParams,
        private popoverCtrl: PopoverController ) {

        this.book = navParams.get( "book" );
        this.verse = navParams.get( "verse" );
        this.numVerse = Object.getOwnPropertyNames( this.verse );
        console.log( this.book, "BOOK ON VERSE" );
        console.log( this.verse, "VERSE ON VERSE" );

    }

    ionViewDidLoad() {
        
        this.loadVerse(); 
    }
    
    loadVerse() { 
        this.arrayVerse = [];
        var nullArray = [];
        for ( let key in this.verse[this.numVerse] ) {
            var item = {};
            item[key] = this.verse[this.numVerse][key];
            this.arrayVerse.push( item );

        }
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
        console.log(this.book, "before!!!");
        
        if (this.numVerse > 1 ) {
            this.numVerse = this.numVerse -1;
            this.verse = this.book.chapters[this.numVerse-1];
            this.loadVerse();
        }
    }
    
    nextVerse() {
        console.log(this.book, "NEXT!!!");
        
        if (this.numVerse != this.lastVerse()) {
            this.numVerse = this.numVerse+1;
            this.verse = this.book.chapters[this.numVerse+1];
            this.loadVerse();
        }
    }
    
    lastVerse() {
        return this.book.chapters.length;
    }

}
