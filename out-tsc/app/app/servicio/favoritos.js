import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class favoritos {
    http;
    apiUrl = 'http://localhost/api_proyecto/public/favoritos';
    constructor(http) {
        this.http = http;
    }
    listar() { return this.http.get(this.apiUrl); }
    agregar(id) { return this.http.post(`${this.apiUrl}/agregar`, { id_producto: id }); }
    eliminar(id) { return this.http.delete(`${this.apiUrl}/eliminar/${id}`); }
    static ɵfac = function favoritos_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || favoritos)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: favoritos, factory: favoritos.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(favoritos, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
