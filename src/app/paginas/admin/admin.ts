import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../servicio/product.service';
import { ToastService } from '../../toast.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {
  productos: Producto[] = [];
  usuarios: any[] = [];
  ventas: any[] = [];
  categorias = ['buzos', 'remeras', 'camperas', 'calzado', 'accesorios'];

  form: Partial<Producto> = this.formVacio();
  archivo: File | null = null;
  guardando = false;
  private api = 'http://localhost/api_proyecto/public';

  constructor(
    public productService: ProductService,
    private http: HttpClient,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.cargarTodo();
  }

  private formVacio(): Partial<Producto> {
    return { nombre: '', descripcion: '', precio: 0, imagen: '', categoria: 'buzos', en_oferta: false, precio_oferta: null };
  }

  cargarTodo(): void {
    this.productService.listar().subscribe(l => (this.productos = l));
    this.http.get<any[]>(`${this.api}/usuarios/todos`).subscribe({
      next: l => (this.usuarios = l),
      error: () => this.toast.error('No se pudieron cargar los usuarios.')
    });
    this.http.get<any[]>(`${this.api}/compras/todas`).subscribe({
      next: l => (this.ventas = l),
      error: () => this.toast.error('No se pudieron cargar las ventas.')
    });
  }

  alElegirArchivo(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.archivo = input.files?.[0] || null;
  }

  guardar(): void {
    if (!this.form.nombre || !this.form.precio) {
      this.toast.error('Completá el nombre y el precio.');
      return;
    }
    if (this.form.en_oferta && !this.form.precio_oferta) {
      this.toast.error('Indicá el precio de oferta.');
      return;
    }
    this.guardando = true;

    if (this.archivo) {
      this.productService.subirImagen(this.archivo).subscribe({
        next: r => {
          this.form.imagen = r.imagen;
          this.guardarProducto();
        },
        error: () => {
          this.guardando = false;
          this.toast.error('No se pudo subir la imagen.');
        }
      });
    } else {
      this.guardarProducto();
    }
  }

  private guardarProducto(): void {
    const editando = !!this.form.id;
    const peticion = editando
      ? this.productService.editar(this.form.id!, this.form)
      : this.productService.crear(this.form);

    peticion.subscribe({
      next: () => {
        this.toast.exito(editando ? 'Producto actualizado' : 'Producto creado');
        this.cancelar();
        this.cargarTodo();
        this.guardando = false;
      },
      error: () => {
        this.guardando = false;
        this.toast.error('No se pudo guardar el producto.');
      }
    });
  }

  editar(p: Producto): void {
    this.form = { ...p, en_oferta: Number(p.en_oferta) === 1 };
    this.archivo = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelar(): void {
    this.form = this.formVacio();
    this.archivo = null;
  }

  eliminar(id: number): void {
    if (confirm('¿Eliminar este producto?')) {
      this.productService.eliminar(id).subscribe({
        next: () => {
          this.toast.exito('Producto eliminado');
          this.cargarTodo();
        },
        error: () => this.toast.error('No se pudo eliminar.')
      });
    }
  }

  esOferta(p: Producto): boolean {
    return Number(p.en_oferta) === 1;
  }
}