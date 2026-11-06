import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class carrito {
  private apiUrl = 'http://localhost/api_proyecto/public/carrito';
  constructor(private http: HttpClient) {}
  ver(): Observable<any[]> { return this.http.get<any[]>(this.apiUrl); }
  agregar(idProducto: number, cantidad = 1): Observable<any> { return this.http.post(`${this.apiUrl}/agregar`, { id_producto: idProducto, cantidad }); }
  actualizar(idProducto: number, cantidad: number): Observable<any> { return this.http.put(`${this.apiUrl}/actualizar/${idProducto}`, { cantidad }); }
  eliminar(idProducto: number): Observable<any> { return this.http.delete(`${this.apiUrl}/eliminar/${idProducto}`); }
  vaciar(): Observable<any> { return this.http.delete(`${this.apiUrl}/vaciar`); }
}
