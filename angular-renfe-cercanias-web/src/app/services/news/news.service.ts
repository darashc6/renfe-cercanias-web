import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsInfo } from 'src/app/models/NewsInfo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl: string = `${environment.apiUrl}/news`;

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsInfo[]> {
    return this.http.get<NewsInfo[]>(this.apiUrl);
  }

  getNewsInfo(newsId: string): Observable<NewsInfo> {
    return this.http.get<NewsInfo>(`${this.apiUrl}/${newsId}`);
  }
}
