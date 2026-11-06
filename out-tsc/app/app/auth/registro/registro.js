import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../servicio/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/forms";
function Registro_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
export class Registro {
    auth;
    router;
    nombre = '';
    email = '';
    clave = '';
    confirmarClave = '';
    error = '';
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    registrar() {
        if (this.clave !== this.confirmarClave) {
            this.error = 'Las contraseñas no coinciden.';
            return;
        }
        this.auth.registro({ nombre: this.nombre, email: this.email, contraseña: this.clave }).subscribe({
            next: () => this.router.navigate(['/inicioSesion']),
            error: (e) => this.error = e.error?.error || 'No se pudo crear la cuenta.'
        });
    }
    static ɵfac = function Registro_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Registro)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Registro, selectors: [["app-registro"]], decls: 18, vars: 5, consts: [[1, "register-page"], [1, "register-box"], [3, "ngSubmit"], ["type", "text", "name", "nombre", "placeholder", "Nombre completo", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Correo electr\u00F3nico", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "clave", "placeholder", "Contrase\u00F1a", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "confirmarClave", "placeholder", "Confirmar contrase\u00F1a", "required", "", 3, "ngModelChange", "ngModel"], [1, "text-danger"], ["type", "submit"], ["routerLink", "/inicioSesion"]], template: function Registro_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1");
            i0.ɵɵtext(3, "Crear Cuenta");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "\u00DAnete a District Store");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "form", 2);
            i0.ɵɵlistener("ngSubmit", function Registro_Template_form_ngSubmit_6_listener() { return ctx.registrar(); });
            i0.ɵɵelementStart(7, "input", 3);
            i0.ɵɵtwoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_7_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.nombre, $event) || (ctx.nombre = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_8_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.clave, $event) || (ctx.clave = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_10_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.confirmarClave, $event) || (ctx.confirmarClave = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(11, Registro_Conditional_11_Template, 2, 1, "p", 7);
            i0.ɵɵelementStart(12, "button", 8);
            i0.ɵɵtext(13, "Registrarse");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "\u00BFYa tienes cuenta? ");
            i0.ɵɵelementStart(16, "a", 9);
            i0.ɵɵtext(17, "Inicia sesi\u00F3n");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.nombre);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.clave);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.confirmarClave);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error ? 11 : -1);
        } }, dependencies: [FormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.NgModel, i3.NgForm, RouterLink], styles: [".register-page[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: linear-gradient(to bottom, #111111, #000000);\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 450px;\r\n    background: #111;\r\n    border: 1px solid #c9a227;\r\n    border-radius: 15px;\r\n    padding: 40px 30px;\r\n    text-align: center;\r\n    box-shadow: 0 4px 15px rgba(0,0,0,0.4);\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: gold;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #bbb;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    padding: 12px;\r\n    border: 1px solid #333;\r\n    border-radius: 8px;\r\n    background: #000;\r\n    color: white;\r\n    outline: none;\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: gold;\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background: gold;\r\n    color: black;\r\n    border: none;\r\n    padding: 12px;\r\n    border-radius: 25px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: white;\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 20px;\r\n    color: #bbb;\r\n}\r\n\r\n.register-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: gold;\r\n    text-decoration: none;\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Registro, [{
        type: Component,
        args: [{ selector: 'app-registro', imports: [FormsModule, RouterLink], template: "<div class=\"register-page\">\n  <div class=\"register-box\">\n    <h1>Crear Cuenta</h1>\n    <p>\u00DAnete a District Store</p>\n    <form (ngSubmit)=\"registrar()\">\n      <input type=\"text\" name=\"nombre\" [(ngModel)]=\"nombre\" placeholder=\"Nombre completo\" required>\n      <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Correo electr\u00F3nico\" required>\n      <input type=\"password\" name=\"clave\" [(ngModel)]=\"clave\" placeholder=\"Contrase\u00F1a\" required>\n      <input type=\"password\" name=\"confirmarClave\" [(ngModel)]=\"confirmarClave\" placeholder=\"Confirmar contrase\u00F1a\" required>\n      @if (error) { <p class=\"text-danger\">{{ error }}</p> }\n      <button type=\"submit\">Registrarse</button>\n    </form>\n    <span>\u00BFYa tienes cuenta? <a routerLink=\"/inicioSesion\">Inicia sesi\u00F3n</a></span>\n  </div>\n</div>\n", styles: [".register-page {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: linear-gradient(to bottom, #111111, #000000);\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.register-box {\r\n    width: 100%;\r\n    max-width: 450px;\r\n    background: #111;\r\n    border: 1px solid #c9a227;\r\n    border-radius: 15px;\r\n    padding: 40px 30px;\r\n    text-align: center;\r\n    box-shadow: 0 4px 15px rgba(0,0,0,0.4);\r\n}\r\n\r\n.register-box h1 {\r\n    color: gold;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.register-box p {\r\n    color: #bbb;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.register-box form {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.register-box input {\r\n    margin-bottom: 15px;\r\n    padding: 12px;\r\n    border: 1px solid #333;\r\n    border-radius: 8px;\r\n    background: #000;\r\n    color: white;\r\n    outline: none;\r\n}\r\n\r\n.register-box input:focus {\r\n    border-color: gold;\r\n}\r\n\r\n.register-box button {\r\n    background: gold;\r\n    color: black;\r\n    border: none;\r\n    padding: 12px;\r\n    border-radius: 25px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.register-box button:hover {\r\n    background: white;\r\n}\r\n\r\n.register-box span {\r\n    display: block;\r\n    margin-top: 20px;\r\n    color: #bbb;\r\n}\r\n\r\n.register-box a {\r\n    color: gold;\r\n    text-decoration: none;\r\n}"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Registro, { className: "Registro", filePath: "src/app/auth/registro/registro.ts", lineNumber: 6 }); })();
