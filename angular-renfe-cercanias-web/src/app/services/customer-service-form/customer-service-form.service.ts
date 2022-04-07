import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerServiceFormData } from 'src/app/models/CustomerServiceFormData';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceFormService {
  private apiUrl: string = 'http://localhost:5000/customer-service';
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
