import { Component, OnInit } from '@angular/core';
import { NewsInfo } from 'src/app/models/NewsInfo';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news: NewsInfo[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe(data => this.news = data);
  }
}
