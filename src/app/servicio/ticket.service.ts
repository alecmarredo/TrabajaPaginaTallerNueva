import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class TicketService {
  private apiUrl = 'http://localhost/api_proyecto/public/tickets';
  readonly baseArchivos = 'http://localhost/api_proyecto/public/';
  constructor(private http: HttpClient) {}
  generar(id: number): Observable<any> { return this.http.post(`${this.apiUrl}/generar/${id}`, {}); }
  ver(id: number): Observable<any> { return this.http.get(`${this.apiUrl}/${id}`); }
}
