import {Component, OnInit} from '@angular/core';
import {ArticlelistService} from '../../services/article-list/articlelist.service';
import {ActivatedRoute} from '@angular/router';
import {TopicService} from '../../services/topic/topic.service';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})
export class ArticlelistComponent implements OnInit {
  topic: any;
  articles: any[];

  constructor(
    private articleListService: ArticlelistService,
    private route: ActivatedRoute,
    private topicService: TopicService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topic = this.topicService.getTopic(params.get('name'));
      // console.log(this.topic);
    });
    this.articles = this.articleListService.getArticles(this.topic);
  }

}
