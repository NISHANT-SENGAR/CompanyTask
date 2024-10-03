import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeModule } from '../home/home.module';

@Injectable({
  providedIn: 'root',
})
export class services {
  private apiUrl = '/api/requests';

  constructor(private http: HttpClient) {}

  submitRequest(request: HomeModule): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }

  getRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  closeRequest(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/close`, {});
  }
}
