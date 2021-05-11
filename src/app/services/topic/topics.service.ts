import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  topics: any;

  apiUrl = 'http://redditlikeapi-env.eba-tpi4ysj3.us-east-2.elasticbeanstalk.com/api/topics';

  constructor(private http: HttpClient) { }

  getTopics(): any {
    return this.http.get(this.apiUrl);
  }
}
