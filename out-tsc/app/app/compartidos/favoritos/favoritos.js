import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../servicio/favoritos";
import * as i2 from "../../servicio/carrito";
import * as i3 from "../../servicio/product.service";
const _forTrack0 = ($index, $item) => $item.id;
function Favoritos_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵdomElement(2, "img", 5);
    i0.ɵɵdomElementStart(3, "div", 6)(4, "h5", 7);
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(6, "p", 8);
    i0.ɵɵtext(7);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(8, "button", 9);
    i0.ɵɵdomListener("click", function Favoritos_For_5_Template_button_click_8_listener() { const p_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.comprar(p_r2)); });
    i0.ɵɵtext(9, "A\u00F1adir al carrito");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "button", 10);
    i0.ɵɵdomListener("click", function Favoritos_For_5_Template_button_click_10_listener() { const p_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.eliminar(p_r2)); });
    i0.ɵɵtext(11, "\u2605");
    i0.ɵɵdomElementEnd()()()();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵdomProperty("src", ctx_r2.imagen(p_r2.imagen), i0.ɵɵsanitizeUrl)("alt", p_r2.nombre);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r2.nombre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", p_r2.precio);
} }
function Favoritos_ForEmpty_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "h2");
    i0.ɵɵtext(1, "No hay favoritos");
    i0.ɵɵdomElementEnd();
} }
export class Favoritos {
    favoritos;
    carrito;
    productos;
    favoritosProductos = [];
    constructor(favoritos, carrito, productos) {
        this.favoritos = favoritos;
        this.carrito = carrito;
        this.productos = productos;
    }
    ngOnInit() { this.cargar(); }
    cargar() { this.favoritos.listar().subscribe({ next: lista => this.favoritosProductos = lista, error: () => alert('Iniciá sesión para ver tus favoritos.') }); }
    comprar(p) { this.carrito.agregar(p.id_producto, 1).subscribe(() => alert('Agregado al carrito.')); }
    eliminar(p) { this.favoritos.eliminar(p.id_producto).subscribe(() => this.cargar()); }
    imagen(nombre) { return this.productos.baseImagenes + nombre; }
    static ɵfac = function Favoritos_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Favoritos)(i0.ɵɵdirectiveInject(i1.favoritos), i0.ɵɵdirectiveInject(i2.carrito), i0.ɵɵdirectiveInject(i3.ProductService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Favoritos, selectors: [["app-favoritos"]], decls: 7, vars: 1, consts: [[1, "container", "mt-5"], [1, "cart-title"], [1, "row"], [1, "col-lg-4", "mb-4"], [1, "card", "product-card"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "price"], [1, "btn", "btn-warning", 3, "click"], [1, "favorite-icon", 3, "click"]], template: function Favoritos_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "\u2B50 Favoritos");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(3, "div", 2);
            i0.ɵɵrepeaterCreate(4, Favoritos_For_5_Template, 12, 4, "div", 3, _forTrack0, false, Favoritos_ForEmpty_6_Template, 2, 0, "h2");
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.favoritosProductos);
        } }, styles: [".product-card[_ngcontent-%COMP%]{\r\n\r\nposition:relative;\r\n\r\nbackground:#111;\r\n\r\nborder:1px solid gold;\r\n\r\nborder-radius:20px;\r\n\r\noverflow:hidden;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.product-card[_ngcontent-%COMP%]:hover{\r\n\r\ntransform:translateY(-8px);\r\n\r\nbox-shadow:\r\n\r\n0 8px 25px\r\n\r\nrgba(255,215,0,.25);\r\n\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n\r\nheight:320px;\r\n\r\nobject-fit:cover;\r\n\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n\r\ntext-align:center;\r\n\r\npadding:25px;\r\n\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]{\r\n\r\ncolor:white;\r\n\r\nfont-size:24px;\r\n\r\nfont-weight:bold;\r\n\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%]{\r\n\r\ncolor:#bbb;\r\n\r\n}\r\n\r\n.price[_ngcontent-%COMP%]{\r\n\r\nfont-size:34px;\r\n\r\nfont-weight:bold;\r\n\r\ncolor:gold;\r\n\r\nmargin:20px 0;\r\n\r\n}\r\n\r\n.btn-warning[_ngcontent-%COMP%]{\r\n\r\nbackground:gold !important;\r\n\r\nborder:none !important;\r\n\r\nfont-weight:bold;\r\n\r\nborder-radius:30px;\r\n\r\npadding:12px;\r\n\r\n}\r\n\r\n.favorite-icon[_ngcontent-%COMP%]{\r\n\r\nposition:absolute;\r\n\r\ntop:15px;\r\n\r\nright:15px;\r\n\r\nwidth:50px;\r\n\r\nheight:50px;\r\n\r\nborder:none;\r\n\r\nborder-radius:50%;\r\n\r\nbackground:#111;\r\n\r\ncolor:gold;\r\n\r\nfont-size:28px;\r\n\r\ncursor:pointer;\r\n\r\nz-index:100;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.favorite-icon[_ngcontent-%COMP%]:hover{\r\n\r\nbackground:gold;\r\n\r\ncolor:black;\r\n\r\ntransform:scale(1.1);\r\n\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Favoritos, [{
        type: Component,
        args: [{ selector: 'app-favoritos', standalone: true, template: "<div class=\"container mt-5\">\n  <h1 class=\"cart-title\">\u2B50 Favoritos</h1>\n  <div class=\"row\">\n    @for (p of favoritosProductos; track p.id) {\n      <div class=\"col-lg-4 mb-4\"><div class=\"card product-card\">\n        <img [src]=\"imagen(p.imagen)\" class=\"card-img-top\" [alt]=\"p.nombre\">\n        <div class=\"card-body\"><h5 class=\"card-title\">{{ p.nombre }}</h5><p class=\"price\">${{ p.precio }}</p>\n          <button class=\"btn btn-warning\" (click)=\"comprar(p)\">A\u00F1adir al carrito</button>\n          <button class=\"favorite-icon\" (click)=\"eliminar(p)\">\u2605</button>\n        </div></div></div>\n    } @empty { <h2>No hay favoritos</h2> }\n  </div>\n</div>\n", styles: [".product-card{\r\n\r\nposition:relative;\r\n\r\nbackground:#111;\r\n\r\nborder:1px solid gold;\r\n\r\nborder-radius:20px;\r\n\r\noverflow:hidden;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.product-card:hover{\r\n\r\ntransform:translateY(-8px);\r\n\r\nbox-shadow:\r\n\r\n0 8px 25px\r\n\r\nrgba(255,215,0,.25);\r\n\r\n}\r\n\r\n.card-img-top{\r\n\r\nheight:320px;\r\n\r\nobject-fit:cover;\r\n\r\n}\r\n\r\n.card-body{\r\n\r\ntext-align:center;\r\n\r\npadding:25px;\r\n\r\n}\r\n\r\n.card-title{\r\n\r\ncolor:white;\r\n\r\nfont-size:24px;\r\n\r\nfont-weight:bold;\r\n\r\n}\r\n\r\n.card-text{\r\n\r\ncolor:#bbb;\r\n\r\n}\r\n\r\n.price{\r\n\r\nfont-size:34px;\r\n\r\nfont-weight:bold;\r\n\r\ncolor:gold;\r\n\r\nmargin:20px 0;\r\n\r\n}\r\n\r\n.btn-warning{\r\n\r\nbackground:gold !important;\r\n\r\nborder:none !important;\r\n\r\nfont-weight:bold;\r\n\r\nborder-radius:30px;\r\n\r\npadding:12px;\r\n\r\n}\r\n\r\n.favorite-icon{\r\n\r\nposition:absolute;\r\n\r\ntop:15px;\r\n\r\nright:15px;\r\n\r\nwidth:50px;\r\n\r\nheight:50px;\r\n\r\nborder:none;\r\n\r\nborder-radius:50%;\r\n\r\nbackground:#111;\r\n\r\ncolor:gold;\r\n\r\nfont-size:28px;\r\n\r\ncursor:pointer;\r\n\r\nz-index:100;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.favorite-icon:hover{\r\n\r\nbackground:gold;\r\n\r\ncolor:black;\r\n\r\ntransform:scale(1.1);\r\n\r\n}"] }]
    }], () => [{ type: i1.favoritos }, { type: i2.carrito }, { type: i3.ProductService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Favoritos, { className: "Favoritos", filePath: "src/app/compartidos/favoritos/favoritos.ts", lineNumber: 6 }); })();
