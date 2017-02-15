import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RepositoryBookService } from '../../providers/repository-book-service';

/*
  Generated class for the Book page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {
    
  produto: any; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public repositoryBookService :RepositoryBookService) {
 
      this.produto = navParams;
      this.produto = this.produto.data;
      console.log(this.produto,"PARAMETROS");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

}
