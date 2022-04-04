import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NewsInfo } from 'src/app/models/NewsInfo';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl: string = 'http://localhost:5000/news'

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsInfo[]> {
    return this.http.get<NewsInfo[]>(this.apiUrl);
  }

  getNewsInfo(newsId: string): Observable<NewsInfo> {
    return this.http.get<NewsInfo>(`${this.apiUrl}/${newsId}`);
  }
}
