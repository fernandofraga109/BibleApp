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

    constructor( public http: Http,
        public platform: Platform ) {
        super( platform, "RepositoryBook" );
        localStorage.getItem( 'candidato' );
        localStorage.getItem( 'candidato' );
        localStorage.removeItem( 'candidato' );

    }

    loadBibleVersion() {
        if ( localStorage.getItem( 'bibleVersion' ) == null ) {
            localStorage.setItem( 'bibleVersion', 'nvi' );
        }
        this.bibleVersion = localStorage.getItem( 'bibleVersion' );
    }



    loadBooksPromisse() {
        let version = this.bibleVersion.toUpperCase();
        return this.http.get( './bibliaLinguagem' + version + '.json' );
    }

    getNameVersion(  ) {

        if ( this.bibleVersion == "nvi" ) {
            return "Nova Verção Internacional (NVI)";
        } else if ( this.bibleVersion == "acf" ) {
            return "Almeida Corrigida e Fiel (ACF)";
        } else if ( this.bibleVersion == "aa" ) {
            return "Almeida Revisada Imprensa Bíblica (AA)";
        } else if ( this.bibleVersion == "am" ) {
            return "A Mensagem (AM)";
        }


    }

    getBooks() {
        return this.books;
    }

}