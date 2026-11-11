
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Indumentaria } from '../../../../models/indumentaria';
import { carrito } from '../../../../servicio/carrito';
import { favoritos } from '../../../../servicio/favoritos';

@Component({
  selector: 'app-remeras',
  imports: [CommonModule],
  templateUrl: './remeras.html',
  styleUrl: './remeras.css'
})

export class Remeras {

  public infoIndumentaria: Indumentaria[];

  constructor(
    private carrito: carrito,
    public favoritos: favoritos
  ) {
    this.infoIndumentaria = [
      {
        id: 1,
        titulo: "Remera Nike Sportswear Air Hombre",
        categoria: "Remeras",
        descripcion: "Remera premium de algodón",
        descripcion2: "Muy cómoda",
        img: "assets/Nike 1.jpg",
        alt: "Nike",
        precio: 1500000
      },
      {
        id: 2,
        titulo: "Remera Nike Sportswear Club Hombre",
        categoria: "Remeras",
        descripcion: "Nike original",
        descripcion2: "Muy cómoda",
        img: "assets/Nike 2.jpg",
        alt: "Nike",
        precio: 85000
      },
      {
        id: 3,
        titulo: "Remera Jordan Chomba Break Hombre",
        categoria: "Remeras",
        descripcion: "Jordan original",
        descripcion2: "Muy elegante",
        img: "assets/Jordan.jpg",
        alt: "Jordan",
        precio: 120000
      }
    ];
  }

  toggleFavorito(productos: Indumentaria): void {
    if (this.favoritos.estaEnFavoritos(productos.id)) {
      this.favoritos.eliminar(productos.id).subscribe();
    } else {
      this.favoritos.agregar(productos.id).subscribe();
    }
  }

  agregarAlCarrito(productos: Indumentaria): void {
    this.carrito.agregar(productos.id, 1).subscribe({
      next: () => alert("Producto agregado al carrito"),
      error: () => alert("Iniciá sesión para usar el carrito")
    });
  }
}
