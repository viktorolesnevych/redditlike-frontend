import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input('topic') topic: any;

  constructor() { }

  ngOnInit(): void {
  }

}
