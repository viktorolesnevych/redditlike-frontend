import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlelistService {
  apiUrl = 'http://redditlikeapi-env.eba-tpi4ysj3.us-east-2.elasticbeanstalk.com/api/topics';
  topic: any;

  constructor(private http: HttpClient) { }

  getArticles(topic: any): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.get(this.apiUrl + '/' + topic.id + '/articles', requestOptions);
  }

}
