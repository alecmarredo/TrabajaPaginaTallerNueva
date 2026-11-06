import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CompraService {
    http;
    apiUrl = 'http://localhost/api_proyecto/public/compras';
    constructor(http) {
        this.http = http;
    }
    finalizar() { return this.http.post(`${this.apiUrl}/finalizar`, {}); }
    historial() { return this.http.get(this.apiUrl); }
    static ɵfac = function CompraService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CompraService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CompraService, factory: CompraService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompraService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
