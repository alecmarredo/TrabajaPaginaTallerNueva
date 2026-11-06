import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../servicio/product.service";
import * as i2 from "../../servicio/carrito";
const _forTrack0 = ($index, $item) => $item.id;
function Ofertas_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 1)(1, "span", 2);
    i0.ɵɵtext(2, "\uD83D\uDD25 OFERTA");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElement(3, "img", 3);
    i0.ɵɵdomElementStart(4, "div", 4)(5, "h3", 5);
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(7, "p", 6);
    i0.ɵɵtext(8);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(9, "div", 7)(10, "span", 8);
    i0.ɵɵtext(11);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(12, "button", 9);
    i0.ɵɵdomListener("click", function Ofertas_For_2_Template_button_click_12_listener() { const producto_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.agregarAlCarrito(producto_r2)); });
    i0.ɵɵtext(13, "A\u00F1adir al carrito");
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    const producto_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵdomProperty("src", ctx_r2.imagen(producto_r2.imagen), i0.ɵɵsanitizeUrl)("alt", producto_r2.nombre);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(producto_r2.nombre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(producto_r2.descripcion);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", producto_r2.precio);
} }
function Ofertas_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p");
    i0.ɵɵtext(1, "No hay productos para mostrar.");
    i0.ɵɵdomElementEnd();
} }
export class Ofertas {
    productService;
    carrito;
    infoDescuento = [];
    constructor(productService, carrito) {
        this.productService = productService;
        this.carrito = carrito;
    }
    ngOnInit() { this.productService.listar().subscribe(lista => this.infoDescuento = [...lista].sort((a, b) => Number(a.precio) - Number(b.precio)).slice(0, 6)); }
    agregarAlCarrito(p) { this.carrito.agregar(p.id, 1).subscribe({ next: () => alert('Agregado al carrito.'), error: () => alert('Iniciá sesión para usar el carrito.') }); }
    imagen(nombre) { return this.productService.baseImagenes + nombre; }
    static ɵfac = function Ofertas_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Ofertas)(i0.ɵɵdirectiveInject(i1.ProductService), i0.ɵɵdirectiveInject(i2.carrito)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Ofertas, selectors: [["app-ofertas"]], decls: 4, vars: 1, consts: [[1, "offers-container"], [1, "offer-card"], [1, "offer-badge"], [1, "offer-img", 3, "src", "alt"], [1, "offer-body"], [1, "offer-title"], [1, "offer-description"], [1, "prices"], [1, "new-price"], [1, "btn-offer", 3, "click"]], template: function Ofertas_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0);
            i0.ɵɵrepeaterCreate(1, Ofertas_For_2_Template, 14, 5, "div", 1, _forTrack0, false, Ofertas_ForEmpty_3_Template, 2, 0, "p");
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.infoDescuento);
        } }, styles: [".offers-container[_ngcontent-%COMP%] {\r\n\r\n    display: grid;\r\n\r\n    grid-template-columns:\r\n        repeat(auto-fit, minmax(320px, 350px));\r\n\r\n    justify-content: center;\r\n\r\n    gap: 30px;\r\n\r\n    padding: 50px 20px;\r\n}\r\n\r\n\r\n\r\n.offer-card[_ngcontent-%COMP%] {\r\n\r\n    position: relative;\r\n\r\n    background: #111;\r\n\r\n    border: 1px solid #c9a227;\r\n\r\n    border-radius: 18px;\r\n\r\n    overflow: hidden;\r\n\r\n    transition: 0.3s ease;\r\n\r\n    width: 100%;\r\n\r\n    max-width: 350px;\r\n\r\n    box-shadow:\r\n        0 4px 15px rgba(0,0,0,0.4);\r\n}\r\n\r\n.offer-card[_ngcontent-%COMP%]:hover {\r\n\r\n    transform: translateY(-8px);\r\n\r\n    box-shadow:\r\n        0 8px 25px rgba(201,162,39,0.3);\r\n}\r\n\r\n\r\n\r\n.offer-img[_ngcontent-%COMP%] {\r\n\r\n    width: 100%;\r\n\r\n    height: 300px;\r\n\r\n    object-fit: cover;\r\n\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n.offer-body[_ngcontent-%COMP%] {\r\n\r\n    padding: 20px;\r\n\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.offer-title[_ngcontent-%COMP%] {\r\n\r\n    color: white;\r\n\r\n    font-size: 26px;\r\n\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.offer-description[_ngcontent-%COMP%] {\r\n\r\n    color: #bbb;\r\n\r\n    font-size: 15px;\r\n\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.prices[_ngcontent-%COMP%] {\r\n\r\n    display: flex;\r\n\r\n    justify-content: center;\r\n\r\n    align-items: center;\r\n\r\n    gap: 12px;\r\n\r\n    margin: 15px 0;\r\n}\r\n\r\n.old-price[_ngcontent-%COMP%] {\r\n\r\n    color: gray;\r\n\r\n    text-decoration: line-through;\r\n\r\n    font-size: 18px;\r\n}\r\n\r\n.new-price[_ngcontent-%COMP%] {\r\n\r\n    color: gold;\r\n\r\n    font-size: 34px;\r\n\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.discount[_ngcontent-%COMP%] {\r\n\r\n    color: #00ff95;\r\n\r\n    font-weight: bold;\r\n\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.btn-offer[_ngcontent-%COMP%] {\r\n\r\n    display: inline-block;\r\n\r\n    background: gold;\r\n\r\n    color: black;\r\n\r\n    padding: 12px 24px;\r\n\r\n    border-radius: 30px;\r\n\r\n    text-decoration: none;\r\n\r\n    font-weight: bold;\r\n\r\n    transition: 0.3s;\r\n}\r\n\r\n.btn-offer[_ngcontent-%COMP%]:hover {\r\n\r\n    background: white;\r\n\r\n    color: black;\r\n\r\n    transform: scale(1.05);\r\n}\r\n\r\n\r\n\r\n.offer-badge[_ngcontent-%COMP%] {\r\n\r\n    position: absolute;\r\n\r\n    top: 15px;\r\n    left: 15px;\r\n\r\n    background: red;\r\n\r\n    color: white;\r\n\r\n    font-size: 12px;\r\n\r\n    font-weight: bold;\r\n\r\n    padding: 6px 12px;\r\n\r\n    border-radius: 20px;\r\n\r\n    z-index: 10;\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ofertas, [{
        type: Component,
        args: [{ selector: 'app-ofertas', imports: [], template: "<div class=\"offers-container\">\n  @for (producto of infoDescuento; track producto.id) {\n    <div class=\"offer-card\">\n      <span class=\"offer-badge\">\uD83D\uDD25 OFERTA</span>\n      <img [src]=\"imagen(producto.imagen)\" [alt]=\"producto.nombre\" class=\"offer-img\">\n      <div class=\"offer-body\">\n        <h3 class=\"offer-title\">{{ producto.nombre }}</h3>\n        <p class=\"offer-description\">{{ producto.descripcion }}</p>\n        <div class=\"prices\"><span class=\"new-price\">${{ producto.precio }}</span></div>\n        <button class=\"btn-offer\" (click)=\"agregarAlCarrito(producto)\">A\u00F1adir al carrito</button>\n      </div>\n    </div>\n  } @empty { <p>No hay productos para mostrar.</p> }\n</div>\n", styles: [".offers-container {\r\n\r\n    display: grid;\r\n\r\n    grid-template-columns:\r\n        repeat(auto-fit, minmax(320px, 350px));\r\n\r\n    justify-content: center;\r\n\r\n    gap: 30px;\r\n\r\n    padding: 50px 20px;\r\n}\r\n\r\n/* CARD */\r\n\r\n.offer-card {\r\n\r\n    position: relative;\r\n\r\n    background: #111;\r\n\r\n    border: 1px solid #c9a227;\r\n\r\n    border-radius: 18px;\r\n\r\n    overflow: hidden;\r\n\r\n    transition: 0.3s ease;\r\n\r\n    width: 100%;\r\n\r\n    max-width: 350px;\r\n\r\n    box-shadow:\r\n        0 4px 15px rgba(0,0,0,0.4);\r\n}\r\n\r\n.offer-card:hover {\r\n\r\n    transform: translateY(-8px);\r\n\r\n    box-shadow:\r\n        0 8px 25px rgba(201,162,39,0.3);\r\n}\r\n\r\n/* IMAGEN */\r\n\r\n.offer-img {\r\n\r\n    width: 100%;\r\n\r\n    height: 300px;\r\n\r\n    object-fit: cover;\r\n\r\n    display: block;\r\n}\r\n\r\n/* BODY */\r\n\r\n.offer-body {\r\n\r\n    padding: 20px;\r\n\r\n    text-align: center;\r\n}\r\n\r\n/* TITULO */\r\n\r\n.offer-title {\r\n\r\n    color: white;\r\n\r\n    font-size: 26px;\r\n\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* TEXTO */\r\n\r\n.offer-description {\r\n\r\n    color: #bbb;\r\n\r\n    font-size: 15px;\r\n\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* PRECIOS */\r\n\r\n.prices {\r\n\r\n    display: flex;\r\n\r\n    justify-content: center;\r\n\r\n    align-items: center;\r\n\r\n    gap: 12px;\r\n\r\n    margin: 15px 0;\r\n}\r\n\r\n.old-price {\r\n\r\n    color: gray;\r\n\r\n    text-decoration: line-through;\r\n\r\n    font-size: 18px;\r\n}\r\n\r\n.new-price {\r\n\r\n    color: gold;\r\n\r\n    font-size: 34px;\r\n\r\n    font-weight: bold;\r\n}\r\n\r\n/* DESCUENTO */\r\n\r\n.discount {\r\n\r\n    color: #00ff95;\r\n\r\n    font-weight: bold;\r\n\r\n    margin-bottom: 20px;\r\n}\r\n\r\n/* BOTON */\r\n\r\n.btn-offer {\r\n\r\n    display: inline-block;\r\n\r\n    background: gold;\r\n\r\n    color: black;\r\n\r\n    padding: 12px 24px;\r\n\r\n    border-radius: 30px;\r\n\r\n    text-decoration: none;\r\n\r\n    font-weight: bold;\r\n\r\n    transition: 0.3s;\r\n}\r\n\r\n.btn-offer:hover {\r\n\r\n    background: white;\r\n\r\n    color: black;\r\n\r\n    transform: scale(1.05);\r\n}\r\n\r\n/* BADGE */\r\n\r\n.offer-badge {\r\n\r\n    position: absolute;\r\n\r\n    top: 15px;\r\n    left: 15px;\r\n\r\n    background: red;\r\n\r\n    color: white;\r\n\r\n    font-size: 12px;\r\n\r\n    font-weight: bold;\r\n\r\n    padding: 6px 12px;\r\n\r\n    border-radius: 20px;\r\n\r\n    z-index: 10;\r\n}"] }]
    }], () => [{ type: i1.ProductService }, { type: i2.carrito }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Ofertas, { className: "Ofertas", filePath: "src/app/paginas/ofertas/ofertas.ts", lineNumber: 6 }); })();
