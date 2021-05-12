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
  articles = [];

  constructor(
    private articleListService: ArticlelistService,
    private route: ActivatedRoute,
    private topicService: TopicService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topicService.getTopics().subscribe(response => {
        this.topic = response.filter(item => item.name === params.get('name'));

        this.articles = this.topic[0].articleList;
        console.log(this.articles);
      });
    });

  }

  // getArticlesForTopic(): any{
  //   if (this.topic !== undefined) {
  //     this.articleListService.getArticles(this.topic)
  //       .subscribe(articleResponse => {
  //         this.articles = articleResponse;
  //       });
  //   } else {
  //     return null;
  //   }
  // }

}
