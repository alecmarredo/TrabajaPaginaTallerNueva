import { Component, OnInit } from '@angular/core';
import { favoritos } from '../../servicio/favoritos';
import { carrito } from '../../servicio/carrito';
import { ProductService } from '../../servicio/product.service';
@Component({ selector: 'app-favoritos', standalone: true, templateUrl: './favoritos.html', styleUrls: ['./favoritos.css'] })
export class Favoritos implements OnInit {
  favoritosProductos: any[] = [];
  constructor(private favoritos: favoritos, private carrito: carrito, public productos: ProductService) {}
  ngOnInit(): void { this.cargar(); }
  cargar(): void { this.favoritos.listar().subscribe({ next: lista => this.favoritosProductos = lista, error: () => alert('Iniciá sesión para ver tus favoritos.') }); }
  comprar(p: any): void { this.carrito.agregar(p.id_producto, 1).subscribe(() => alert('Agregado al carrito.')); }
  eliminar(p: any): void { this.favoritos.eliminar(p.id_producto).subscribe(() => this.cargar()); }
  imagen(nombre: string): string { return this.productos.baseImagenes + nombre; }
}
