import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {RedditService} from'../../app/reddit.services';
//import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  templateUrl: 'browser.html'
})
export class BrowserPage {
url:string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.url="{{item.url}}";
  }
  
}

 
