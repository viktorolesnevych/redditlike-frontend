import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://redditlikeapi-env.eba-tpi4ysj3.us-east-2.elasticbeanstalk.com/api/topics')
      .subscribe(response => {
        console.log(response);
        // this.topics = response;
      });
  }

}
