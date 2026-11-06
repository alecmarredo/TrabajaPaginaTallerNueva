import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CompraService {
  private apiUrl = 'http://localhost/api_proyecto/public/compras';
  constructor(private http: HttpClient) {}
  finalizar(): Observable<any> { return this.http.post(`${this.apiUrl}/finalizar`, {}); }
  historial(): Observable<any[]> { return this.http.get<any[]>(this.apiUrl); }
}
