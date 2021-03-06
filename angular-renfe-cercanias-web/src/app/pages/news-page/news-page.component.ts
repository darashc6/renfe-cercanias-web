import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsInfo } from 'src/app/models/NewsInfo';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news?: NewsInfo[];
  isLoading: boolean = true;

  constructor(private newsService: NewsService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Noticias');

    setTimeout(() => {
      this.isLoading = false;
    }, 500);

    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    });
  }
}
