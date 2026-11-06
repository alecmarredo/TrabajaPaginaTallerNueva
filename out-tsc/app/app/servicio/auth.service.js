import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthService {
    http;
    apiUrl = 'http://localhost/api_proyecto/public/usuarios';
    usuarioActual = signal(typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('usuario') || 'null') : null, ...(ngDevMode ? [{ debugName: "usuarioActual" }] : /* istanbul ignore next */ []));
    constructor(http) {
        this.http = http;
    }
    registro(datos) {
        return this.http.post(`${this.apiUrl}/registro`, datos);
    }
    login(email, clave) {
        return this.http.post(`${this.apiUrl}/login`, { email, contraseña: clave }).pipe(tap(respuesta => {
            localStorage.setItem('token', respuesta.token);
            localStorage.setItem('usuario', JSON.stringify(respuesta.usuario));
            this.usuarioActual.set(respuesta.usuario);
        }));
    }
    logout() {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('token');
            localStorage.removeItem('usuario');
        }
        this.usuarioActual.set(null);
    }
    getToken() { return typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null; }
    estaLogueado() { return this.usuarioActual() !== null; }
    esAdmin() { return this.usuarioActual()?.rol === 'admin'; }
    nombreUsuario() { return this.usuarioActual()?.nombre ?? ''; }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
