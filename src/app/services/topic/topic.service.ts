import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topics: any;
  response: any;

  apiUrl = 'http://redditlikeapi-env.eba-tpi4ysj3.us-east-2.elasticbeanstalk.com/api/topics';

  constructor(private http: HttpClient) { }

  getTopics(): any {
    return this.http.get(this.apiUrl); // returns a subscription
  }

  getTopic(name: string): any {
    this.response = this.getTopics().subscribe(response => {
      this.response = response;
      return this.response.filter(item => item.name === name);
    });
  }

  // todo: extrapolate token and requestOptions logic to a service so we're not repeating code
  createTopic(newTopic): any{
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${this.apiUrl}/new`, newTopic, requestOptions);
  }

  deleteTopic(topicId: any): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    this.http.delete(this.apiUrl + '/' + topicId + '/', requestOptions)
      .subscribe(response => console.log(response));
  }

}
