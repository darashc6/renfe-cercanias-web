import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    console.log(this.id);

    this.getNewsInfo();
    console.log(this.newsInfo);
  }

  getNewsInfo() {
    this.newsService.getNewsInfo(this.id).subscribe(newsInfo => this.newsInfo = newsInfo);
  }

}
