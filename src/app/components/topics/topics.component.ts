import {Component, ElementRef, OnInit, SimpleChanges} from '@angular/core';
import { TopicService } from '../../services/topic/topic.service';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: any[];
  currentUserr: any;
  isFormVisible = false;
  constructor(private topicService: TopicService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.searchSubject.subscribe(currentUser => {
      this.currentUserr = currentUser;
      console.log('This ');
      console.log(this);
      console.log('INSIDE SUBSCRIBE: Topics Current User ' + this.currentUserr);
    });
    this.topicService.getTopics()
      .subscribe(response => {
        this.topics = response;
      }); // subscribes to getTopics() subscription
    setTimeout(() => {console.log(this)}, 500);
    console.log('Outside This ');
    console.log(this);
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   if (localStorage.getItem('currentUser')) {
  //     this.currentUserr = localStorage.getItem('currentUser');
  //   }
  // }

  toggleAddTopicForm(): void{
    this.isFormVisible = !this.isFormVisible;
  }

}
