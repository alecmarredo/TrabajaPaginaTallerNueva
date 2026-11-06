import { Inicio } from './paginas/inicio/inicio';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Productos } from './paginas/productos/productos';
import { Carrito } from './compartidos/carrito/carrito';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contacto } from './paginas/contacto/contacto';
import { Registro } from './auth/registro/registro';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Compras } from './paginas/compras/compras';
import { Compra } from './paginas/compra/compra';
import { Ticket } from './paginas/ticket/ticket';
import { Admin } from './paginas/admin/admin';
import { adminGuard } from './guard/admin.guard';
export const routes = [
    { path: '', component: Inicio },
    { path: 'productos', component: Productos },
    { path: 'remeras', redirectTo: 'productos' },
    { path: 'camperas', redirectTo: 'productos' },
    { path: 'calzado', redirectTo: 'productos' },
    { path: 'accesorios', redirectTo: 'productos' },
    { path: 'carrito', component: Carrito },
    { path: 'ofertas', component: Ofertas },
    { path: 'contacto', component: Contacto },
    { path: 'registro', component: Registro },
    { path: 'favoritos', component: Favoritos },
    { path: 'inicioSesion', component: InicioSesion },
    { path: 'compras', component: Compras },
    { path: 'compra', component: Compra },
    { path: 'ticket/:id', component: Ticket },
    { path: 'admin', component: Admin, canActivate: [adminGuard] },
    { path: '**', redirectTo: '' }
];
