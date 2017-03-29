import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RedditService} from'../../app/reddit.services';
import {DetailsPage} from '../details/details';
import {ServicesPage} from '../services/services';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

item: string = "bbc-news";
items:any;
source: string;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
     this.source = 'bbc-news';
  }

  ngOnInit() {
    this.getPosts(this.source)
  }

getPosts(source){
  this.redditService.getPosts(source).subscribe(response=>{
    this.items= response.articles;
    console.log(this.items);
  });
}

viewItem(item){
this.navCtrl.push(DetailsPage,{
  item:item,
  source:this.source
});
}

onSelectSource(item)
{
  this.source = item;
  this.getPosts(this.source);
}

doRefresh(refresher){
  setTimeout(() => {
       this.getPosts(this.source);
        refresher.complete();
      }, 2000);
}
}
