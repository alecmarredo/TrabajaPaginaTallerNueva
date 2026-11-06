import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../../models/producto.model';
import { ProductService } from '../../../../servicio/product.service';
import { favoritos } from '../../../../servicio/favoritos';
import { carrito } from '../../../../servicio/carrito';

@Component({
  selector: 'app-remeras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './remeras.html',
  styleUrls: ['./remeras.css']
})
export class Remeras implements OnInit {
  productos: Producto[] = [];
  buscar = '';

  constructor(
    private productService: ProductService,
    private carrito: carrito,
    private favoritoService: favoritos
  ) {}

   ngOnInit(): void {
    this.cargar();
  }

 cargar(): void {
    this.productService.listar('remera').subscribe({
      next: lista => (this.productos = lista),
      error: err => console.error('Error al cargar productos', err)
    });
  }

  agregar(idProducto: number): void {
    this.carrito.agregar(idProducto, 1).subscribe(() => alert('Agregado al carrito'));
  }

  favorito(idProducto: number): void {
    this.favoritoService.agregar(idProducto).subscribe(() => alert('Agregado a favoritos'));
  }
}