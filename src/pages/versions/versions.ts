import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { RepositoryBookService } from '../../providers/repository-book-service';
import { LoadingController } from 'ionic-angular';

@Component( {
    selector: 'page-versions',
    templateUrl: 'versions.html'
})
export class VersionsPage {


    version: string;

    constructor( public navCtrl: NavController, public navParams: NavParams,
                 public repositoryBookService: RepositoryBookService, public loadingCtrl: LoadingController ) {
        this.version = "version";
    }

    ionViewDidLoad() {
        console.log( 'ionViewDidLoad VersionsPage' );
        let loader = this.loadingCtrl.create( {
            content: 'Carregando...',
        });

        loader.present().then(() => {
            let res = localStorage.getItem( "bibleVersion" );

            if ( res != null ) {
                this.repositoryBookService.bibleVersion = res;
                console.log( "LOCALIZOU VERISON ON STORAGE", res );

            } else {
                this.repositoryBookService.loadBibleVersion();
            }
            this.version = this.repositoryBookService.bibleVersion;
            loader.dismiss();

        });


    }


    changeVersion() {
        let loader = this.loadingCtrl.create( {
            content: 'Carregando...',
        });
        console.log(this.version, "version select");
        loader.present().then(() => {
            localStorage.removeItem('bibleVersion');
            localStorage.setItem('bibleVersion',this.version);
            
            this.repositoryBookService.bibleVersion = this.version;
            this.repositoryBookService.loadBooksPromisse().toPromise().then(( res ) => {
                if ( res != null ) {
                    let body = JSON.parse( res.text() );
                    this.repositoryBookService.books = [];
                    for ( let i = 0; i < body.length; i++ ) {
                        this.repositoryBookService.books.push( body[i] );
                    }
               
                } else {
                    console.log( res, "NOT FOUND RESPONSE" );
                }

            }).catch(( err ) => {
                console.log( err, "ERROR" );
            });
            
            
            loader.dismiss();
            
        }).catch(( err ) => {
            console.log( err, "ERROR" );
        });


    }


}
