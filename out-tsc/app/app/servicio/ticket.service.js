import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TicketService {
    http;
    apiUrl = 'http://localhost/api_proyecto/public/tickets';
    baseArchivos = 'http://localhost/api_proyecto/public/';
    constructor(http) {
        this.http = http;
    }
    generar(id) { return this.http.post(`${this.apiUrl}/generar/${id}`, {}); }
    ver(id) { return this.http.get(`${this.apiUrl}/${id}`); }
    static ɵfac = function TicketService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TicketService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TicketService, factory: TicketService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TicketService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
