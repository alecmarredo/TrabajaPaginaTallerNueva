import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../servicio/product.service';
import { Producto } from '../../models/producto.model';
import { carrito } from '../../servicio/carrito';
import { favoritos } from '../../servicio/favoritos';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-productos',
  imports: [FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  productos: Producto[] = [];
  buscar = '';
  error = '';

  constructor(
    private productService: ProductService,
    private carrito: carrito,
    private favoritos: favoritos,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.error = '';
    this.productService.listar(this.buscar).subscribe({
      next: lista => (this.productos = lista),
      error: () => (this.error = 'No se pudieron cargar los productos.')
    });
  }

  agregar(id: number): void {
    this.carrito.agregar(id, 1).subscribe({
      next: () => this.toast.exito('Producto agregado al carrito'),
      error: () => this.toast.error('Iniciá sesión para usar el carrito')
    });
  }

  favorito(id: number): void {
    this.favoritos.agregar(id).subscribe({
      next: () => this.toast.exito('Agregado a favoritos'),
      error: () => this.toast.error('Iniciá sesión para guardar favoritos')
    });
  }

  imagen(nombre: string): string {
    return this.productService.imagen(nombre);
  }
}