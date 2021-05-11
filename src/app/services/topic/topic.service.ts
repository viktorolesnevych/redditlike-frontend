import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topics: any;
  response: any;

  apiUrl = 'http://redditlikeapi-env.eba-tpi4ysj3.us-east-2.elasticbeanstalk.com/api/topics';

  constructor(private http: HttpClient) { }

  getTopics(): any {
    this.http.get(this.apiUrl)
      .subscribe(response => {
        this.response = response;
      });
    return this.response;
  }

  getTopic(name: string): any {
    this.getTopics();
    return this.response.filter(item => item.name === name);
  }

}
