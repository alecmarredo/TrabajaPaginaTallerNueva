import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './compartidos/nav/nav';
import { Footer } from './compartidos/footer/footer';
import * as i0 from "@angular/core";
export class App {
    title = signal('proyectoAlec', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 3, vars: 0, template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-nav")(1, "router-outlet")(2, "app-footer");
        } }, dependencies: [RouterOutlet, Nav, Footer], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', imports: [RouterOutlet, Nav, Footer], template: "<app-nav></app-nav> <!-- Men\u00FA de navegaci\u00F3n -->\r\n<router-outlet></router-outlet> <!-- Aqu\u00ED cambia el contenido -->\r\n<app-footer></app-footer>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 }); })();
