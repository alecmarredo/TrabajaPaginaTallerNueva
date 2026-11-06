import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Footer {
    static ɵfac = function Footer_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Footer)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Footer, selectors: [["app-footer"]], decls: 33, vars: 0, consts: [[1, "footer"], [1, "footer-content"], [1, "footer-logo"], ["src", "assets/Logo_pagina_png.png", "alt", "", "width", "250px"], [1, "footer-links"], ["routerLink", "/"], ["routerLink", "/ofertas"], ["routerLink", "/productos"], [1, "footer-contact"], [1, "footer-social"], ["href", "#"], [1, "fab", "fa-instagram"], [1, "fab", "fa-tiktok"], [1, "fab", "fa-facebook-f"], [1, "footer-bottom"]], template: function Footer_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
            i0.ɵɵdomElement(4, "img", 3);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(5, "div", 4)(6, "h3");
            i0.ɵɵtext(7, "Enlaces");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(8, "a", 5);
            i0.ɵɵtext(9, "Inicio");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(10, "a", 6);
            i0.ɵɵtext(11, "Ofertas");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(12, "a", 7);
            i0.ɵɵtext(13, "Productos");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(14, "div", 8)(15, "h3");
            i0.ɵɵtext(16, "Contacto");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(17, "p");
            i0.ɵɵtext(18, "DistrictStore@gmail.com");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(19, "p");
            i0.ɵɵtext(20, "+54 9 299 XXXXXXX");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(21, "div", 9)(22, "h3");
            i0.ɵɵtext(23, "Seguinos");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(24, "a", 10);
            i0.ɵɵdomElement(25, "i", 11);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(26, "a", 10);
            i0.ɵɵdomElement(27, "i", 12);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(28, "a", 10);
            i0.ɵɵdomElement(29, "i", 13);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(30, "div", 14)(31, "p");
            i0.ɵɵtext(32, "\u00A9 2026 District Store | Todos los derechos reservados");
            i0.ɵɵdomElementEnd()()();
        } }, styles: [".footer[_ngcontent-%COMP%] {\r\n    background: #000;\r\n    color: white;\r\n    margin-top: 50px;\r\n    border-top: 2px solid gold;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.footer-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    padding: 40px 60px;\r\n}\r\n\r\n.footer-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    min-width: 200px;\r\n    margin: 10px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: gold;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: none;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n    transition: 0.3s;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: gold;\r\n    transform: translateX(5px);\r\n}\r\n\r\n.footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 22px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.footer-bottom[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 15px;\r\n    border-top: 1px solid #222;\r\n    font-size: 14px;\r\n    color: #888;\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Footer, [{
        type: Component,
        args: [{ selector: 'app-footer', imports: [], template: "<footer class=\"footer\">\r\n    <div class=\"footer-content\">\r\n\r\n        <div class=\"footer-logo\">\r\n            <h2><img src=\"assets/Logo_pagina_png.png\" alt=\"\" width=\"250px\"></h2>\r\n            \r\n        </div>\r\n\r\n        <div class=\"footer-links\">\r\n            <h3>Enlaces</h3>\r\n            <a routerLink=\"/\">Inicio</a>\r\n            <a routerLink=\"/ofertas\">Ofertas</a>\r\n            <a routerLink=\"/productos\">Productos</a>\r\n        </div>\r\n\r\n        <div class=\"footer-contact\">\r\n            <h3>Contacto</h3>\r\n            <p>DistrictStore@gmail.com</p>\r\n            <p>+54 9 299 XXXXXXX</p>\r\n        </div>\r\n\r\n        <div class=\"footer-social\">\r\n            <h3>Seguinos</h3>\r\n            <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"#\"><i class=\"fab fa-tiktok\"></i></a>\r\n            <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"footer-bottom\">\r\n        <p>\u00A9 2026 District Store | Todos los derechos reservados</p>\r\n    </div>\r\n</footer>", styles: [".footer {\r\n    background: #000;\r\n    color: white;\r\n    margin-top: 50px;\r\n    border-top: 2px solid gold;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.footer-content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    padding: 40px 60px;\r\n}\r\n\r\n.footer-content div {\r\n    flex: 1;\r\n    min-width: 200px;\r\n    margin: 10px;\r\n}\r\n\r\n.footer h2, .footer h3 {\r\n    color: gold;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.footer p, .footer a {\r\n    color: #ccc;\r\n    text-decoration: none;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n    transition: 0.3s;\r\n}\r\n\r\n.footer a:hover {\r\n    color: gold;\r\n    transform: translateX(5px);\r\n}\r\n\r\n.footer-social a {\r\n    display: inline-block;\r\n    font-size: 22px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.footer-bottom {\r\n    text-align: center;\r\n    padding: 15px;\r\n    border-top: 1px solid #222;\r\n    font-size: 14px;\r\n    color: #888;\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/compartidos/footer/footer.ts", lineNumber: 9 }); })();
