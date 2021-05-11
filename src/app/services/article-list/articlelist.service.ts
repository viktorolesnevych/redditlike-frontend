import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TopicService} from '../topic/topic.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlelistService {
  apiUrl = 'http://redditlikeapi-env.eba-tpi4ysj3.us-east-2.elasticbeanstalk.com/api/topics';
  topic: any;

  constructor(private http: HttpClient, private topicService: TopicService) { }

  getArticles(topic: any): any {
    return this.http.get(this.apiUrl + '/' + topic.id);
  }

}
