import { Component } from '@angular/core';
import{BrowserPage} from '../browser/browser';
import { NavController,NavParams } from 'ionic-angular';
//import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  
  templateUrl: 'details.html'
})
export class DetailsPage {
item:any;
source:string;
  constructor(public navCtrl: NavController,public params:NavParams) {
        this.item = params.get("item");
        this.source=params.get("source");
  }
viewInBrowser(item){
this.navCtrl.push(BrowserPage,{
  item:item
});
}
}
