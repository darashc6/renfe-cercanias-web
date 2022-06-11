import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsInfo } from 'src/app/models/NewsInfo';
import { configVars } from 'src/environments/config_vars';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl: string = `${configVars.apiUrl}/news`;

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsInfo[]> {
    return this.http.get<NewsInfo[]>(this.apiUrl);
  }

  getNewsInfo(newsId: string): Observable<NewsInfo> {
    return this.http.get<NewsInfo>(`${this.apiUrl}/${newsId}`);
  }
}
