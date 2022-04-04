import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fare } from 'src/app/models/Fare';

@Injectable({
  providedIn: 'root'
})
export class DiscountFaresService {
  private apiUrl: string = 'http://localhost:5000/discount-fares';

  constructor(private http: HttpClient) { }

  getDiscountFares(): Observable<Fare[]> {
    return this.http.get<Fare[]>(this.apiUrl);
  }

  getDiscountFare(fareId: string): Observable<Fare> {
    return this.http.get<Fare>(`${this.apiUrl}/${fareId}`);
  }
}
