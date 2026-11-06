import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../servicio/product.service";
import * as i2 from "../../servicio/carrito";
import * as i3 from "../../servicio/favoritos";
import * as i4 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function Productos_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function Productos_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7);
    i0.ɵɵelement(2, "img", 8);
    i0.ɵɵelementStart(3, "div", 9)(4, "h5", 10);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 12);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 13)(11, "button", 14);
    i0.ɵɵlistener("click", function Productos_For_8_Template_button_click_11_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.agregar(p_r3.id)); });
    i0.ɵɵtext(12, "A\u00F1adir al carrito");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 15);
    i0.ɵɵlistener("click", function Productos_For_8_Template_button_click_13_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.favorito(p_r3.id)); });
    i0.ɵɵtext(14, "\u2606");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r0.imagen(p_r3.imagen), i0.ɵɵsanitizeUrl)("alt", p_r3.nombre);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r3.nombre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r3.descripcion);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", p_r3.precio);
} }
function Productos_ForEmpty_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No se encontraron productos.");
    i0.ɵɵelementEnd();
} }
export class Productos {
    productService;
    carrito;
    favoritos;
    productos = [];
    buscar = '';
    error = '';
    constructor(productService, carrito, favoritos) {
        this.productService = productService;
        this.carrito = carrito;
        this.favoritos = favoritos;
    }
    ngOnInit() { this.cargar(); }
    cargar() { this.productService.listar(this.buscar).subscribe({ next: lista => this.productos = lista, error: () => this.error = 'No se pudieron cargar los productos.' }); }
    agregar(id) { this.carrito.agregar(id, 1).subscribe({ next: () => alert('Producto agregado al carrito.'), error: () => alert('Iniciá sesión para usar el carrito.') }); }
    favorito(id) { this.favoritos.agregar(id).subscribe({ next: () => alert('Producto agregado a favoritos.'), error: () => alert('Iniciá sesión para guardar favoritos.') }); }
    imagen(nombre) { return this.productService.baseImagenes + nombre; }
    static ɵfac = function Productos_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Productos)(i0.ɵɵdirectiveInject(i1.ProductService), i0.ɵɵdirectiveInject(i2.carrito), i0.ɵɵdirectiveInject(i3.favoritos)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Productos, selectors: [["app-productos"]], decls: 10, vars: 3, consts: [[1, "container", "mt-5"], [1, "d-flex", "gap-2", "mb-4"], ["placeholder", "Buscar productos...", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-warning", 3, "click"], [1, "text-danger"], [1, "row"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "card", "product-card", "h-100"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title"], [1, "card-text"], [1, "price"], [1, "mt-auto", "d-flex", "gap-2"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline-warning", 3, "click"]], template: function Productos_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
            i0.ɵɵtwoWayListener("ngModelChange", function Productos_Template_input_ngModelChange_2_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.buscar, $event) || (ctx.buscar = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function Productos_Template_input_keyup_enter_2_listener() { return ctx.cargar(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function Productos_Template_button_click_3_listener() { return ctx.cargar(); });
            i0.ɵɵtext(4, "Buscar");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(5, Productos_Conditional_5_Template, 2, 1, "p", 4);
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵrepeaterCreate(7, Productos_For_8_Template, 15, 5, "div", 6, _forTrack0, false, Productos_ForEmpty_9_Template, 2, 0, "p");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.buscar);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.error ? 5 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.productos);
        } }, dependencies: [FormsModule, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: ["\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\r\n    padding: 50px 20px;\r\n\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n\r\n    position: relative;\r\n\r\n    background: #111 !important;\r\n\r\n    border: 1px solid #c9a227 !important;\r\n\r\n    border-radius: 18px !important;\r\n\r\n    overflow: hidden;\r\n\r\n    transition: 0.3s ease;\r\n\r\n    width: 100%;\r\n\r\n    box-shadow:\r\n        0 4px 15px rgba(0,0,0,0.4);\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n\r\n    transform: translateY(-8px);\r\n\r\n    box-shadow:\r\n        0 8px 25px rgba(201,162,39,0.3);\r\n}\r\n\r\n\r\n\r\n.card-img-top[_ngcontent-%COMP%] {\r\n\r\n    width: 100%;\r\n\r\n    height: 300px;\r\n\r\n    object-fit: cover;\r\n\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n\r\n    padding: 20px;\r\n\r\n    text-align: center;\r\n\r\n    display: flex;\r\n\r\n    flex-direction: column;\r\n\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n\r\n    color: white;\r\n\r\n    font-size: 26px;\r\n\r\n    font-weight: bold;\r\n\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n\r\n    color: #bbb;\r\n\r\n    font-size: 15px;\r\n\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.price[_ngcontent-%COMP%] {\r\n\r\n    color: gold;\r\n\r\n    font-size: 34px;\r\n\r\n    font-weight: bold;\r\n\r\n    margin: 15px 0;\r\n}\r\n\r\n\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n\r\n    display: inline-block;\r\n\r\n    background: gold !important;\r\n\r\n    color: black !important;\r\n\r\n    border: none !important;\r\n\r\n    padding: 12px 24px;\r\n\r\n    border-radius: 30px !important;\r\n\r\n    text-decoration: none;\r\n\r\n    font-weight: bold;\r\n\r\n    transition: 0.3s;\r\n\r\n    margin-top: auto;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n\r\n    background: white !important;\r\n\r\n    color: black !important;\r\n\r\n    transform: scale(1.05);\r\n}\r\n\r\n\r\n\r\n.favorite-icon[_ngcontent-%COMP%] {\r\n\r\n    position: absolute;\r\n\r\n    top: 15px;\r\n\r\n    right: 15px;\r\n\r\n    width: 50px;\r\n\r\n    height: 50px;\r\n\r\n    border: none;\r\n\r\n    border-radius: 50%;\r\n\r\n    background: #111;\r\n\r\n    color: gold;\r\n\r\n    font-size: 26px;\r\n\r\n    cursor: pointer;\r\n\r\n    z-index: 10;\r\n\r\n    transition: 0.3s;\r\n}\r\n\r\n.favorite-icon[_ngcontent-%COMP%]:hover {\r\n\r\n    background: gold;\r\n\r\n    color: black;\r\n\r\n    transform: scale(1.1);\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Productos, [{
        type: Component,
        args: [{ selector: 'app-productos', imports: [FormsModule], template: "<div class=\"container mt-5\">\n  <div class=\"d-flex gap-2 mb-4\">\n    <input class=\"form-control\" [(ngModel)]=\"buscar\" (keyup.enter)=\"cargar()\" placeholder=\"Buscar productos...\">\n    <button class=\"btn btn-warning\" (click)=\"cargar()\">Buscar</button>\n  </div>\n  @if (error) { <p class=\"text-danger\">{{ error }}</p> }\n  <div class=\"row\">\n    @for (p of productos; track p.id) {\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n        <div class=\"card product-card h-100\">\n          <img [src]=\"imagen(p.imagen)\" class=\"card-img-top\" [alt]=\"p.nombre\">\n          <div class=\"card-body d-flex flex-column\">\n            <h5 class=\"card-title\">{{ p.nombre }}</h5>\n            <p class=\"card-text\">{{ p.descripcion }}</p>\n            <p class=\"price\">${{ p.precio }}</p>\n            <div class=\"mt-auto d-flex gap-2\">\n              <button class=\"btn btn-primary\" (click)=\"agregar(p.id)\">A\u00F1adir al carrito</button>\n              <button class=\"btn btn-outline-warning\" (click)=\"favorito(p.id)\">\u2606</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    } @empty { <p>No se encontraron productos.</p> }\n  </div>\n</div>\n", styles: ["/* CONTENEDOR */\r\n\r\n.container {\r\n\r\n    padding: 50px 20px;\r\n\r\n}\r\n\r\n/* CARD */\r\n\r\n.card {\r\n\r\n    position: relative;\r\n\r\n    background: #111 !important;\r\n\r\n    border: 1px solid #c9a227 !important;\r\n\r\n    border-radius: 18px !important;\r\n\r\n    overflow: hidden;\r\n\r\n    transition: 0.3s ease;\r\n\r\n    width: 100%;\r\n\r\n    box-shadow:\r\n        0 4px 15px rgba(0,0,0,0.4);\r\n}\r\n\r\n.card:hover {\r\n\r\n    transform: translateY(-8px);\r\n\r\n    box-shadow:\r\n        0 8px 25px rgba(201,162,39,0.3);\r\n}\r\n\r\n/* IMAGEN */\r\n\r\n.card-img-top {\r\n\r\n    width: 100%;\r\n\r\n    height: 300px;\r\n\r\n    object-fit: cover;\r\n\r\n    display: block;\r\n}\r\n\r\n/* BODY */\r\n\r\n.card-body {\r\n\r\n    padding: 20px;\r\n\r\n    text-align: center;\r\n\r\n    display: flex;\r\n\r\n    flex-direction: column;\r\n\r\n    height: 100%;\r\n}\r\n\r\n/* TITULO */\r\n\r\n.card-title {\r\n\r\n    color: white;\r\n\r\n    font-size: 26px;\r\n\r\n    font-weight: bold;\r\n\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* DESCRIPCI\u00D3N */\r\n\r\n.card-text {\r\n\r\n    color: #bbb;\r\n\r\n    font-size: 15px;\r\n\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* PRECIO */\r\n\r\n.price {\r\n\r\n    color: gold;\r\n\r\n    font-size: 34px;\r\n\r\n    font-weight: bold;\r\n\r\n    margin: 15px 0;\r\n}\r\n\r\n/* BOT\u00D3N */\r\n\r\n.btn-primary {\r\n\r\n    display: inline-block;\r\n\r\n    background: gold !important;\r\n\r\n    color: black !important;\r\n\r\n    border: none !important;\r\n\r\n    padding: 12px 24px;\r\n\r\n    border-radius: 30px !important;\r\n\r\n    text-decoration: none;\r\n\r\n    font-weight: bold;\r\n\r\n    transition: 0.3s;\r\n\r\n    margin-top: auto;\r\n}\r\n\r\n.btn-primary:hover {\r\n\r\n    background: white !important;\r\n\r\n    color: black !important;\r\n\r\n    transform: scale(1.05);\r\n}\r\n\r\n/* FAVORITOS */\r\n\r\n.favorite-icon {\r\n\r\n    position: absolute;\r\n\r\n    top: 15px;\r\n\r\n    right: 15px;\r\n\r\n    width: 50px;\r\n\r\n    height: 50px;\r\n\r\n    border: none;\r\n\r\n    border-radius: 50%;\r\n\r\n    background: #111;\r\n\r\n    color: gold;\r\n\r\n    font-size: 26px;\r\n\r\n    cursor: pointer;\r\n\r\n    z-index: 10;\r\n\r\n    transition: 0.3s;\r\n}\r\n\r\n.favorite-icon:hover {\r\n\r\n    background: gold;\r\n\r\n    color: black;\r\n\r\n    transform: scale(1.1);\r\n}"] }]
    }], () => [{ type: i1.ProductService }, { type: i2.carrito }, { type: i3.favoritos }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Productos, { className: "Productos", filePath: "src/app/paginas/productos/productos.ts", lineNumber: 8 }); })();
