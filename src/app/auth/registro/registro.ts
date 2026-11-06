import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicio/auth.service';
@Component({ selector: 'app-registro', imports: [FormsModule, RouterLink], templateUrl: './registro.html', styleUrl: './registro.css' })
export class Registro {
  nombre = ''; email = ''; clave = ''; confirmarClave = ''; error = '';
  constructor(private auth: AuthService, private router: Router) {}
  registrar(): void {
    if (this.clave !== this.confirmarClave) { this.error = 'Las contraseñas no coinciden.'; return; }
    this.auth.registro({ nombre: this.nombre, email: this.email, contraseña: this.clave }).subscribe({
      next: () => this.router.navigate(['/inicioSesion']),
      error: (e) => this.error = e.error?.error || 'No se pudo crear la cuenta.'
    });
  }
}
