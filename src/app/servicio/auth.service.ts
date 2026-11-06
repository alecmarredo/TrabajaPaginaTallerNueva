import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost/api_proyecto/public/usuarios';
  private usuarioActual = signal<any>(typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('usuario') || 'null') : null);
  constructor(private http: HttpClient) {}

  registro(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, datos);
  }
  login(email: string, clave: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, contraseña: clave }).pipe(
      tap(respuesta => {
        localStorage.setItem('token', respuesta.token);
        localStorage.setItem('usuario', JSON.stringify(respuesta.usuario));
        this.usuarioActual.set(respuesta.usuario);
      })
    );
  }
  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
    }
    this.usuarioActual.set(null);
  }
  getToken(): string | null { return typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null; }
  estaLogueado(): boolean { return this.usuarioActual() !== null; }
  esAdmin(): boolean { return this.usuarioActual()?.rol === 'admin'; }
  nombreUsuario(): string { return this.usuarioActual()?.nombre ?? ''; }
}
