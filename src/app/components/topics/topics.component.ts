import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { TopicService } from '../../services/topic/topic.service';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: any[];
  currentUser: any;
  isFormVisible = false;
  constructor(private topicService: TopicService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.searchSubject.subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log('Topics Current User ' + this.currentUser);
    });
    this.topics = this.topicService.getTopics();
  }
  toggleAddTopicForm(): void{
    this.isFormVisible = !this.isFormVisible;
  }

}
