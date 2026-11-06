import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class carrito {
    http;
    apiUrl = 'http://localhost/api_proyecto/public/carrito';
    constructor(http) {
        this.http = http;
    }
    ver() { return this.http.get(this.apiUrl); }
    agregar(idProducto, cantidad = 1) { return this.http.post(`${this.apiUrl}/agregar`, { id_producto: idProducto, cantidad }); }
    actualizar(idProducto, cantidad) { return this.http.put(`${this.apiUrl}/actualizar/${idProducto}`, { cantidad }); }
    eliminar(idProducto) { return this.http.delete(`${this.apiUrl}/eliminar/${idProducto}`); }
    vaciar() { return this.http.delete(`${this.apiUrl}/vaciar`); }
    static ɵfac = function carrito_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || carrito)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: carrito, factory: carrito.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(carrito, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
