import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {   FormGroup,   FormControl } from '@angular/forms';


/*
  Generated class for the Versions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component( {
    selector: 'page-versions',
    templateUrl: 'versions.html'
})
export class VersionsPage {

    langs;
    langForm;

    constructor( public navCtrl: NavController, public navParams: NavParams ) {

        this.langForm = new FormGroup( {
            "langs": new FormControl( { value: 'nvi', disabled: false })
        });
    }

    ionViewDidLoad() {
        console.log( 'ionViewDidLoad VersionsPage' );
    }

    doSubmit( event ) {
        console.log( 'Submitting form', this.langForm.value );
        event.preventDefault();
    }




}
