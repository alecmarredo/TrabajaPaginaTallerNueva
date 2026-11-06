/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class favoritos {
  private apiUrl = 'http://localhost/api_proyecto/public/favoritos';
  constructor(private http: HttpClient) {}
  listar(): Observable<any[]> { return this.http.get<any[]>(this.apiUrl); }
  agregar(id: number): Observable<any> { return this.http.post(`${this.apiUrl}/agregar`, { id_producto: id }); }
  eliminar(id: number): Observable<any> { return this.http.delete(`${this.apiUrl}/eliminar/${id}`); }
}
 */


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class favoritos {
  private apiUrl = 'http://localhost/api_proyecto/public/favoritos';
  private productosFavoritos: number[] = [];

  constructor(private http: HttpClient) {
    this.listar().subscribe({
      next: (lista) => {
        this.productosFavoritos = lista.map(
          (producto) => Number(producto.id_producto ?? producto.id)
        );
      },
      error: () => {}
    });
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  estaEnFavoritos(id: number): boolean {
    return this.productosFavoritos.includes(Number(id));
  }

  agregar(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregar`, {
      id_producto: id
    }).pipe(
      tap(() => {
        if (!this.estaEnFavoritos(id)) {
          this.productosFavoritos.push(Number(id));
        }
      })
    );
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminar/${id}`).pipe(
      tap(() => {
        this.productosFavoritos = this.productosFavoritos.filter(
          (producto) => producto !== Number(id)
        );
      })
    );
  }
}
