import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../servicio/product.service';
import { Producto } from '../../../models/producto.model';
import { carrito } from '../../../servicio/carrito';
import { favoritos } from '../../../servicio/favoritos';
import { ToastService } from '../../../servicio/toast.service';

@Component({
  selector: 'app-seccion',
  imports: [],
  templateUrl: './seccion.html',
  styleUrl: '../productos.css'
})
export class Seccion implements OnInit {
  productos = signal<Producto[]>([]);
  categoria = signal('');
  error = signal('');

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private carrito: carrito,
    private favoritosService: favoritos,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoria.set(params.get('categoria') ?? '');
      this.cargar();
    });
  }

  cargar(): void {
    this.error.set('');
    this.productService.listarPorCategoria(this.categoria()).subscribe({
      next: l => this.productos.set(l),
      error: () => this.error.set('No se pudieron cargar los productos.')
    });
  }

  imagen(nombre: string): string {
    return this.productService.imagen(nombre);
  }

  esOferta(p: Producto): boolean {
    return Number(p.en_oferta) === 1;
  }

  agregar(id: number): void {
    this.carrito.agregar(id, 1).subscribe({
      next: () => this.toast.exito('Producto agregado al carrito'),
      error: () => this.toast.error('Iniciá sesión para usar el carrito')
    });
  }

  favorito(id: number): void {
    this.favoritosService.agregar(id).subscribe({
      next: () => this.toast.exito('Agregado a favoritos'),
      error: () => this.toast.error('Iniciá sesión para usar favoritos')
    });
  }
}