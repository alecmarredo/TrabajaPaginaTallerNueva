import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ProductService {
    http;
    apiUrl = 'http://localhost/api_proyecto/public/productos';
    baseImagenes = 'http://localhost/api_proyecto/public/uploads/';
    constructor(http) {
        this.http = http;
    }
    listar(buscar = '') {
        let params = new HttpParams();
        if (buscar.trim())
            params = params.set('buscar', buscar.trim());
        return this.http.get(this.apiUrl, { params });
    }
    verUno(id) { return this.http.get(`${this.apiUrl}/${id}`); }
    crear(producto) { return this.http.post(this.apiUrl, producto); }
    editar(id, producto) { return this.http.put(`${this.apiUrl}/${id}`, producto); }
    eliminar(id) { return this.http.delete(`${this.apiUrl}/${id}`); }
    subirImagen(archivo) {
        const datos = new FormData();
        datos.append('imagen', archivo);
        return this.http.post(`${this.apiUrl}/imagen`, datos);
    }
    static ɵfac = function ProductService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProductService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
