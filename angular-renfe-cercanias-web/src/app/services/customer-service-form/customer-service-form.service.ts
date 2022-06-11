import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerServiceFormData } from 'src/app/models/CustomerServiceFormData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceFormService {
  private apiUrl: string = `${environment.apiUrl}/customer-service`;

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  sendForm(customerServiceFormData: CustomerServiceFormData) {
    return this.http.post(this.apiUrl, customerServiceFormData, this.httpOptions);
  }
}
