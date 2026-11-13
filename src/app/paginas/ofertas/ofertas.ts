import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../servicio/product.service';
import { Producto } from '../../models/producto.model';
import { carrito } from '../../servicio/carrito';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css'
})
export class Ofertas implements OnInit {
  infoDescuento: Producto[] = [];

  constructor(
    private productService: ProductService,
    private carrito: carrito,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.productService.listarOfertas().subscribe(lista => (this.infoDescuento = lista));
  }

  agregarAlCarrito(p: Producto): void {
    this.carrito.agregar(p.id, 1).subscribe({
      next: () => this.toast.exito('Agregado al carrito'),
      error: () => this.toast.error('Iniciá sesión para usar el carrito')
    });
  }

  imagen(nombre: string): string {
    return this.productService.imagen(nombre);
  }

  descuento(p: Producto): number {
    const precio = Number(p.precio);
    const oferta = Number(p.precio_oferta);
    return precio > 0 ? Math.round(((precio - oferta) / precio) * 100) : 0;
  }
}