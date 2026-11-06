import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../servicio/product.service';
import { Producto } from '../../models/producto.model';
import { carrito } from '../../servicio/carrito';
@Component({ selector: 'app-ofertas', imports: [], templateUrl: './ofertas.html', styleUrl: './ofertas.css' })
export class Ofertas implements OnInit {
  infoDescuento: Producto[] = [];
  constructor(private productService: ProductService, private carrito: carrito) {}
  ngOnInit(): void { this.productService.listar().subscribe(lista => this.infoDescuento = [...lista].sort((a,b) => Number(a.precio)-Number(b.precio)).slice(0,6)); }
  agregarAlCarrito(p: Producto): void { this.carrito.agregar(p.id, 1).subscribe({ next: () => alert('Agregado al carrito.'), error: () => alert('Iniciá sesión para usar el carrito.') }); }
  imagen(nombre: string): string { return this.productService.baseImagenes + nombre; }
}
