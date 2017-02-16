import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component( {
    selector: 'page-verse',
    templateUrl: 'verse.html'
})
export class VersePage {

     book:any;
     verse:any;
     numVerse:any;
     arrayVerse = [];

    constructor( public navCtrl: NavController,
                 public navParams: NavParams ) {
    
        this.book = navParams.get("book");
        this.verse = navParams.get("verse");
        this.numVerse = Object.getOwnPropertyNames( this.verse );
        console.log(this.book, "BOOK ON VERSE");
        console.log(this.verse, "VERSE ON VERSE");
    
    }

    ionViewDidLoad() {
        console.log( 'ionViewDidLoad VersePage' );
        
        
            
        console.log(this.verse[this.numVerse],"key");
        
        var nullArray = [];
        
        
        for(let key in this.verse[this.numVerse]){
            var item = {};
            item[key] = this.verse[this.numVerse][key];
            
           
           this.arrayVerse.push(item);
           
          }
        
        
        console.log(this.arrayVerse)

    }
    
    getNumerVersicle( row ) {
        let ret;
        if ( row != null ) {
            ret = Object.getOwnPropertyNames( row );
        }
        return ret;
    }
    
    getNameBook() {
        return this.book.book + " " + this.numVerse ;
    }

}
