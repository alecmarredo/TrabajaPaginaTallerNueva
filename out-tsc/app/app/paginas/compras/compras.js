import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../servicio/compra.service";
const _c0 = a0 => ["/ticket", a0];
const _forTrack0 = ($index, $item) => $item.id_compra;
function Compras_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "a", 2);
    i0.ɵɵtext(3, "Ver ticket");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("Compra #", c_r1.id_compra, " \u2014 ", c_r1.fecha, " \u2014 Total: $", c_r1.total, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c0, c_r1.id_compra));
} }
function Compras_ForEmpty_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Todav\u00EDa no hiciste compras.");
    i0.ɵɵelementEnd();
} }
export class Compras {
    compraService;
    compras = [];
    constructor(compraService) {
        this.compraService = compraService;
    }
    ngOnInit() { this.compraService.historial().subscribe(lista => this.compras = lista); }
    static ɵfac = function Compras_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Compras)(i0.ɵɵdirectiveInject(i1.CompraService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Compras, selectors: [["app-compras"]], decls: 6, vars: 1, consts: [[1, "container", "py-5"], [1, "compra", "border-bottom", "py-3"], [3, "routerLink"]], template: function Compras_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2, "Mis compras");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(3, Compras_For_4_Template, 4, 6, "div", 1, _forTrack0, false, Compras_ForEmpty_5_Template, 2, 0, "p");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.compras);
        } }, dependencies: [RouterLink], styles: [".checkout-container[_ngcontent-%COMP%]{\r\n\r\nmax-width:700px;\r\n\r\nmargin:auto;\r\n\r\nmargin-top:50px;\r\n\r\nbackground:#111;\r\n\r\npadding:40px;\r\n\r\nborder-radius:20px;\r\n\r\nborder:1px solid gold;\r\n\r\n}\r\n\r\n.checkout-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n\r\ncolor:gold;\r\n\r\ntext-align:center;\r\n\r\nmargin-bottom:35px;\r\n\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n\r\ndisplay:flex;\r\n\r\nflex-direction:column;\r\n\r\nmargin-bottom:20px;\r\n\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n\r\ncolor:white;\r\n\r\nmargin-bottom:10px;\r\n\r\nfont-weight:bold;\r\n\r\n}\r\n\r\ninput[_ngcontent-%COMP%], \r\nselect[_ngcontent-%COMP%]{\r\n\r\nbackground:#1d1d1d;\r\n\r\nborder:1px solid #333;\r\n\r\npadding:15px;\r\n\r\nborder-radius:10px;\r\n\r\ncolor:white;\r\n\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, \r\nselect[_ngcontent-%COMP%]:focus{\r\n\r\noutline:none;\r\n\r\nborder-color:gold;\r\n\r\n}\r\n\r\n.buy-btn[_ngcontent-%COMP%]{\r\n\r\nwidth:100%;\r\n\r\nbackground:gold;\r\n\r\nborder:none;\r\n\r\npadding:18px;\r\n\r\nborder-radius:40px;\r\n\r\nfont-size:20px;\r\n\r\nfont-weight:bold;\r\n\r\ncursor:pointer;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.buy-btn[_ngcontent-%COMP%]:hover{\r\n\r\ntransform:scale(1.03);\r\n\r\n}\r\n\r\n@media(max-width:768px){\r\n\r\n.checkout-container[_ngcontent-%COMP%]{\r\n\r\nmargin:20px;\r\n\r\npadding:25px;\r\n\r\n}\r\n\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Compras, [{
        type: Component,
        args: [{ selector: 'app-compras', standalone: true, imports: [RouterLink], template: "<div class=\"container py-5\">\n  <h1>Mis compras</h1>\n  @for (c of compras; track c.id_compra) {\n    <div class=\"compra border-bottom py-3\">Compra #{{ c.id_compra }} \u2014 {{ c.fecha }} \u2014 Total: ${{ c.total }}\n      <a [routerLink]=\"['/ticket', c.id_compra]\">Ver ticket</a>\n    </div>\n  } @empty { <p>Todav\u00EDa no hiciste compras.</p> }\n</div>\n", styles: [".checkout-container{\r\n\r\nmax-width:700px;\r\n\r\nmargin:auto;\r\n\r\nmargin-top:50px;\r\n\r\nbackground:#111;\r\n\r\npadding:40px;\r\n\r\nborder-radius:20px;\r\n\r\nborder:1px solid gold;\r\n\r\n}\r\n\r\n.checkout-container h1{\r\n\r\ncolor:gold;\r\n\r\ntext-align:center;\r\n\r\nmargin-bottom:35px;\r\n\r\n}\r\n\r\n.form-group{\r\n\r\ndisplay:flex;\r\n\r\nflex-direction:column;\r\n\r\nmargin-bottom:20px;\r\n\r\n}\r\n\r\nlabel{\r\n\r\ncolor:white;\r\n\r\nmargin-bottom:10px;\r\n\r\nfont-weight:bold;\r\n\r\n}\r\n\r\ninput,\r\nselect{\r\n\r\nbackground:#1d1d1d;\r\n\r\nborder:1px solid #333;\r\n\r\npadding:15px;\r\n\r\nborder-radius:10px;\r\n\r\ncolor:white;\r\n\r\n}\r\n\r\ninput:focus,\r\nselect:focus{\r\n\r\noutline:none;\r\n\r\nborder-color:gold;\r\n\r\n}\r\n\r\n.buy-btn{\r\n\r\nwidth:100%;\r\n\r\nbackground:gold;\r\n\r\nborder:none;\r\n\r\npadding:18px;\r\n\r\nborder-radius:40px;\r\n\r\nfont-size:20px;\r\n\r\nfont-weight:bold;\r\n\r\ncursor:pointer;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.buy-btn:hover{\r\n\r\ntransform:scale(1.03);\r\n\r\n}\r\n\r\n@media(max-width:768px){\r\n\r\n.checkout-container{\r\n\r\nmargin:20px;\r\n\r\npadding:25px;\r\n\r\n}\r\n\r\n}"] }]
    }], () => [{ type: i1.CompraService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Compras, { className: "Compras", filePath: "src/app/paginas/compras/compras.ts", lineNumber: 5 }); })();
