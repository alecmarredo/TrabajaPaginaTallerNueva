import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../servicio/carrito";
import * as i2 from "../../servicio/compra.service";
import * as i3 from "../../servicio/ticket.service";
import * as i4 from "@angular/router";
const _forTrack0 = ($index, $item) => $item.id_producto;
function Compra_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", i_r1.nombre, " x ", i_r1.cantidad, " \u2014 $", i_r1.precio_unitario);
} }
function Compra_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 1);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function Compra_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 3);
    i0.ɵɵdomListener("click", function Compra_Conditional_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.finalizar()); });
    i0.ɵɵtext(1, "Confirmar compra");
    i0.ɵɵdomElementEnd();
} }
function Compra_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p");
    i0.ɵɵtext(1, "No hay productos en el carrito.");
    i0.ɵɵdomElementEnd();
} }
export class Compra {
    carrito;
    compraService;
    ticketService;
    router;
    items = [];
    error = '';
    constructor(carrito, compraService, ticketService, router) {
        this.carrito = carrito;
        this.compraService = compraService;
        this.ticketService = ticketService;
        this.router = router;
    }
    ngOnInit() { this.carrito.ver().subscribe(lista => this.items = lista); }
    total() { return this.items.reduce((s, i) => s + Number(i.cantidad) * Number(i.precio_unitario), 0); }
    finalizar() {
        this.compraService.finalizar().subscribe({
            next: respuesta => this.ticketService.generar(respuesta.id_compra).subscribe({
                next: () => this.router.navigate(['/ticket', respuesta.id_compra]),
                error: () => this.error = 'La compra se registró, pero la API no pudo generar el PDF del ticket.'
            }), error: e => this.error = e.error?.error || 'No se pudo confirmar la compra.'
        });
    }
    static ɵfac = function Compra_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Compra)(i0.ɵɵdirectiveInject(i1.carrito), i0.ɵɵdirectiveInject(i2.CompraService), i0.ɵɵdirectiveInject(i3.TicketService), i0.ɵɵdirectiveInject(i4.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Compra, selectors: [["app-compra"]], decls: 10, vars: 3, consts: [[1, "container", "py-5"], [1, "text-danger"], [1, "btn", "btn-warning"], [1, "btn", "btn-warning", 3, "click"]], template: function Compra_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2, "Resumen de tu compra");
            i0.ɵɵdomElementEnd();
            i0.ɵɵrepeaterCreate(3, Compra_For_4_Template, 2, 3, "p", null, _forTrack0);
            i0.ɵɵdomElementStart(5, "h3");
            i0.ɵɵtext(6);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(7, Compra_Conditional_7_Template, 2, 1, "p", 1);
            i0.ɵɵconditionalCreate(8, Compra_Conditional_8_Template, 2, 0, "button", 2)(9, Compra_Conditional_9_Template, 2, 0, "p");
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.items);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Total: $", ctx.total());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.items.length > 0 ? 8 : 9);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Compra, [{
        type: Component,
        args: [{ selector: 'app-compra', template: "<div class=\"container py-5\">\n  <h1>Resumen de tu compra</h1>\n  @for (i of items; track i.id_producto) {\n    <p>{{ i.nombre }} x {{ i.cantidad }} \u2014 ${{ i.precio_unitario }}</p>\n  }\n  <h3>Total: ${{ total() }}</h3>\n  @if (error) { <p class=\"text-danger\">{{ error }}</p> }\n  @if (items.length > 0) { <button class=\"btn btn-warning\" (click)=\"finalizar()\">Confirmar compra</button> }\n  @else { <p>No hay productos en el carrito.</p> }\n</div>\n" }]
    }], () => [{ type: i1.carrito }, { type: i2.CompraService }, { type: i3.TicketService }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Compra, { className: "Compra", filePath: "src/app/paginas/compra/compra.ts", lineNumber: 7 }); })();
