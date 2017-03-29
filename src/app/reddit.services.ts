import {Injectable} from'@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()

export class RedditService{
http:any;
baseUrl:any;

constructor(http:Http){
this.http=http;
//this.baseUrl="http://www.reddit.com/r";
this.baseUrl = " https://newsapi.org/v1/articles";
}

// getPosts(category,limit){
//     // return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
//     //                 .map(res=>res.json());
//       return this.http.get(this.baseUrl+'?'+'source=bbc-news&sortBy=top&apiKey=f00ce3f12ca44964a10e28117be59afd')
//                     .map(res=>res.json());
// }

getPosts(source){
    // return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
    //                 .map(res=>res.json());
    //console.log(this.baseUrl+'?'+'source='+source+'&sortBy=top&apiKey=f00ce3f12ca44964a10e28117be59afd');
      return this.http.get(this.baseUrl+'?'+'source='+source+'&sortBy=top&apiKey=f00ce3f12ca44964a10e28117be59afd')
                    .map(res=>res.json());
}
}