import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RepositoryBookService {

    books: any[];
    data: Object;

    constructor( public http: Http ) {
        console.log( 'Hello RepositoryBookService Provider' );
        this.loadBooks();
    }


    loadBooks() {
        
        
        this.http.get('./bibliaLinguagemNVI.json').toPromise().then(( res ) => {
            if ( res != null ) {
                let body = JSON.parse(res.text());
                this.books = [];
                for ( let i = 0; i < body.length ; i++ ) {
                    this.books.push( body[i]  );
                }
                console.log("CARREGOU ");
            } else {
                console.log( res, "NOT FOUND RESPONSE" );
            }

        }).catch(( err ) => {
            console.log( err, "ERROR" );
        });
    }
    
    getBooks() {
        return this.books;
    }
    
}