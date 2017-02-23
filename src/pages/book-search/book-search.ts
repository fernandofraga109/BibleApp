import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookPage } from '../book/book';
import { App } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';

import { RepositoryBookService } from '../../providers/repository-book-service';
import { LoadingController } from 'ionic-angular';

@Component( {
    selector: 'page-book-search',
    templateUrl: 'book-search.html'
})
export class BookSearchPage {

    @ViewChild( Nav ) nav: Nav;
    items;
    itemsAlfabetica;
    ordem: string = "normal";
    isAndroid: boolean = false;

    constructor( public navCtrl: NavController,
        public navParams: NavParams,
        private app: App,
        public repositoryBookService: RepositoryBookService,
        public loadingCtrl: LoadingController,
        public platform: Platform ) {

        this.isAndroid = platform.is( 'android' );
        this.initializeItems();
    }

    initializeItems() {
        this.items = [
            { "book": "Gênesis", "name": "genesis", "number": "0" },
            { "book": "Êxodo", "name": "exodo", "number": "1" },
            { "book": "Levítico", "name": "Levitico", "number": "2" },
            { "book": "Números", "name": "numeros", "number": "3" },
            { "book": "Deoteronômio", "name": "deoteronomio", "number": "4" },
            { "book": "Josué", "name": "josue", "number": "5" },
            { "book": "Juízes", "name": "juizes", "number": "6" },
            { "book": "Rute", "name": "rute", "number": "7" },
            { "book": "I Samuel", "name": "I Samuel", "number": "8" },
            { "book": "II Samuel", "name": "II Samuel", "number": "9" },
            { "book": "I Reis", "name": "I Reis", "number": "10" },
            { "book": "II Reis", "name": "II Reis", "number": "11" },
            { "book": "I Crônicas", "name": "I Cronicas", "number": "12" },
            { "book": "II Crônicas", "name": "II Cronicas", "number": "13" },
            { "book": "Esdras", "name": "Esdras", "number": "14" },
            { "book": "Neemias", "name": "Neemias", "number": "15" },
            { "book": "Ester", "name": "Ester", "number": "16" },
            { "book": "Jó", "name": "Jo", "number": "17" },
            { "book": "Salmos", "name": "Salmos", "number": "18" },
            { "book": "Provérbios", "name": "Proverbios", "number": "19" },
            { "book": "Eclesiastes", "name": "Eclesiastes", "number": "20" },
            { "book": "Canticos", "name": "Canticos", "number": "21" },
            { "book": "Isaías", "name": "Isaias", "number": "22" },
            { "book": "Jeremias", "name": "Jeremias", "number": "23" },
            { "book": "Lamentações", "name": "Lamentacoes", "number": "24" },
            { "book": "Ezequiel", "name": "Ezequiel", "number": "25" },
            { "book": "Daniel", "name": "Daniel", "number": "26" },
            { "book": "Oséias", "name": "Oseias", "number": "27" },
            { "book": "Joel", "name": "Joel", "number": "28" },
            { "book": "Amós", "name": "Amps", "number": "29" },
            { "book": "Obadias", "name": "Obadias", "number": "30" },
            { "book": "Jonas", "name": "Jonas", "number": "31" },
            { "book": "Miquéias", "name": "Miqueias", "number": "32" },
            { "book": "Naum", "name": "Naum", "number": "33" },
            { "book": "Habacuque", "name": "Habacuque", "number": "34" },
            { "book": "Sofonias", "name": "Sofonias", "number": "35" },
            { "book": "Ageu", "name": "Ageu", "number": "36" },
            { "book": "Zacarias", "name": "Zacarias", "number": "37" },
            { "book": "Malaquias", "name": "Malaquias", "number": "38" },


            { "book": "Mateus", "name": "Mateus", "number": "39" },
            { "book": "Marcos", "name": "Marcos", "number": "40" },
            { "book": "Lucas", "name": "Lucas", "number": "41" },
            { "book": "João", "name": "Joao", "number": "42" },
            { "book": "Atos", "name": "Atos", "number": "43" },
            { "book": "Romanos", "name": "Romanos", "number": "44" },
            { "book": "I Coríntios", "name": "I Corintios", "number": "45" },
            { "book": "II Coríntios", "name": "I Corintios", "number": "46" },
            { "book": "Gálatas", "name": "Galatas", "number": "47" },
            { "book": "Efésios", "name": "Efesios", "number": "48" },
            { "book": "Filipenses", "name": "Filipenses", "number": "49" },
            { "book": "Colossenses", "name": "Colossenses", "number": "50" },
            { "book": "I Tessalonicenses", "name": "I Tessalonicenses", "number": "51" },
            { "book": "II Tessalonicenses", "name": "II Tessalonicenses", "number": "52" },
            { "book": "I Timóteo", "name": "I Timoteo", "number": "53" },
            { "book": "II Timóteo", "name": "II Timoteo", "number": "54" },
            { "book": "Tito", "name": "Tito", "number": "55" },
            { "book": "Filemom", "name": "Filemom", "number": "56" },
            { "book": "Hebreus", "name": "Hebreus", "number": "57" },
            { "book": "Tiago", "name": "Tiago", "number": "58" },
            { "book": "I Pedro", "name": "I Pedro", "number": "59" },
            { "book": "II Pedro", "name": "II Pedro", "number": "60" },
            { "book": "I João", "name": "I Joao", "number": "61" },
            { "book": "II João", "name": "II Joao", "number": "62" },
            { "book": "III João", "name": "III Joao", "number": "63" },
            { "book": "Judas", "name": "Judas", "number": "64" },
            { "book": "Apocalipse", "name": "Apocalipse", "number": "65" }
        ];

        this.itemsAlfabetica = [
            { "book": "Ageu", "name": "Ageu", "number": "36" },
            { "book": "Amós", "name": "Amps", "number": "29" },
            { "book": "Apocalipse", "name": "Apocalipse", "number": "65" },
            { "book": "Atos", "name": "Atos", "number": "43" },
            { "book": "Canticos", "name": "Canticos", "number": "21" },
            { "book": "Colossenses", "name": "Colossenses", "number": "50" },
            { "book": "Daniel", "name": "Daniel", "number": "26" },
            { "book": "Deoteronômio", "name": "deoteronomio", "number": "4" },
            { "book": "Eclesiastes", "name": "Eclesiastes", "number": "20" },
            { "book": "Efésios", "name": "Efesios", "number": "48" },
            { "book": "Esdras", "name": "Esdras", "number": "14" },
            { "book": "Ester", "name": "Ester", "number": "16" },
            { "book": "Êxodo", "name": "exodo", "number": "1" },
            { "book": "Ezequiel", "name": "Ezequiel", "number": "25" },
            { "book": "Filemom", "name": "Filemom", "number": "56" },
            { "book": "Filipenses", "name": "Filipenses", "number": "49" },
            { "book": "Gálatas", "name": "Galatas", "number": "47" },
            { "book": "Gênesis", "name": "genesis", "number": "0" },
            { "book": "Habacuque", "name": "Habacuque", "number": "34" },
            { "book": "Hebreus", "name": "Hebreus", "number": "57" },
            { "book": "I Coríntios", "name": "I Corintios", "number": "45" },
            { "book": "I Crônicas", "name": "I Cronicas", "number": "12" },
            { "book": "I João", "name": "I Joao", "number": "61" },
            { "book": "I Pedro", "name": "I Pedro", "number": "59" },
            { "book": "I Reis", "name": "I Reis", "number": "10" },
            { "book": "I Samuel", "name": "I Samuel", "number": "8" },
            { "book": "I Tessalonicenses", "name": "I Tessalonicenses", "number": "51" },
            { "book": "I Timóteo", "name": "I Timoteo", "number": "53" },
            { "book": "II Coríntios", "name": "I Corintios", "number": "46" },
            { "book": "II Crônicas", "name": "II Cronicas", "number": "13" },
            { "book": "II João", "name": "II Joao", "number": "62" },
            { "book": "II Pedro", "name": "II Pedro", "number": "60" },
            { "book": "II Reis", "name": "II Reis", "number": "11" },
            { "book": "II Samuel", "name": "II Samuel", "number": "9" },
            { "book": "II Tessalonicenses", "name": "II Tessalonicenses", "number": "52" },
            { "book": "II Timóteo", "name": "II Timoteo", "number": "54" },
            { "book": "III João", "name": "III Joao", "number": "63" },
            { "book": "Isaías", "name": "Isaias", "number": "22" },
            { "book": "Jeremias", "name": "Jeremias", "number": "23" },
            { "book": "Jó", "name": "Jo", "number": "17" },
            { "book": "João", "name": "Joao", "number": "42" },
            { "book": "Joel", "name": "Joel", "number": "28" },
            { "book": "Jonas", "name": "Jonas", "number": "31" },
            { "book": "Josué", "name": "josue", "number": "5" },
            { "book": "Judas", "name": "Judas", "number": "64" },
            { "book": "Juízes", "name": "juizes", "number": "6" },
            { "book": "Lamentações", "name": "Lamentacoes", "number": "24" },
            { "book": "Levítico", "name": "Levitico", "number": "2" },
            { "book": "Lucas", "name": "Lucas", "number": "41" },
            { "book": "Malaquias", "name": "Malaquias", "number": "38" },
            { "book": "Marcos", "name": "Marcos", "number": "40" },
            { "book": "Mateus", "name": "Mateus", "number": "39" },
            { "book": "Miquéias", "name": "Miqueias", "number": "32" },
            { "book": "Naum", "name": "Naum", "number": "33" },
            { "book": "Neemias", "name": "Neemias", "number": "15" },
            { "book": "Números", "name": "numeros", "number": "3" },
            { "book": "Obadias", "name": "Obadias", "number": "30" },
            { "book": "Oséias", "name": "Oseias", "number": "27" },
            { "book": "Provérbios", "name": "Proverbios", "number": "19" },
            { "book": "Romanos", "name": "Romanos", "number": "44" },
            { "book": "Rute", "name": "rute", "number": "7" },
            { "book": "Salmos", "name": "Salmos", "number": "18" },
            { "book": "Sofonias", "name": "Sofonias", "number": "35" },
            { "book": "Tiago", "name": "Tiago", "number": "58" },
            { "book": "Tito", "name": "Tito", "number": "55" },
            { "book": "Zacarias", "name": "Zacarias", "number": "37" }
        ];
    }

    getItems( ev ) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if ( val && val.trim() != '' ) {
            this.items = this.items.filter(( item ) => {
                return ( item.name.toLowerCase().indexOf( val.toLowerCase() ) > -1 );
            })
        }
    }
    getItemsAlfabetica( ev ) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if ( val && val.trim() != '' ) {
            this.itemsAlfabetica = this.itemsAlfabetica.filter(( item ) => {
                return ( item.name.toLowerCase().indexOf( val.toLowerCase() ) > -1 );
            })
        }
    }

    openBook( book ) {

        let books = this.repositoryBookService.getBooks();
        if ( books == null ) {

            let loader = this.loadingCtrl.create( {
                content: 'Carregando...',
            });

            loader.present().then(() => {
                
                this.repositoryBookService.loadBibleVersion();
                this.repositoryBookService.loadBooksPromisse().toPromise().then(( res ) => {

                    if ( res != null ) {
                        let body = JSON.parse( res.text() );
                        this.repositoryBookService.books = [];
                        for ( let i = 0; i < body.length; i++ ) {
                            this.repositoryBookService.books.push( body[i] );
                        }
                        console.log( "CARREGOU " );
                        loader.dismiss();
                        let page: any = BookPage;
                        this.app.getRootNav().push( page, book );
                        console.log( book, "ABRINDO LIVRO" );

                    } else {
                        console.log( res, "NOT FOUND RESPONSE" );
                    }

                }).catch(( err ) => {
                    console.log( err, "ERROR" );
                });

            });




        } else {
            let page: any = BookPage;
            this.app.getRootNav().push( page, book );
            console.log( book, "ABRINDO LIVRO" );
        }



    }

}
