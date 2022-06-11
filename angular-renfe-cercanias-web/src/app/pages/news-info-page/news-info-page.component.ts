import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NewsInfo } from 'src/app/models/NewsInfo';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-info-page',
  templateUrl: './news-info-page.component.html',
  styleUrls: ['./news-info-page.component.scss']
})
export class NewsInfoPageComponent implements OnInit {
  id: string = '';
  newsInfo?: NewsInfo;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private newsService: NewsService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 500);

    this.getNewsInfo();
  }

  getNewsInfo() {
    this.newsService.getNewsInfo(this.id).subscribe(
      newsInfo => {
        this.newsInfo = newsInfo
        this.titleService.setTitle(this.newsInfo.title);
      },
      err => this.titleService.setTitle('Error - 404')
    );
  }

}
