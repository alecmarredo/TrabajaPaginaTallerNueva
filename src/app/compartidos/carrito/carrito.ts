import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { carrito } from '../../servicio/carrito';
import { ProductService } from '../../servicio/product.service';
@Component({ selector: 'app-carrito', standalone: true, templateUrl: './carrito.html', styleUrls: ['./carrito.css'] })
export class Carrito implements OnInit {
  carritoProductos: any[] = [];
  constructor(private carrito: carrito, private router: Router, public productos: ProductService) {}
  ngOnInit(): void { this.cargar(); }
  cargar(): void { this.carrito.ver().subscribe({ next: lista => this.carritoProductos = lista, error: () => alert('Iniciá sesión para ver tu carrito.') }); }
  aumentarCantidad(item: any): void { this.carrito.actualizar(item.id_producto, Number(item.cantidad) + 1).subscribe(() => this.cargar()); }
  disminuirCantidad(item: any): void { if (Number(item.cantidad) > 1) this.carrito.actualizar(item.id_producto, Number(item.cantidad) - 1).subscribe(() => this.cargar()); }
  eliminarProducto(item: any): void { this.carrito.eliminar(item.id_producto).subscribe(() => this.cargar()); }
  vaciar(): void { this.carrito.vaciar().subscribe(() => this.cargar()); }
  obtenerTotal(): number { return this.carritoProductos.reduce((total, p) => total + Number(p.precio_unitario) * Number(p.cantidad), 0); }
  imagen(nombre: string): string { return this.productos.baseImagenes + nombre; }
  finalizar(): void { this.router.navigate(['/compra']); }
}
