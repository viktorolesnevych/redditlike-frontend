import {Component, ElementRef, OnInit, SimpleChanges} from '@angular/core';
import { TopicService } from '../../services/topic/topic.service';
import {UserService} from '../../services/user.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: any[];
  currentUserr: any;
  isFormVisible = false;

  title: string;
  description: string;

  constructor(private topicService: TopicService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.searchSubject.subscribe(currentUser => {
      this.currentUserr = currentUser;
    });
    this.topicService.getTopics()
      .subscribe(response => {
        this.topics = response;
      }); // subscribes to getTopics() subscription
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   if (localStorage.getItem('currentUser')) {
  //     this.currentUserr = localStorage.getItem('currentUser');
  //   }
  // }
  toggleAddTopicForm(): void{
    this.isFormVisible = !this.isFormVisible;
  }

  createTopic(): any {
    const newTopic = {
      name: this.title,
      description: this.description
    };
    if (newTopic) {
      this.topicService.createTopic(newTopic).subscribe(response => {
        this.topics = [...this.topics, response];
        }, err => console.log(err));
    }
  }
}
