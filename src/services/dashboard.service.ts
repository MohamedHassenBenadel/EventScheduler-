import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'https://eventschedulerbackend.onrender.com/eventscheduler/';

  constructor(private http: HttpClient) {}

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post(`${this.baseUrl}uploadToGoogleDrive`, formData);
  }

  createEvent(event: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}CreateEvent?hostId=${event.hostId}`, event, { responseType: 'text' as 'json' });
  }

  getEventsByHostId(hostId: any): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}eventsByHost?hostId=${hostId}`);
  }

  updateEvent(event: any): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}updateEvent`, event, { responseType: 'text' as 'json' });
  }

  deleteEvent(eventId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}delete/${eventId}`, { responseType: 'text' as 'json' });
  }





  }



