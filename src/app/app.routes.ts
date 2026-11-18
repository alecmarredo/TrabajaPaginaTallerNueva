import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Productos } from './paginas/productos/productos';
import { Seccion } from './paginas/productos/seccion/seccion';
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

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'seccion/:categoria', component: Seccion },

  { path: 'buzos', redirectTo: 'seccion/buzos' },
  { path: 'remeras', redirectTo: 'seccion/remeras' },
  { path: 'camperas', redirectTo: 'seccion/camperas' },
  { path: 'calzado', redirectTo: 'seccion/calzado' },
  { path: 'accesorios', redirectTo: 'seccion/accesorios' },

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