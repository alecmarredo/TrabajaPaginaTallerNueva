import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/api_proyecto/public';
  private esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  private token = signal<string | null>(this.leer('token'));
  private usuario = signal<any>(this.leerUsuario());

  estaLogueado = computed(() => !!this.token());
  nombreUsuario = computed(() => this.usuario()?.nombre ?? '');
  usuarioActual = computed(() => this.usuario());

  constructor(private http: HttpClient) {}

  login(email: string, clave: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios/login`, { email, contraseña: clave }).pipe(
      tap(res => {
        this.guardar('token', res.token);
        this.guardar('usuario', JSON.stringify(res.usuario));
        this.token.set(res.token);
        this.usuario.set(res.usuario);
      })
    );
  }

  registro(datos: { nombre: string; email: string; clave: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios/registro`, {
      nombre: datos.nombre,
      email: datos.email,
      contraseña: datos.clave
    });
  }

  getToken(): string | null {
    return this.token();
  }

  logout(): void {
    this.borrar('token');
    this.borrar('usuario');
    this.token.set(null);
    this.usuario.set(null);
  }

  esAdmin(): boolean {
    return this.usuario()?.rol === 'admin';
  }

  // --- Acceso seguro a localStorage (solo en el navegador) ---
  private leer(clave: string): string | null {
    return this.esNavegador ? localStorage.getItem(clave) : null;
  }

  private guardar(clave: string, valor: string): void {
    if (this.esNavegador) localStorage.setItem(clave, valor);
  }

  private borrar(clave: string): void {
    if (this.esNavegador) localStorage.removeItem(clave);
  }

  private leerUsuario(): any {
    try {
      const str = this.leer('usuario');
      return str ? JSON.parse(str) : null;
    } catch {
      return null;
    }
  }
}