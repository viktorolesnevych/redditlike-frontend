import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {TopicService} from '../topic/topic.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlelistService {
  apiUrl = 'http://redditlikeapi-env.eba-tpi4ysj3.us-east-2.elasticbeanstalk.com/api/topics';

  constructor(private http: HttpClient, private route: ActivatedRoute, private topicService: TopicService) { }

  topic = this.topicService.getTopic()

  getArticles(): any {
    return this.http.get(this.apiUrl + `${topic.id}`)
  }

}
