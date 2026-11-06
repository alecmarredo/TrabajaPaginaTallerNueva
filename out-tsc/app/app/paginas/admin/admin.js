import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../servicio/product.service";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.id_compra;
function Admin_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function Admin_For_19_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 13);
    i0.ɵɵlistener("click", function Admin_For_19_Template_button_click_2_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.editar(p_r3)); });
    i0.ɵɵtext(3, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function Admin_For_19_Template_button_click_4_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.eliminar(p_r3.id)); });
    i0.ɵɵtext(5, "Eliminar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", p_r3.nombre, " \u2014 $", p_r3.precio, " ");
} }
function Admin_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const u_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", u_r4.nombre, " \u2014 ", u_r4.email, " (", u_r4.rol, ")");
} }
function Admin_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4("#", v_r5.id_compra, " \u2014 ", v_r5.nombre, " \u2014 $", v_r5.total, " \u2014 ", v_r5.fecha);
} }
export class Admin {
    productService;
    http;
    productos = [];
    usuarios = [];
    ventas = [];
    form = { nombre: '', descripcion: '', precio: 0, imagen: '' };
    archivo = null;
    error = '';
    api = 'http://localhost/api_proyecto/public';
    constructor(productService, http) {
        this.productService = productService;
        this.http = http;
    }
    ngOnInit() { this.cargarTodo(); }
    cargarTodo() {
        this.productService.listar().subscribe(l => this.productos = l);
        this.http.get(`${this.api}/usuarios/todos`).subscribe({ next: l => this.usuarios = l, error: () => this.error = 'No se pudieron cargar los usuarios.' });
        this.http.get(`${this.api}/compras/todas`).subscribe({ next: l => this.ventas = l, error: () => this.error = 'No se pudieron cargar las ventas.' });
    }
    alElegirArchivo(evento) { const input = evento.target; this.archivo = input.files?.[0] || null; }
    guardar() {
        if (this.archivo)
            this.productService.subirImagen(this.archivo).subscribe({ next: r => { this.form.imagen = r.imagen; this.guardarProducto(); }, error: () => this.error = 'No se pudo subir la imagen.' });
        else
            this.guardarProducto();
    }
    guardarProducto() {
        const peticion = this.form.id ? this.productService.editar(this.form.id, this.form) : this.productService.crear(this.form);
        peticion.subscribe({ next: () => { this.form = { nombre: '', descripcion: '', precio: 0, imagen: '' }; this.archivo = null; this.cargarTodo(); }, error: () => this.error = 'No se pudo guardar el producto.' });
    }
    editar(p) { this.form = { ...p }; this.archivo = null; }
    eliminar(id) { if (confirm('¿Eliminar este producto?'))
        this.productService.eliminar(id).subscribe(() => this.cargarTodo()); }
    static ɵfac = function Admin_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Admin)(i0.ɵɵdirectiveInject(i1.ProductService), i0.ɵɵdirectiveInject(i2.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Admin, selectors: [["app-admin"]], decls: 28, vars: 4, consts: [[1, "container", "py-5"], [1, "text-danger"], [1, "row", "g-2", "mb-3"], [1, "col-md-3"], ["placeholder", "Nombre", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Descripci\u00F3n", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-2"], ["type", "number", "placeholder", "Precio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], [1, "col-md-1"], [1, "btn", "btn-warning", 3, "click"], [1, "border-bottom", "py-2"], [1, "mt-4"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"]], template: function Admin_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2, "Panel de administraci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, Admin_Conditional_3_Template, 2, 1, "p", 1);
            i0.ɵɵelementStart(4, "h2");
            i0.ɵɵtext(5, "Productos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 2)(7, "div", 3)(8, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function Admin_Template_input_ngModelChange_8_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.nombre, $event) || (ctx.form.nombre = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 3)(10, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function Admin_Template_input_ngModelChange_10_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.descripcion, $event) || (ctx.form.descripcion = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 6)(12, "input", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function Admin_Template_input_ngModelChange_12_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.precio, $event) || (ctx.form.precio = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 3)(14, "input", 8);
            i0.ɵɵlistener("change", function Admin_Template_input_change_14_listener($event) { return ctx.alElegirArchivo($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 9)(16, "button", 10);
            i0.ɵɵlistener("click", function Admin_Template_button_click_16_listener() { return ctx.guardar(); });
            i0.ɵɵtext(17, "Guardar");
            i0.ɵɵelementEnd()()();
            i0.ɵɵrepeaterCreate(18, Admin_For_19_Template, 6, 2, "div", 11, _forTrack0);
            i0.ɵɵelementStart(20, "h2", 12);
            i0.ɵɵtext(21, "Usuarios");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(22, Admin_For_23_Template, 2, 3, "p", null, _forTrack0);
            i0.ɵɵelementStart(24, "h2", 12);
            i0.ɵɵtext(25, "Ventas");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(26, Admin_For_27_Template, 2, 4, "p", null, _forTrack1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.error ? 3 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.nombre);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.descripcion);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.precio);
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.productos);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.usuarios);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.ventas);
        } }, dependencies: [FormsModule, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.NgControlStatus, i3.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Admin, [{
        type: Component,
        args: [{ selector: 'app-admin', imports: [FormsModule], template: "<div class=\"container py-5\">\n  <h1>Panel de administraci\u00F3n</h1>\n  @if (error) { <p class=\"text-danger\">{{ error }}</p> }\n  <h2>Productos</h2>\n  <div class=\"row g-2 mb-3\">\n    <div class=\"col-md-3\"><input class=\"form-control\" [(ngModel)]=\"form.nombre\" placeholder=\"Nombre\"></div>\n    <div class=\"col-md-3\"><input class=\"form-control\" [(ngModel)]=\"form.descripcion\" placeholder=\"Descripci\u00F3n\"></div>\n    <div class=\"col-md-2\"><input class=\"form-control\" type=\"number\" [(ngModel)]=\"form.precio\" placeholder=\"Precio\"></div>\n    <div class=\"col-md-3\"><input class=\"form-control\" type=\"file\" accept=\"image/*\" (change)=\"alElegirArchivo($event)\"></div>\n    <div class=\"col-md-1\"><button class=\"btn btn-warning\" (click)=\"guardar()\">Guardar</button></div>\n  </div>\n  @for (p of productos; track p.id) { <div class=\"border-bottom py-2\">{{ p.nombre }} \u2014 ${{ p.precio }} <button class=\"btn btn-sm btn-outline-primary\" (click)=\"editar(p)\">Editar</button> <button class=\"btn btn-sm btn-outline-danger\" (click)=\"eliminar(p.id)\">Eliminar</button></div> }\n  <h2 class=\"mt-4\">Usuarios</h2>\n  @for (u of usuarios; track u.id) { <p>{{ u.nombre }} \u2014 {{ u.email }} ({{ u.rol }})</p> }\n  <h2 class=\"mt-4\">Ventas</h2>\n  @for (v of ventas; track v.id_compra) { <p>#{{ v.id_compra }} \u2014 {{ v.nombre }} \u2014 ${{ v.total }} \u2014 {{ v.fecha }}</p> }\n</div>\n" }]
    }], () => [{ type: i1.ProductService }, { type: i2.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Admin, { className: "Admin", filePath: "src/app/paginas/admin/admin.ts", lineNumber: 7 }); })();
