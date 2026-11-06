import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../servicio/product.service';
import { Producto } from '../../models/producto.model';
@Component({ selector: 'app-admin', imports: [FormsModule], templateUrl: './admin.html' })
export class Admin implements OnInit {
  productos: Producto[] = []; usuarios: any[] = []; ventas: any[] = [];
  form: Partial<Producto> = { nombre: '', descripcion: '', precio: 0, imagen: '' };
  archivo: File | null = null; error = '';
  private api = 'http://localhost/api_proyecto/public';
  constructor(private productService: ProductService, private http: HttpClient) {}
  ngOnInit(): void { this.cargarTodo(); }
  cargarTodo(): void {
    this.productService.listar().subscribe(l => this.productos = l);
    this.http.get<any[]>(`${this.api}/usuarios/todos`).subscribe({ next: l => this.usuarios = l, error: () => this.error = 'No se pudieron cargar los usuarios.' });
    this.http.get<any[]>(`${this.api}/compras/todas`).subscribe({ next: l => this.ventas = l, error: () => this.error = 'No se pudieron cargar las ventas.' });
  }
  alElegirArchivo(evento: Event): void { const input = evento.target as HTMLInputElement; this.archivo = input.files?.[0] || null; }
  guardar(): void {
    if (this.archivo) this.productService.subirImagen(this.archivo).subscribe({ next: r => { this.form.imagen = r.imagen; this.guardarProducto(); }, error: () => this.error = 'No se pudo subir la imagen.' });
    else this.guardarProducto();
  }
  private guardarProducto(): void {
    const peticion = this.form.id ? this.productService.editar(this.form.id, this.form) : this.productService.crear(this.form);
    peticion.subscribe({ next: () => { this.form = { nombre: '', descripcion: '', precio: 0, imagen: '' }; this.archivo = null; this.cargarTodo(); }, error: () => this.error = 'No se pudo guardar el producto.' });
  }
  editar(p: Producto): void { this.form = { ...p }; this.archivo = null; }
  eliminar(id: number): void { if (confirm('¿Eliminar este producto?')) this.productService.eliminar(id).subscribe(() => this.cargarTodo()); }
}
