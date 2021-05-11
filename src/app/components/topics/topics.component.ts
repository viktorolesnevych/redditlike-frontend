import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topic/topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: any[];

  constructor(private topicService: TopicsService) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(response => {
      this.topics = response;
    });
  }

}
