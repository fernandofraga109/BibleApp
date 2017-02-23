import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {   FormGroup,   FormControl } from '@angular/forms';
import { RepositoryBookService } from '../../providers/repository-book-service';
import { LoadingController } from 'ionic-angular';

@Component( {
    selector: 'page-versions',
    templateUrl: 'versions.html'
})
export class VersionsPage {

  
    version : string;

    constructor( public navCtrl: NavController, public navParams: NavParams, public repositoryBookService: RepositoryBookService, public loadingCtrl: LoadingController ) {
        this.version = "version";
    }

    ionViewDidLoad() {
        console.log( 'ionViewDidLoad VersionsPage' );
        let loader = this.loadingCtrl.create( {
            content: 'Carregando...',
        });

        loader.present().then(() => {
            this.repositoryBookService.get("bibleVersion").then(( res ) => {

                if ( res != null ) {
                    this.repositoryBookService.bibleVersion = res;
                    console.log( "CARREGOU ", res );
                    loader.dismiss();
                   

                } else {
                    this.repositoryBookService.set("bibleVersion", "nvi");
                    this.repositoryBookService.bibleVersion = res;
                    console.log( res, "NOT FOUND RESPONSE" );
                    loader.dismiss();
                }
                this.version = this.repositoryBookService.bibleVersion;
            }).catch(( err ) => {
                console.log( err, "ERROR" );
            });

        });
        
        
    }

    
    changeVersion() {
        let loader = this.loadingCtrl.create( {
            content: 'Carregando...',
        });

        loader.present().then(() => {
            this.repositoryBookService.update("bibleVersion", this.version).then(( res ) => {

                if ( res != null ) {
                    this.repositoryBookService.bibleVersion = this.version;
                    console.log( this.version, "ALTERANDO VERSAO" );
                    
                    

                } else {
                    console.log( res, "NOT FOUND RESPONSE" );
                }
                this.getChecked(this.version);
                loader.dismiss();
            }).catch(( err ) => {
                console.log( err, "ERROR" );
            });

        });
      
    }
    
    getChecked(v) {
        if (v == this.version) {
            console.log(v, "VVVVVV  TRUR");
            console.log(this.version, "VERSION TRUE");
            return "true";
        } else {
            console.log(v, "VVVVVV  FASLSE");
            console.log(this.version, "VERSION FASLSE");
            return "";
        }
    }

}
