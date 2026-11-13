import { Component, ElementRef, HostListener, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicio/auth.service';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  menuAbierto = signal(false);

  constructor(
    public auth: AuthService,
    private router: Router,
    private toast: ToastService,
    private el: ElementRef
  ) {}

  alternarMenu(): void {
    this.menuAbierto.update(v => !v);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }

  // Cierra el menú al hacer clic fuera de él
  @HostListener('document:click', ['$event'])
  clicFuera(e: Event): void {
    const caja = this.el.nativeElement.querySelector('.usuario-menu');
    if (caja && !caja.contains(e.target as Node)) {
      this.menuAbierto.set(false);
    }
  }

  salir(): void {
    this.auth.logout();
    this.menuAbierto.set(false);
    this.toast.exito('Sesión cerrada');
    this.router.navigate(['/']);
  }
}