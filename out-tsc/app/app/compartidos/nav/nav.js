import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../servicio/auth.service";
import * as i2 from "@angular/router";
function Nav_Conditional_43_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 28);
    i0.ɵɵtext(1, "Panel admin");
    i0.ɵɵelementEnd();
} }
function Nav_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(2, Nav_Conditional_43_Conditional_2_Template, 2, 0, "a", 28);
    i0.ɵɵelementStart(3, "button", 29);
    i0.ɵɵlistener("click", function Nav_Conditional_43_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.salir()); });
    i0.ɵɵtext(4, "Salir");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 30);
    i0.ɵɵtext(6, "Mis compras");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Hola, ", ctx_r1.auth.nombreUsuario());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.auth.esAdmin() ? 2 : -1);
} }
function Nav_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 31);
    i0.ɵɵelement(1, "i", 32);
    i0.ɵɵtext(2, " Iniciar sesi\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 33);
    i0.ɵɵelement(4, "i", 34);
    i0.ɵɵtext(5, " Registrarse");
    i0.ɵɵelementEnd();
} }
export class Nav {
    auth;
    router;
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    salir() { this.auth.logout(); this.router.navigate(['/']); }
    static ɵfac = function Nav_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Nav)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Nav, selectors: [["app-nav"]], decls: 47, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/Logo_pagina_png.png", "alt", "Logo", "width", "150"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link", "active"], ["routerLink", "/ofertas", 1, "nav-link"], ["routerLink", "/favoritos", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["routerLink", "/productos", 1, "dropdown-item"], ["routerLink", "/remeras", 1, "dropdown-item"], ["routerLink", "/camperas", 1, "dropdown-item"], ["routerLink", "/calzado", 1, "dropdown-item"], ["routerLink", "/accesorios", 1, "dropdown-item"], ["routerLink", "/contacto", 1, "nav-link"], [1, "search-box"], ["type", "text", "placeholder", "Buscar productos..."], ["type", "submit"], [1, "bi", "bi-search"], [1, "nav-buttons"], ["routerLink", "/carrito", 1, "btn-cart"], [1, "bi", "bi-cart-fill"], [1, "text-light", "me-2"], ["routerLink", "/admin", 1, "btn-register"], ["type", "button", 1, "btn-login", 3, "click"], ["routerLink", "/compras", 1, "btn-register"], ["routerLink", "/inicioSesion", 1, "btn-login"], [1, "bi", "bi-person-fill"], ["routerLink", "/registro", 1, "btn-register"], [1, "bi", "bi-person-plus-fill"]], template: function Nav_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "a", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵelement(4, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 5)(6, "ul", 6)(7, "li", 7)(8, "a", 8);
            i0.ɵɵtext(9, " Inicio ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "li", 7)(11, "a", 9);
            i0.ɵɵtext(12, " Ofertas ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "li", 7)(14, "a", 10);
            i0.ɵɵtext(15, " Favoritos ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "li", 11)(17, "a", 12);
            i0.ɵɵtext(18, " Productos ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "ul", 13)(20, "li")(21, "a", 14);
            i0.ɵɵtext(22, " Buzos ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "li")(24, "a", 15);
            i0.ɵɵtext(25, " Remeras ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "li")(27, "a", 16);
            i0.ɵɵtext(28, " Camperas ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "li")(30, "a", 17);
            i0.ɵɵtext(31, " Calzado ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "li")(33, "a", 18);
            i0.ɵɵtext(34, " Accesorios ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "li", 7)(36, "a", 19);
            i0.ɵɵtext(37, " Contacto ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(38, "form", 20);
            i0.ɵɵelement(39, "input", 21);
            i0.ɵɵelementStart(40, "button", 22);
            i0.ɵɵelement(41, "i", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "div", 24);
            i0.ɵɵconditionalCreate(43, Nav_Conditional_43_Template, 7, 2)(44, Nav_Conditional_44_Template, 6, 0);
            i0.ɵɵelementStart(45, "a", 25);
            i0.ɵɵelement(46, "i", 26);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(43);
            i0.ɵɵconditional(ctx.auth.estaLogueado() ? 43 : 44);
        } }, dependencies: [RouterLink], styles: [".navbar[_ngcontent-%COMP%]{\r\n\r\nbackground:#000 !important;\r\n\r\npadding:10px 30px;\r\n\r\nborder-bottom:2px solid #c9a227;\r\n\r\nbox-shadow:0 2px 10px rgba(0,0,0,.5);\r\n\r\n}\r\n\r\n.navbar-collapse[_ngcontent-%COMP%]{\r\n\r\nalign-items:center;\r\n\r\n}\r\n\r\n\r\n\r\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n\r\ncolor:white !important;\r\n\r\nfont-weight:500;\r\n\r\nmargin-left:15px;\r\n\r\nfont-family:'Montserrat',sans-serif;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{\r\n\r\ncolor:gold !important;\r\n\r\ntransform:scale(1.05);\r\n\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n\r\nmargin-right:6px;\r\n\r\n}\r\n\r\n\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n\r\nbackground:#111;\r\n\r\nborder:1px solid gold;\r\n\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]{\r\n\r\ncolor:white;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:hover{\r\n\r\nbackground:gold;\r\n\r\ncolor:black;\r\n\r\npadding-left:20px;\r\n\r\n}\r\n\r\n\r\n\r\n.search-box[_ngcontent-%COMP%]{\r\n\r\ndisplay:flex;\r\n\r\nalign-items:center;\r\n\r\nbackground:#111;\r\n\r\nborder:1px solid gold;\r\n\r\nborder-radius:30px;\r\n\r\noverflow:hidden;\r\n\r\nmargin-left:auto;\r\n\r\nmargin-right:20px;\r\n\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n\r\nbackground:transparent;\r\n\r\nborder:none;\r\n\r\noutline:none;\r\n\r\npadding:10px 15px;\r\n\r\ncolor:white;\r\n\r\nwidth:180px;\r\n\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\r\n\r\ncolor:#bbb;\r\n\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n\r\nborder:none;\r\n\r\nbackground:gold;\r\n\r\npadding:10px 15px;\r\n\r\ndisplay:flex;\r\n\r\nalign-items:center;\r\n\r\njustify-content:center;\r\n\r\ntransition:.3s;\r\n\r\ncursor:pointer;\r\n\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n\r\nbackground:white;\r\n\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n\r\nfont-size:18px;\r\n\r\n}\r\n\r\n\r\n\r\n.nav-buttons[_ngcontent-%COMP%]{\r\n\r\ndisplay:flex;\r\n\r\ngap:10px;\r\n\r\nalign-items:center;\r\n\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%], \r\n.btn-register[_ngcontent-%COMP%]{\r\n\r\npadding:8px 15px;\r\n\r\nborder-radius:25px;\r\n\r\ntext-decoration:none !important;\r\n\r\ntransition:.3s;\r\n\r\nwhite-space:nowrap;\r\n\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%]{\r\n\r\nborder:1px solid gold;\r\n\r\ncolor:white !important;\r\n\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%]:hover{\r\n\r\nbackground:gold;\r\n\r\ncolor:black !important;\r\n\r\n}\r\n\r\n.btn-register[_ngcontent-%COMP%]{\r\n\r\nbackground:gold;\r\n\r\ncolor:black !important;\r\n\r\nfont-weight:bold;\r\n\r\n}\r\n\r\n.btn-register[_ngcontent-%COMP%]:hover{\r\n\r\nbackground:white;\r\n\r\n}\r\n\r\n\r\n\r\n.btn-cart[_ngcontent-%COMP%]{\r\n\r\nposition:relative;\r\n\r\nwidth:50px;\r\n\r\nheight:50px;\r\n\r\nborder-radius:50%;\r\n\r\nbackground:gold;\r\n\r\ndisplay:flex;\r\n\r\nalign-items:center;\r\n\r\njustify-content:center;\r\n\r\ntext-decoration:none;\r\n\r\ncolor:black !important;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.btn-cart[_ngcontent-%COMP%]:hover{\r\n\r\nbackground:white;\r\n\r\ntransform:scale(1.08);\r\n\r\n}\r\n\r\n.btn-cart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n\r\nfont-size:24px;\r\n\r\n}\r\n\r\n.cart-count[_ngcontent-%COMP%]{\r\n\r\nposition:absolute;\r\n\r\ntop:-4px;\r\n\r\nright:-4px;\r\n\r\nbackground:red;\r\n\r\nwidth:20px;\r\n\r\nheight:20px;\r\n\r\nborder-radius:50%;\r\n\r\ndisplay:flex;\r\n\r\nalign-items:center;\r\n\r\njustify-content:center;\r\n\r\nfont-size:11px;\r\n\r\ncolor:white;\r\n\r\nfont-weight:bold;\r\n\r\n}\r\n\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n\r\ntransform:scale(1.08);\r\n\r\n}\r\n\r\n\r\n\r\n@media(max-width:991px){\r\n\r\n.navbar-collapse[_ngcontent-%COMP%]{\r\n\r\nflex-direction:column;\r\n\r\nalign-items:stretch;\r\n\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]{\r\n\r\nwidth:100%;\r\n\r\nmargin:20px 0;\r\n\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n\r\nwidth:100%;\r\n\r\n}\r\n\r\n.nav-buttons[_ngcontent-%COMP%]{\r\n\r\nflex-direction:column;\r\n\r\nwidth:100%;\r\n\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%], \r\n.btn-register[_ngcontent-%COMP%], \r\n.btn-cart[_ngcontent-%COMP%]{\r\n\r\nwidth:100%;\r\n\r\njustify-content:center;\r\n\r\nmargin-bottom:10px;\r\n\r\n}\r\n\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Nav, [{
        type: Component,
        args: [{ selector: 'app-nav', imports: [RouterLink], template: "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n\n  <!-- LOGO -->\n\n  <a class=\"navbar-brand\" routerLink=\"/\">\n\n    <img src=\"assets/Logo_pagina_png.png\" alt=\"Logo\" width=\"150\">\n\n  </a>\n\n  <!-- BOTON RESPONSIVE -->\n\n  <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\">\n\n    <span class=\"navbar-toggler-icon\">\n\n    </span>\n\n  </button>\n\n  <!-- CONTENIDO -->\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <!-- LINKS -->\n\n    <ul class=\"navbar-nav me-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link active\" routerLink=\"/\">\n\n          Inicio\n\n        </a>\n\n      </li>\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" routerLink=\"/ofertas\">\n\n          Ofertas\n\n        </a>\n\n      </li>\n\n      <!-- FAVORITOS -->\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" routerLink=\"/favoritos\">\n\n          Favoritos\n\n        </a>\n\n      </li>\n\n      <!-- PRODUCTOS -->\n\n      <li class=\"nav-item dropdown\">\n\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-bs-toggle=\"dropdown\">\n\n          Productos\n\n        </a>\n\n        <ul class=\"dropdown-menu\">\n\n          <li>\n\n            <a class=\"dropdown-item\" routerLink=\"/productos\">\n\n              Buzos\n\n            </a>\n\n          </li>\n\n          <li>\n\n            <a class=\"dropdown-item\" routerLink=\"/remeras\"> \n\n              Remeras\n\n            </a>\n\n          </li>\n\n          <li>\n\n            <a class=\"dropdown-item\" routerLink=\"/camperas\">\n\n              Camperas\n\n            </a>\n\n          </li>\n\n          <li>\n\n            <a class=\"dropdown-item\" routerLink=\"/calzado\">\n\n              Calzado\n\n            </a>\n\n          </li>\n\n          <li>\n\n            <a class=\"dropdown-item\" routerLink=\"/accesorios\">\n\n              Accesorios\n\n            </a>\n\n          </li>\n\n        </ul>\n\n      </li>\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" routerLink=\"/contacto\">\n\n          Contacto\n\n        </a>\n\n      </li>\n\n    </ul>\n\n    <!-- BUSCADOR -->\n\n    <form class=\"search-box\">\n\n      <input type=\"text\" placeholder=\"Buscar productos...\">\n\n      <button type=\"submit\">\n\n        <i class=\"bi bi-search\">\n\n        </i>\n\n      </button>\n\n    </form>\n\n    <!-- BOTONES -->\n\n    <div class=\"nav-buttons\">\n\n      @if (auth.estaLogueado()) {\n        <span class=\"text-light me-2\">Hola, {{ auth.nombreUsuario() }}</span>\n        @if (auth.esAdmin()) { <a routerLink=\"/admin\" class=\"btn-register\">Panel admin</a> }\n        <button type=\"button\" class=\"btn-login\" (click)=\"salir()\">Salir</button>\n        <a routerLink=\"/compras\" class=\"btn-register\">Mis compras</a>\n      } @else {\n        <a routerLink=\"/inicioSesion\" class=\"btn-login\"><i class=\"bi bi-person-fill\"></i> Iniciar sesi\u00F3n</a>\n        <a routerLink=\"/registro\" class=\"btn-register\"><i class=\"bi bi-person-plus-fill\"></i> Registrarse</a>\n      }\n\n      <!-- CARRITO -->\n\n      <a routerLink=\"/carrito\" class=\"btn-cart\">\n\n        <i class=\"bi bi-cart-fill\">\n\n        </i>\n\n        \n\n      </a>\n\n    </div>\n\n  </div>\n\n</nav>", styles: [".navbar{\r\n\r\nbackground:#000 !important;\r\n\r\npadding:10px 30px;\r\n\r\nborder-bottom:2px solid #c9a227;\r\n\r\nbox-shadow:0 2px 10px rgba(0,0,0,.5);\r\n\r\n}\r\n\r\n.navbar-collapse{\r\n\r\nalign-items:center;\r\n\r\n}\r\n\r\n/* LINKS */\r\n\r\n.navbar .nav-link{\r\n\r\ncolor:white !important;\r\n\r\nfont-weight:500;\r\n\r\nmargin-left:15px;\r\n\r\nfont-family:'Montserrat',sans-serif;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.navbar .nav-link:hover{\r\n\r\ncolor:gold !important;\r\n\r\ntransform:scale(1.05);\r\n\r\n}\r\n\r\n.navbar .nav-link i{\r\n\r\nmargin-right:6px;\r\n\r\n}\r\n\r\n/* DROPDOWN */\r\n\r\n.dropdown-menu{\r\n\r\nbackground:#111;\r\n\r\nborder:1px solid gold;\r\n\r\n}\r\n\r\n.dropdown-item{\r\n\r\ncolor:white;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.dropdown-item:hover{\r\n\r\nbackground:gold;\r\n\r\ncolor:black;\r\n\r\npadding-left:20px;\r\n\r\n}\r\n\r\n/* SEARCH */\r\n\r\n.search-box{\r\n\r\ndisplay:flex;\r\n\r\nalign-items:center;\r\n\r\nbackground:#111;\r\n\r\nborder:1px solid gold;\r\n\r\nborder-radius:30px;\r\n\r\noverflow:hidden;\r\n\r\nmargin-left:auto;\r\n\r\nmargin-right:20px;\r\n\r\n}\r\n\r\n.search-box input{\r\n\r\nbackground:transparent;\r\n\r\nborder:none;\r\n\r\noutline:none;\r\n\r\npadding:10px 15px;\r\n\r\ncolor:white;\r\n\r\nwidth:180px;\r\n\r\n}\r\n\r\n.search-box input::placeholder{\r\n\r\ncolor:#bbb;\r\n\r\n}\r\n\r\n.search-box button{\r\n\r\nborder:none;\r\n\r\nbackground:gold;\r\n\r\npadding:10px 15px;\r\n\r\ndisplay:flex;\r\n\r\nalign-items:center;\r\n\r\njustify-content:center;\r\n\r\ntransition:.3s;\r\n\r\ncursor:pointer;\r\n\r\n}\r\n\r\n.search-box button:hover{\r\n\r\nbackground:white;\r\n\r\n}\r\n\r\n.search-box i{\r\n\r\nfont-size:18px;\r\n\r\n}\r\n\r\n/* BOTONES */\r\n\r\n.nav-buttons{\r\n\r\ndisplay:flex;\r\n\r\ngap:10px;\r\n\r\nalign-items:center;\r\n\r\n}\r\n\r\n.btn-login,\r\n.btn-register{\r\n\r\npadding:8px 15px;\r\n\r\nborder-radius:25px;\r\n\r\ntext-decoration:none !important;\r\n\r\ntransition:.3s;\r\n\r\nwhite-space:nowrap;\r\n\r\n}\r\n\r\n.btn-login{\r\n\r\nborder:1px solid gold;\r\n\r\ncolor:white !important;\r\n\r\n}\r\n\r\n.btn-login:hover{\r\n\r\nbackground:gold;\r\n\r\ncolor:black !important;\r\n\r\n}\r\n\r\n.btn-register{\r\n\r\nbackground:gold;\r\n\r\ncolor:black !important;\r\n\r\nfont-weight:bold;\r\n\r\n}\r\n\r\n.btn-register:hover{\r\n\r\nbackground:white;\r\n\r\n}\r\n\r\n/* CARRITO */\r\n\r\n.btn-cart{\r\n\r\nposition:relative;\r\n\r\nwidth:50px;\r\n\r\nheight:50px;\r\n\r\nborder-radius:50%;\r\n\r\nbackground:gold;\r\n\r\ndisplay:flex;\r\n\r\nalign-items:center;\r\n\r\njustify-content:center;\r\n\r\ntext-decoration:none;\r\n\r\ncolor:black !important;\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.btn-cart:hover{\r\n\r\nbackground:white;\r\n\r\ntransform:scale(1.08);\r\n\r\n}\r\n\r\n.btn-cart i{\r\n\r\nfont-size:24px;\r\n\r\n}\r\n\r\n.cart-count{\r\n\r\nposition:absolute;\r\n\r\ntop:-4px;\r\n\r\nright:-4px;\r\n\r\nbackground:red;\r\n\r\nwidth:20px;\r\n\r\nheight:20px;\r\n\r\nborder-radius:50%;\r\n\r\ndisplay:flex;\r\n\r\nalign-items:center;\r\n\r\njustify-content:center;\r\n\r\nfont-size:11px;\r\n\r\ncolor:white;\r\n\r\nfont-weight:bold;\r\n\r\n}\r\n\r\n/* LOGO */\r\n\r\n.navbar-brand img{\r\n\r\ntransition:.3s;\r\n\r\n}\r\n\r\n.navbar-brand img:hover{\r\n\r\ntransform:scale(1.08);\r\n\r\n}\r\n\r\n/* RESPONSIVE */\r\n\r\n@media(max-width:991px){\r\n\r\n.navbar-collapse{\r\n\r\nflex-direction:column;\r\n\r\nalign-items:stretch;\r\n\r\n}\r\n\r\n.search-box{\r\n\r\nwidth:100%;\r\n\r\nmargin:20px 0;\r\n\r\n}\r\n\r\n.search-box input{\r\n\r\nwidth:100%;\r\n\r\n}\r\n\r\n.nav-buttons{\r\n\r\nflex-direction:column;\r\n\r\nwidth:100%;\r\n\r\n}\r\n\r\n.btn-login,\r\n.btn-register,\r\n.btn-cart{\r\n\r\nwidth:100%;\r\n\r\njustify-content:center;\r\n\r\nmargin-bottom:10px;\r\n\r\n}\r\n\r\n}"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Nav, { className: "Nav", filePath: "src/app/compartidos/nav/nav.ts", lineNumber: 5 }); })();
