import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private baseUrl = 'https://eventschedulerbackend.onrender.com/eventscheduler/'; // Base URL

  constructor(private http: HttpClient) { }

  addHost(formData: any): Observable<HttpResponse<any>> {
    const url = `${this.baseUrl}AddHost`; // Append endpoint
    return this.http.post<any>(url, formData, { observe: 'response' });
  }

  loginHost(credentials: any): Observable<HttpResponse<any>> {
    const url = `${this.baseUrl}LoginHost`; // Append endpoint
    return this.http.post<any>(url, credentials, { observe: 'response' });
  }
}
