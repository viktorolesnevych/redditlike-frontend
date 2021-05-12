import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic/topic.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics = []; // must be an array to implement array methods

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopics()
      .subscribe(response => {
        this.topics = response;
      }); // subscribes to getTopics() subscription
  }

}
