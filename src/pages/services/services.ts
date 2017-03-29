import { Component } from '@angular/core';
import {RedditService} from'../../app/reddit.services';
import { NavController } from 'ionic-angular';
import{RedditPage} from './reddit/reddit';

@Component({
  selector: 'services',
  templateUrl: 'services.html'
})
export class ServicesPage {
//  item: string="bbc-news";
// items:any;
// source:string;
//  constructor(public navCtrl: NavController,private redditService:RedditService) {
// this.onSelectSource("item");
//  }
// getPosts(source){
//   this.redditService.getPosts(source).subscribe(response=>{
//     this.items= response.articles;
//     console.log(this.items);
//   });
// }

//  onSelectSource(item)
//  {
//    this.source = item;
//    this.getPosts(this.source);
//  }

// setDefaults(){
//   localStorage.setItem('item',this.source);
//   this.navCtrl.push(RedditPage);
//  }
}
