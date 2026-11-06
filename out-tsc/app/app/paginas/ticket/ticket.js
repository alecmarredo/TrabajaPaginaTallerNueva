import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../servicio/ticket.service";
function Ticket_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "a", 1);
    i0.ɵɵtext(5, "Descargar PDF");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Ticket ", ctx_r0.ticket.numero_ticket);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Fecha: ", ctx_r0.ticket.fecha);
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("href", ctx_r0.urlPdf, i0.ɵɵsanitizeUrl);
} }
function Ticket_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function Ticket_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p");
    i0.ɵɵtext(1, "Cargando ticket...");
    i0.ɵɵdomElementEnd();
} }
export class Ticket {
    ruta;
    service;
    ticket = null;
    urlPdf = '';
    error = '';
    constructor(ruta, service) {
        this.ruta = ruta;
        this.service = service;
    }
    ngOnInit() {
        const id = Number(this.ruta.snapshot.paramMap.get('id'));
        this.service.ver(id).subscribe({ next: t => { this.ticket = t; this.urlPdf = this.service.baseArchivos + t.pdf_path; }, error: () => this.error = 'No se encontró el ticket.' });
    }
    static ɵfac = function Ticket_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Ticket)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.TicketService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Ticket, selectors: [["app-ticket"]], decls: 4, vars: 1, consts: [[1, "container", "py-5"], ["target", "_blank", "download", "", 3, "href"]], template: function Ticket_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, Ticket_Conditional_1_Template, 6, 3)(2, Ticket_Conditional_2_Template, 2, 1, "p")(3, Ticket_Conditional_3_Template, 2, 0, "p");
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.ticket ? 1 : ctx.error ? 2 : 3);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ticket, [{
        type: Component,
        args: [{ selector: 'app-ticket', template: "<div class=\"container py-5\">\n  @if (ticket) { <h2>Ticket {{ ticket.numero_ticket }}</h2><p>Fecha: {{ ticket.fecha }}</p><a [href]=\"urlPdf\" target=\"_blank\" download>Descargar PDF</a> }\n  @else if (error) { <p>{{ error }}</p> } @else { <p>Cargando ticket...</p> }\n</div>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.TicketService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Ticket, { className: "Ticket", filePath: "src/app/paginas/ticket/ticket.ts", lineNumber: 5 }); })();
