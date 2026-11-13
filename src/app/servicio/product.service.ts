import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = "http://localhost/api_proyecto/public/productos";
 baseImagenes = "http://localhost/api_proyecto/public/uploads/"

  constructor(private http: HttpClient) {}

  // listar() trae todos; listar('remera') busca por texto
  listar(buscar: string = ''): Observable<Producto[]> {
    let params = new HttpParams();
    if (buscar) params = params.set('buscar', buscar);
    return this.http.get<Producto[]>(this.apiUrl, { params });
  }

  listarPorCategoria(categoria: string): Observable<Producto[]> {
    const params = new HttpParams().set('categoria', categoria);
    return this.http.get<Producto[]>(this.apiUrl, { params });
  }

  listarOfertas(): Observable<Producto[]> {
    const params = new HttpParams().set('oferta', '1');
    return this.http.get<Producto[]>(this.apiUrl, { params });
  }

  verUno(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  crear(producto: Partial<Producto>): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  editar(id: number, producto: Partial<Producto>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  subirImagen(archivo: File): Observable<{ imagen: string }> {
    const datos = new FormData();
    datos.append('imagen', archivo);
    return this.http.post<{ imagen: string }>(`${this.apiUrl}/imagen`, datos);
  }

  // URL completa de la imagen (acepta nombre suelto, ruta con "/" o URL completa)
  imagen(nombre: string | null | undefined): string {
    if (!nombre) return 'assets/Logo_pagina_png.png';
    if (nombre.startsWith('http')) return nombre;
    if (nombre.startsWith('/')) return 'http://localhost/api_proyecto/public' + nombre;
    return this.baseImagenes + nombre;
  }
}