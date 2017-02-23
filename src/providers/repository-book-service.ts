import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { SqlService } from './sql-service';

@Injectable()
export class RepositoryBookService extends SqlService {

    books: any[];
    data: Object;
    bibleVersion;

    constructor(  public http: Http,
        public platform: Platform ) {
        super( platform, "RepositoryBook" );
        
        
    }

    
    
    loadBooksPromisse() {
        let version = this.bibleVersion.toUpperCase();
        return this.http.get('./bibliaLinguagem'+version+'.json');
    }

    getBooks() {
        return this.books;
    }
    
}