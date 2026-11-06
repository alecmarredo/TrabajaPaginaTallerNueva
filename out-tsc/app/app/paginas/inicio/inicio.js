import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Inicio {
    static ɵfac = function Inicio_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Inicio)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Inicio, selectors: [["app-inicio"]], decls: 15, vars: 0, consts: [["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2"], [1, "carousel-item", "active"], ["src", "assets/Buzo 3.jpg", "alt", "Slide 1", 1, "d-block", "w-100", "carousel-img"], [1, "carousel-item"], ["src", "assets/Nike 1.jpg", "alt", "Slide 2", 1, "d-block", "w-100", "carousel-img"], ["src", "assets/Zapatillas 3.jpg", "alt", "Slide 3", 1, "d-block", "w-100", "carousel-img"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"]], template: function Inicio_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵdomElement(2, "button", 2)(3, "button", 3)(4, "button", 4);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "div", 5);
            i0.ɵɵdomElement(6, "img", 6);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(7, "div", 7);
            i0.ɵɵdomElement(8, "img", 8);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(9, "div", 7);
            i0.ɵɵdomElement(10, "img", 9);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(11, "button", 10);
            i0.ɵɵdomElement(12, "span", 11);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(13, "button", 12);
            i0.ɵɵdomElement(14, "span", 13);
            i0.ɵɵdomElementEnd()();
        } }, styles: ["\r\n\r\n#carouselExampleIndicators[_ngcontent-%COMP%] {\r\n\r\n    width: 90%;\r\n\r\n    max-width: 1400px;\r\n\r\n    margin: 40px auto;\r\n\r\n    border-radius: 20px;\r\n\r\n    overflow: hidden;\r\n\r\n    border: 2px solid #c9a227;\r\n\r\n    box-shadow: 0 0 25px rgba(201,162,39,.25);\r\n\r\n}\r\n\r\n\r\n\r\n.carousel-img[_ngcontent-%COMP%] {\r\n\r\n    width: 100%;\r\n\r\n    height: 700px;\r\n\r\n    object-fit: cover;\r\n\r\n}\r\n\r\n\r\n\r\n.carousel-control-prev-icon[_ngcontent-%COMP%], \r\n.carousel-control-next-icon[_ngcontent-%COMP%] {\r\n\r\n    transform: scale(1.5);\r\n\r\n}\r\n\r\n\r\n\r\n.carousel-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\r\n    width: 12px !important;\r\n\r\n    height: 12px !important;\r\n\r\n    border-radius: 50%;\r\n\r\n    background-color: gold !important;\r\n\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Inicio, [{
        type: Component,
        args: [{ selector: 'app-inicio', imports: [], template: "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n  \r\n  <!-- Indicadores -->\r\n  <div class=\"carousel-indicators\">\r\n    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"0\" class=\"active\"></button>\r\n    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"1\"></button>\r\n    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"2\"></button>\r\n  </div>\r\n\r\n  <!-- Im\u00E1genes -->\r\n  <div class=\"carousel-item active\">\r\n  <img src=\"assets/Buzo 3.jpg\" class=\"d-block w-100 carousel-img\" alt=\"Slide 1\">\r\n</div>\r\n\r\n<div class=\"carousel-item\">\r\n  <img src=\"assets/Nike 1.jpg\" class=\"d-block w-100 carousel-img\" alt=\"Slide 2\">\r\n</div>\r\n\r\n<div class=\"carousel-item\">\r\n  <img src=\"assets/Zapatillas 3.jpg\" class=\"d-block w-100 carousel-img\" alt=\"Slide 3\">\r\n</div>\r\n\r\n  <!-- Bot\u00F3n anterior -->\r\n  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\"></span>\r\n  </button>\r\n\r\n  <!-- Bot\u00F3n siguiente -->\r\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\"></span>\r\n  </button>\r\n\r\n</div>", styles: ["/* CONTENEDOR DEL CARRUSEL */\r\n\r\n#carouselExampleIndicators {\r\n\r\n    width: 90%;\r\n\r\n    max-width: 1400px;\r\n\r\n    margin: 40px auto;\r\n\r\n    border-radius: 20px;\r\n\r\n    overflow: hidden;\r\n\r\n    border: 2px solid #c9a227;\r\n\r\n    box-shadow: 0 0 25px rgba(201,162,39,.25);\r\n\r\n}\r\n\r\n/* IM\u00C1GENES */\r\n\r\n.carousel-img {\r\n\r\n    width: 100%;\r\n\r\n    height: 700px;\r\n\r\n    object-fit: cover;\r\n\r\n}\r\n\r\n/* FLECHAS */\r\n\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n\r\n    transform: scale(1.5);\r\n\r\n}\r\n\r\n/* INDICADORES */\r\n\r\n.carousel-indicators button {\r\n\r\n    width: 12px !important;\r\n\r\n    height: 12px !important;\r\n\r\n    border-radius: 50%;\r\n\r\n    background-color: gold !important;\r\n\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Inicio, { className: "Inicio", filePath: "src/app/paginas/inicio/inicio.ts", lineNumber: 9 }); })();
