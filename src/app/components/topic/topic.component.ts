import {Component, Input, OnInit} from '@angular/core';
import {TopicService} from '../../services/topic/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input('topic') topic: any;

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    // this.topicService.getTopic(this.topic.name);
  }

}
