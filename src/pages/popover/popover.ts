import { Component, ViewChild, ElementRef } from '@angular/core';

import { PopoverController, NavParams } from 'ionic-angular';


@Component( {
    template: `
    <ion-list class="popover-page">
      <ion-row>
        <ion-col>
          <button (click)="changeFontSizeSmall()" ion-item detail-none class="text-button text-smaller">A</button>
        </ion-col>
        <ion-col>
          <button (click)="changeFontSizeNormal()" ion-item detail-none class="text-button">A</button>
        </ion-col>
        <ion-col>
          <button (click)="changeFontSizeBig()" ion-item detail-none class="text-button text-larger">A</button>
        </ion-col>
      </ion-row>
      <ion-row class="row-dots">
        <ion-col>
          <button ion-button="dot" (click)="changeBackground('white')" class="dot-white" [class.selected]="background == 'white'"></button>
        </ion-col>
        <ion-col>
          <button ion-button="dot" (click)="changeBackground('tan')" class="dot-tan" [class.selected]="background == 'tan'"></button>
        </ion-col>
        <ion-col>
          <button ion-button="dot" (click)="changeBackground('grey')" class="dot-grey" [class.selected]="background == 'grey'"></button>
        </ion-col>
        <ion-col>
          <button ion-button="dot" (click)="changeBackground('black')" class="dot-black" [class.selected]="background == 'black'"></button>
        </ion-col>
      </ion-row>
      
    </ion-list>
  `
})
export class PopoverPage {
    background: string;
    contentEle: any;
    textEle: any;
    fontFamily;

    colors = {
        'white': {
            'bg': 'rgb(255, 255, 255)',
            'fg': 'rgb(0, 0, 0)'
        },
        'tan': {
            'bg': 'rgb(249, 241, 228)',
            'fg': 'rgb(0, 0, 0)'
        },
        'grey': {
            'bg': 'rgb(76, 75, 80)',
            'fg': 'rgb(255, 255, 255)'
        },
        'black': {
            'bg': 'rgb(0, 0, 0)',
            'fg': 'rgb(255, 255, 255)'
        },
    };

    constructor( private navParams: NavParams ) {

    }

    ngOnInit() {
        if ( this.navParams.data ) {
            this.contentEle = this.navParams.data.contentEle;
            this.textEle = this.navParams.data.textEle;

            this.background = this.getColorName( this.contentEle.style.backgroundColor );
            this.setFontFamily();
        }
    }

    getColorName( background ) {
        let colorName = 'white';

        if ( !background ) return 'white';

        for ( var key in this.colors ) {
            if ( this.colors[key].bg == background ) {
                colorName = key;
            }
        }

        return colorName;
    }

    setFontFamily() {
        if ( this.textEle.style.fontFamily ) {
            this.fontFamily = this.textEle.style.fontFamily.replace( /'/g, "" );
        }
    }

    changeBackground( color ) {
        this.background = color;
        this.contentEle.style.backgroundColor = this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    }

    changeFontSizeSmall( direction ) {
        console.log(this.textEle.style, "tamanho da fonte");
        this.textEle.style.fontSize = "1.1rem";
    }
    changeFontSizeNormal( direction ) {
        console.log(this.textEle.style, "tamanho da fonte");
        this.textEle.style.fontSize = "1.6rem";
    }
    changeFontSizeBig( direction ) {
        console.log(this.textEle.style, "tamanho da fonte");
        this.textEle.style.fontSize = "2.0rem";
    }

    changeFontFamily() {
        if ( this.fontFamily ) this.textEle.style.fontFamily = this.fontFamily;
    }
}
