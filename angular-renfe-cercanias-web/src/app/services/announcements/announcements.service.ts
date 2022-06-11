import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/models/Announcement';
import { configVars } from 'src/environments/config_vars';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  private apiUrl: string = `${configVars.apiUrl}/announcements`;

  constructor(private http: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.apiUrl);
  }
}
