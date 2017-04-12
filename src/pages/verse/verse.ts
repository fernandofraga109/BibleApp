import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { ViewChild, ElementRef , PipeTransform} from '@angular/core';
import { PopoverPage } from '../popover/popover';
import { RepositoryBookService } from '../../providers/repository-book-service';
import { VersionsPage } from '../versions/versions';
import { BookVersePage } from '../book-verse/book-verse';

@Component( {
    selector: 'page-verse',
    templateUrl: 'verse.html'
})
export class VersePage  implements PipeTransform {

    book: any;
    verse: any;
    numVerse: any;
    arrayVerse = [];
    indexBook: any;
    
    blibleVersion;

    @ViewChild( 'popoverContent', { read: ElementRef }) content: ElementRef;
    @ViewChild( 'popoverText', { read: ElementRef }) text: ElementRef;

    constructor( public navCtrl: NavController,
        public navParams: NavParams,
        private popoverCtrl: PopoverController,
        public repositoryBookService: RepositoryBookService) {

        this.verse = navParams.get( "verse" );
        this.indexBook = navParams.get( "indexBook" );
        this.book = this.repositoryBookService.getBooks()[this.indexBook];
        
        
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
        this.loadVerse();
    }
    ionViewWillEnter() {
        console.log("ionViewWillEnter 3");
    }
    
   
 
    loadVerse() {
        this.arrayVerse = [];
        let nullArray = [];
        let myMap = new Map();
        
        this.book = this.repositoryBookService.getBooks()[this.indexBook];
        this.verse = this.book.chapters[this.numVerse-1];
        
        
        
        for ( let key in this.verse[this.numVerse] ) {
            var item = {};
            item[key] = this.verse[this.numVerse][key];
            this.arrayVerse.push( item );

        }
        this.blibleVersion = localStorage.getItem('bibleVersion');
        
        
        if (this.blibleVersion =="am") {
            this.arrayVerse = this.transform(this.arrayVerse);
        }
        
        console.log(this.arrayVerse, "array verse");
        
        
    }

    getNameVersion() {
        return this.repositoryBookService.getNameVersion();
    }
    
    transform( array: Array<any> ): Array<string> {
        array.sort(( a: any, b: any ) => {
        
           let aC = Object.getOwnPropertyNames( a );
           let bC = Object.getOwnPropertyNames( b );
           
           
           let resA = aC[0].split("-");
           let resB = bC[0].split("-");
           
           let comparacaA = +resA[0];
           let comparacaB = +resB[0];
           
           if ( comparacaA < comparacaB ) {
                return -1;
            } else if ( comparacaA > comparacaB ) {
                return 1;
            } else {
                return 0;
            }
            
        });
        return array;
    }

    
    /*transform(value: any, args?: any[]): any[] {
            // create instance vars to store keys and final output
            let keyArr: any[] = Object.keys(value),
                dataArr = [];
    
            console.log(keyArr, "keyArr");

            // loop through the object,
            // pushing values to the return array
            keyArr.forEach((key: any) => {
                dataArr.push(value[key]);
            });

            // return the resulting array
            return dataArr;
        }
*/

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
