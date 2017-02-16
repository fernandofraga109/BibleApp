import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RepositoryBookService } from '../../providers/repository-book-service';


@Component( {
    selector: 'page-book',
    templateUrl: 'book.html'
})
export class BookPage {

    parameters: any;
    book: any;
    grid: Array<Array<string>>; //array of arrays
    

    constructor( public navCtrl: NavController,
        public navParams: NavParams,
        public repositoryBookService: RepositoryBookService ) {

        this.parameters = navParams;


    }

    loadBook( index: number ) {
        let books = this.repositoryBookService.getBooks();
        this.book = books[index];
        console.log( this.book, "LIVRO" );

        this.grid = Array( Math.ceil( this.book.chapters.length / 5 ) ); //MATHS!
        let rowNum = 0; //counter to iterate over the rows in the grid

        for ( let i = 0; i < ( this.book.chapters.length ); i += 5 ) { //iterate images

            this.grid[rowNum] = Array( 5 ); //declare two elements per row

            if ( this.book.chapters[i] ) { //check file URI exists
                this.grid[rowNum][0] = this.book.chapters[i] ; //insert image JSON.stringify(
            }

            if ( this.book.chapters[i + 1] ) { //repeat for the second image
                this.grid[rowNum][1] = this.book.chapters[i + 1];
            }
            
            if ( this.book.chapters[i + 2] ) { //repeat for the second image
                this.grid[rowNum][2] = this.book.chapters[i + 2];
            }
            
            if ( this.book.chapters[i + 3] ) { //repeat for the second image
                this.grid[rowNum][3] = this.book.chapters[i + 3];
            }
            
            if ( this.book.chapters[i + 4] ) { //repeat for the second image
                this.grid[rowNum][4] = this.book.chapters[i + 4];
            }

            rowNum++; //go on to the next row
        }
        console.log(this.grid, "GRID GERADA");
        
    }
    
    getRow(_grid) {
        let ret;
        if (_grid != null) {
            ret = Object.getOwnPropertyNames(_grid);
        }
        return ret;
    }
    
    
    getBookName() {
        let ret = "Livros"; 
    
        if (this.book != null) {
            ret = this.book.book;
        }
        return ret;
    }
    
    openVerse(verse) {
        console.log(verse,"VERSO!!");
    }

    ionViewDidLoad() {
        console.log( 'ionViewDidLoad BookPage' );
        let index = this.parameters.data;
        this.loadBook( index );
    }



}

